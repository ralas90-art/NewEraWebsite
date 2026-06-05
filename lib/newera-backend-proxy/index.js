/**
 * New Era Solar Energy - Secure Backend Proxy for GHL & Meta CAPI
 * 
 * Hosting Platform: Railway (or similar Node/Express hosting)
 * File Path: lib/newera-backend-proxy.js
 */

const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;

// Helper to hash PII parameters using SHA-256 for Meta CAPI compliance
function hashSha256(val) {
  if (!val) return '';
  return crypto
    .createHash('sha256')
    .update(String(val).trim().toLowerCase())
    .digest('hex');
}

// Helper to sanitize inputs and remove HTML tags/special characters
function sanitizeInput(val) {
  if (typeof val !== 'string') return '';
  return val.replace(/<[^>]*>/g, '').trim();
}

// 1. Basic Security Headers
app.use(helmet());

// 2. Body Parser Limits to prevent payload size attacks
app.use(express.json({ limit: '10kb' }));

// 3. Strict CORS Domain White-listing
const allowedOrigins = [
  process.env.ALLOWED_ORIGIN || 'https://newerasolarenergy.com',
  process.env.STAGING_ALLOWED_ORIGIN || 'https://newera-staging.newerasolarenergy.com'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or local test requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV === 'development') {
      return callback(null, true);
    } else {
      return callback(new Error('Blocked by CORS policy'), false);
    }
  },
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

