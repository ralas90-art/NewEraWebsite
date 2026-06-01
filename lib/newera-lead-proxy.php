<?php
/**
 * Plugin Name: New Era Solar Lead Proxy & CAPI Sync
 * Description: Secure endpoint proxy for GHL lead ingestion and Meta Conversions API (CAPI) server-side event sync.
 * Version: 1.0.0
 * Author: Antigravity
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

// 1. Define configuration settings (Typically stored in wp-config.php or WP options table)
if (!defined('NEWERA_GHL_SOLAR_WEBHOOK')) {
    define('NEWERA_GHL_SOLAR_WEBHOOK', 'https://services.leadconnectorhq.com/hooks/placeholder_solar');
}
if (!defined('NEWERA_GHL_ROOFING_WEBHOOK')) {
    define('NEWERA_GHL_ROOFING_WEBHOOK', 'https://services.leadconnectorhq.com/hooks/placeholder_roofing');
}
if (!defined('NEWERA_GHL_WATER_WEBHOOK')) {
    define('NEWERA_GHL_WATER_WEBHOOK', 'https://services.leadconnectorhq.com/hooks/placeholder_water');
}
if (!defined('NEWERA_GHL_CONTACT_WEBHOOK')) {
    define('NEWERA_GHL_CONTACT_WEBHOOK', 'https://services.leadconnectorhq.com/hooks/placeholder_contact');
}
if (!defined('NEWERA_META_PIXEL_ID')) {
    define('NEWERA_META_PIXEL_ID', 'YOUR_META_PIXEL_ID');
}
if (!defined('NEWERA_META_CAPI_TOKEN')) {
    define('NEWERA_META_CAPI_TOKEN', 'YOUR_META_CAPI_ACCESS_TOKEN');
}

// 2. Register Custom WP REST API Endpoint
add_action('rest_api_init', function () {
    register_rest_route('newera/v1', '/lead-submit', array(
        'methods'             => 'POST',
        'callback'            => 'newera_handle_lead_submission',
        'permission_callback' => '__return_true', // Public endpoint, referrer validation is handled in callback
    ));
});

/**
 * Handle incoming lead payload from embedded React apps
 */
