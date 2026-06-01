/**
 * Shared client-side lead submission helper for New Era Solar Energy.
 *
 * SECURITY NOTES:
 * - Submissions go to /api/lead-submit (local Next.js route)
 * - The local route server-side forwards to the Railway proxy
 * - No private Railway URL, GHL webhook, or API key is exposed here
 */

'use client';

// -------------------------------------------------------
// UTM parameter extraction
// -------------------------------------------------------
export const getUTMParams = () => {
  if (typeof window === 'undefined') {
    return { utmSource: '', utmMedium: '', utmCampaign: '', utmContent: '', utmTerm: '', pageUrl: '' };
  }
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get('utm_source') || '',
    utmMedium: params.get('utm_medium') || '',
    utmCampaign: params.get('utm_campaign') || '',
    utmContent: params.get('utm_content') || '',
    utmTerm: params.get('utm_term') || '',
    pageUrl: window.location.href,
  };
};

// -------------------------------------------------------
// Unique event ID generator for Meta CAPI deduplication
// -------------------------------------------------------
export const generateEventId = (eventName: string) =>
  `${eventName}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

// -------------------------------------------------------
// Staging detection — tags leads automatically in non-prod
// -------------------------------------------------------
export const isStaging = (): boolean => {
  if (typeof window === 'undefined') return true; // SSR = treat as staging
  const host = window.location.hostname;
  return (
    host === 'localhost' ||
    host.includes('vercel.app') ||
    host.includes('staging') ||
    host.includes('preview') ||
    process.env.NODE_ENV !== 'production'
  );
};

export const getStagingAwareTags = (productionTags: string[]): string[] => {
  if (isStaging()) {
    return [...productionTags, 'newera_test_lead', 'source_staging'];
  }
  return [...productionTags, 'source_website'];
};

// -------------------------------------------------------
// Standard lead payload builder
// -------------------------------------------------------
export interface LeadPayload {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  postalCode: string;
  serviceInterest: string;
  electricBillMonthly?: string;
  roofAge?: string;
  roofingNeed?: string;
  waterConcern?: string;
  recommendedNextStep?: string;
  preferredContactMethod?: string;
  bestContactTime?: string;
  advisorSummary?: string;
  tags: string[];
  pageUrl: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
  eventId: string;
  timestamp: string;
  [key: string]: unknown;
}

// -------------------------------------------------------
// Submit lead to the local Next.js /api/lead-submit route
// (which server-side forwards securely to Railway proxy)
// -------------------------------------------------------
export const submitLead = async (payload: LeadPayload): Promise<{ ok: boolean; eventId: string }> => {
  const response = await fetch('/api/lead-submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return { ok: response.ok, eventId: payload.eventId };
};

// -------------------------------------------------------
// Optional: fire browser Meta Pixel Lead event after success
// (only if fbq is available — no error thrown if not loaded)
// -------------------------------------------------------
export const fireMetaPixelLead = (eventId: string, category = 'Home Services', value = 50.0) => {
  if (typeof window !== 'undefined' && typeof (window as { fbq?: Function }).fbq === 'function') {
    (window as unknown as { fbq: Function }).fbq(
      'track',
      'Lead',
      { content_category: category, currency: 'USD', value },
      { event_id: eventId }
    );
  }
};