// 4. IP-Based Rate Limiting (max 3 requests per minute per IP)
const submissionLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 3,
  message: { status: 'error', message: 'Too many requests. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiter specifically to lead submission route
app.use('/api/lead-submit', submissionLimiter);

// 5. Ingestion and Router Route
app.post('/api/lead-submit', async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
  const userAgent = req.headers['user-agent'] || '';
  const payload = req.body;

  // A. Honeypot check (Bot detection trap)
  if (payload.honeypot) {
    console.warn(`[Spam Blocked] Bot submit caught from IP: ${ip}`);
    // Respond with a silent mock success to fool the bot into stopping
    return res.status(200).json({
      status: 'success',
      message: 'Lead routed successfully (mock)'
    });
  }

  // B. Required fields validation
  const firstName = sanitizeInput(payload.firstName);
  const lastName = sanitizeInput(payload.lastName);
  const phone = sanitizeInput(payload.phone);
  const email = sanitizeInput(payload.email);
  const postalCode = sanitizeInput(payload.postalCode);
  const serviceInterest = sanitizeInput(payload.serviceInterest);
  const eventId = sanitizeInput(payload.eventId);

  if (!firstName || !phone || !email || !postalCode || !serviceInterest || !eventId) {
    return res.status(400).json({
      status: 'error',
      message: 'Missing required validation fields.'
    });
  }

  // Sanitize secondary parameters
  const electricBillMonthly = sanitizeInput(payload.electricBillMonthly || 'N/A');
  const roofAge = sanitizeInput(payload.roofAge || 'N/A');
  const roofingNeed = sanitizeInput(payload.roofingNeed || 'N/A');
  const waterConcern = sanitizeInput(payload.waterConcern || 'N/A');
  const recommendedNextStep = sanitizeInput(payload.recommendedNextStep || '');
  const preferredContactMethod = sanitizeInput(payload.preferredContactMethod || '');
  const bestContactTime = sanitizeInput(payload.bestContactTime || '');
  const advisorSummary = sanitizeInput(payload.advisorSummary || '');
  const pageUrl = sanitizeInput(payload.pageUrl || '');
  const utmSource = sanitizeInput(payload.utmSource || '');
  const utmMedium = sanitizeInput(payload.utmMedium || '');
  const utmCampaign = sanitizeInput(payload.utmCampaign || '');
  const utmContent = sanitizeInput(payload.utmContent || '');
  const utmTerm = sanitizeInput(payload.utmTerm || '');

  // C. Route Webhook selection depending on service interest and tags
  const tags = Array.isArray(payload.tags) ? payload.tags.map(sanitizeInput) : ['newera_home_upgrade_advisor'];
  
  let ghlWebhookUrl = process.env.GHL_CONTACT_WEBHOOK_URL;
  if (tags.includes('newera_solar_lead')) {
    ghlWebhookUrl = process.env.GHL_SOLAR_WEBHOOK_URL || process.env.GHL_CONTACT_WEBHOOK_URL;
  } else if (tags.includes('newera_roofing_lead')) {
    ghlWebhookUrl = process.env.GHL_ROOFING_WEBHOOK_URL || process.env.GHL_CONTACT_WEBHOOK_URL;
  } else if (tags.includes('newera_water_lead')) {
    ghlWebhookUrl = process.env.GHL_WATER_WEBHOOK_URL || process.env.GHL_CONTACT_WEBHOOK_URL;
  }

  if (!ghlWebhookUrl) {
    console.error('[Configuration Error] Missing GHL Webhook Target URL in env configuration.');
    return res.status(500).json({ status: 'error', message: 'Internal server routing misconfigured' });
  }

  // Compile standard payload matching GHL fields
  const ghlPayload = {
    first_name: firstName,
    last_name: lastName,
    phone: phone,
    email: email,
    postal_code: postalCode,
    service_interest: serviceInterest,
    electric_bill_monthly: electricBillMonthly,
    roof_age: roofAge,
    roofing_need: roofingNeed,
    water_concern: waterConcern,
    recommended_next_step: recommendedNextStep,
    preferred_contact: preferredContactMethod,
    best_contact_time: bestContactTime,
    advisor_summary: advisorSummary,
    tags: tags.join(','),
    page_url: pageUrl,
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
    utm_content: utmContent,
    utm_term: utmTerm,
    timestamp: new Date().toISOString()
  };

  // D. Execute Webhook transmission to GoHighLevel
  try {
    const ghlResponse = await fetch(ghlWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ghlPayload)
    });

    if (!ghlResponse.ok) {
      const errorText = await ghlResponse.text();
      console.error(`[CRM Sync Fail] GoHighLevel API returned: ${ghlResponse.status} - ${errorText}`);
      return res.status(502).json({
        status: 'error',
        message: 'Failed to record lead in CRM. Please try again.'
      });
    }

    console.log(`[CRM Sync Success] Lead registered in GHL. Tags: ${ghlPayload.tags}`);

    // E. Execute Meta Conversions API (CAPI) ONLY after successful GHL submission
    const pixelId = process.env.META_PIXEL_ID;
    const capiToken = process.env.META_CAPI_TOKEN;

    if (pixelId && capiToken) {
      const hashedEmail = hashSha256(email);
      const hashedPhone = phone ? hashSha256(phone.replace(/[^0-9]/g, '')) : '';
      const hashedFirstName = hashSha256(firstName);
      const hashedLastName = hashSha256(lastName);
      const hashedZip = hashSha256(postalCode);

      const capiPayload = {
        data: [
          {
            event_name: 'Lead',
            event_time: Math.floor(Date.now() / 1000),
            event_id: eventId,
            event_source_url: pageUrl,
            action_source: 'website',
            user_data: {
              client_ip_address: ip,
              client_user_agent: userAgent,
              em: hashedEmail,
              ph: hashedPhone,
              fn: hashedFirstName,
              ln: hashedLastName,
              zp: hashedZip
            },
            custom_data: {
              content_category: 'Home Upgrades',
              currency: 'USD',
              value: 50.00
            }
          }
        ]
      };

      try {
        const capiResponse = await fetch(`https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${capiToken}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(capiPayload)
        });
        
        if (capiResponse.ok) {
          console.log(`[Meta CAPI Success] Lead event matched and sent. EventID: ${eventId}`);
        } else {
          const capiErr = await capiResponse.text();
          console.warn(`[Meta CAPI Warn] API returned error: ${capiErr}`);
        }
      } catch (capiError) {
        console.error('[Meta CAPI Error] Network failure sending event: ', capiError);
      }
    } else {
      console.log('[Meta CAPI Bypass] Missing Pixel ID or Token in environment setup.');
    }

    // F. Return success status to client
    return res.status(200).json({
      status: 'success',
      message: 'Lead routed successfully'
    });

  } catch (error) {
    console.error('[Proxy Ingestion Error] Process caught exception: ', error);
    return res.status(500).json({
      status: 'error',
      message: 'Lead proxy submission internal error'
    });
  }
});

app.listen(PORT, () => {
  console.log(`New Era Lead Proxy active on Port: ${PORT}`);
});