function newera_handle_lead_submission(WP_REST_Request $request) {
    $params = $request->get_json_params();

    if (empty($params)) {
        return new WP_REST_Response(array('status' => 'error', 'message' => 'Empty payload'), 400);
    }

    // A. Sanitize User Input Data
    $firstName              = sanitize_text_field($params['firstName'] ?? '');
    $lastName               = sanitize_text_field($params['lastName'] ?? '');
    $phone                  = sanitize_text_field($params['phone'] ?? '');
    $email                  = sanitize_email($params['email'] ?? '');
    $postalCode             = sanitize_text_field($params['postalCode'] ?? '');
    $serviceInterest        = sanitize_text_field($params['serviceInterest'] ?? '');
    $electricBillMonthly    = sanitize_text_field($params['electricBillMonthly'] ?? 'N/A');
    $roofAge                = sanitize_text_field($params['roofAge'] ?? 'N/A');
    $roofingNeed            = sanitize_text_field($params['roofingNeed'] ?? 'N/A');
    $waterConcern           = sanitize_text_field($params['waterConcern'] ?? 'N/A');
    $recommendedNextStep    = sanitize_text_field($params['recommendedNextStep'] ?? '');
    $preferredContactMethod = sanitize_text_field($params['preferredContactMethod'] ?? '');
    $bestContactTime        = sanitize_text_field($params['bestContactTime'] ?? '');
    $advisorSummary         = sanitize_textarea_field($params['advisorSummary'] ?? '');
    $tags                   = $params['tags'] ?? array();
    $pageUrl                = esc_url_raw($params['pageUrl'] ?? '');
    $utmSource              = sanitize_text_field($params['utmSource'] ?? '');
    $utmMedium              = sanitize_text_field($params['utmMedium'] ?? '');
    $utmCampaign            = sanitize_text_field($params['utmCampaign'] ?? '');
    $utmContent             = sanitize_text_field($params['utmContent'] ?? '');
    $utmTerm                = sanitize_text_field($params['utmTerm'] ?? '');
    $eventId                = sanitize_text_field($params['eventId'] ?? '');

    // B. Map Tags & Route Webhook Endpoint
    $webhook_url = NEWERA_GHL_CONTACT_WEBHOOK;
    if (in_array('newera_solar_lead', $tags)) {
        $webhook_url = NEWERA_GHL_SOLAR_WEBHOOK;
    } elseif (in_array('newera_roofing_lead', $tags)) {
        $webhook_url = NEWERA_GHL_ROOFING_WEBHOOK;
    } elseif (in_array('newera_water_lead', $tags)) {
        $webhook_url = NEWERA_GHL_WATER_WEBHOOK;
    }

    $ghl_body = array(
        'first_name'             => $firstName,
        'last_name'              => $lastName,
        'phone'                  => $phone,
        'email'                  => $email,
        'postal_code'            => $postalCode,
        'service_interest'       => $serviceInterest,
        'electric_bill_monthly'  => $electricBillMonthly,
        'roof_age'               => $roofAge,
        'roofing_need'           => $roofingNeed,
        'water_concern'          => $waterConcern,
        'recommended_next_step'  => $recommendedNextStep,
        'preferred_contact'      => $preferredContactMethod,
        'best_contact_time'      => $bestContactTime,
        'advisor_summary'        => $advisorSummary,
        'tags'                   => implode(',', $tags),
        'page_url'               => $pageUrl,
        'utm_source'             => $utmSource,
        'utm_medium'             => $utmMedium,
        'utm_campaign'           => $utmCampaign,
        'utm_content'            => $utmContent,
        'utm_term'               => $utmTerm
    );

    // C. Transmit Payload to GoHighLevel Webhook
    $ghl_response = wp_remote_post($webhook_url, array(
        'method'      => 'POST',
        'timeout'     => 15,
        'headers'     => array('Content-Type' => 'application/json'),
        'body'        => wp_json_encode($ghl_body),
        'data_format' => 'body',
    ));

    if (is_wp_error($ghl_response)) {
        error_log('NewEra GHL submit failed: ' . $ghl_response->get_error_message());
    }

    // D. Dispatch Server-Side Event to Meta CAPI
    if (NEWERA_META_CAPI_TOKEN !== 'YOUR_META_CAPI_ACCESS_TOKEN' && !empty($email)) {
        newera_dispatch_meta_capi($email, $phone, $firstName, $lastName, $postalCode, $eventId, $pageUrl);
    }

    return new WP_REST_Response(array('status' => 'success', 'message' => 'Lead routed successfully'), 200);
}

/**
 * Dispatch server-side Conversion API event to Meta
 */
function newera_dispatch_meta_capi($email, $phone, $firstName, $lastName, $zip, $eventId, $url) {
    $capi_url = 'https://graph.facebook.com/v19.0/' . NEWERA_META_PIXEL_ID . '/events';

    // Hash values using SHA-256 for PII compliance
    $hashed_email = hash('sha256', strtolower(trim($email)));
    $hashed_phone = !empty($phone) ? hash('sha256', preg_replace('/[^0-9]/', '', $phone)) : '';
    $hashed_fn    = hash('sha256', strtolower(trim($firstName)));
    $hashed_ln    = hash('sha256', strtolower(trim($lastName)));
    $hashed_zip   = hash('sha256', trim($zip));

    $client_ip = $_SERVER['REMOTE_ADDR'] ?? '';
    $user_agent = $_SERVER['HTTP_USER_AGENT'] ?? '';

    $body = array(
        'data' => array(
            array(
                'event_name' => 'Lead',
                'event_time' => time(),
                'event_id'   => $eventId,
                'event_source_url' => $url,
                'action_source' => 'website',
                'user_data'  => array_filter(array(
                    'client_ip_address' => $client_ip,
                    'client_user_agent' => $user_agent,
                    'em'                => $hashed_email,
                    'ph'                => $hashed_phone,
                    'fn'                => $hashed_fn,
                    'ln'                => $hashed_ln,
                    'zp'                => $hashed_zip,
                )),
                'custom_data' => array(
                    'content_category' => 'Home Upgrades',
                    'currency'         => 'USD',
                    'value'            => 50.00
                )
            )
        ),
        'access_token' => NEWERA_META_CAPI_TOKEN
    );

    wp_remote_post($capi_url, array(
        'method'      => 'POST',
        'timeout'     => 15,
        'headers'     => array('Content-Type' => 'application/json'),
        'body'        => wp_json_encode($body),
        'data_format' => 'body',
    ));
}
