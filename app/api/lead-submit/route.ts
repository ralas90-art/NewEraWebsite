import { NextRequest, NextResponse } from 'next/server';

/**
 * Local Next.js API proxy route.
 * Forwards all lead submissions to the Railway backend proxy.
 * This prevents any private Railway URL or GHL credentials from
 * being exposed in the client-side bundle.
 */
export async function POST(req: NextRequest) {
  // Supports env-based GHL Webhook directly or falls back to the Railway lead proxy
  const targetWebhookUrl = process.env.GHL_WEBHOOK_URL || process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL || process.env.LEAD_PROXY_URL;

  if (!targetWebhookUrl) {
    console.error('[Lead Proxy] Neither GHL_WEBHOOK_URL, NEXT_PUBLIC_GHL_WEBHOOK_URL, nor LEAD_PROXY_URL environment variable is set.');
    return NextResponse.json(
      { status: 'error', message: 'Lead submission service is unavailable. Please try again later.' },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ status: 'error', message: 'Invalid request payload.' }, { status: 400 });
  }

  try {
    const upstreamResponse = await fetch(targetWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const contentType = upstreamResponse.headers.get('content-type') || '';
    let responseData: unknown;

    if (contentType.includes('application/json')) {
      try {
        responseData = await upstreamResponse.json();
      } catch (jsonErr) {
        console.warn('[Lead Proxy] Upstream returned application/json but parsing failed:', jsonErr);
        responseData = { status: 'success', message: 'Payload received.' };
      }
    } else {
      const text = await upstreamResponse.text();
      responseData = { status: 'success', message: 'Payload received.', responseText: text };
    }

    const status = upstreamResponse.ok ? upstreamResponse.status : 502;
    return NextResponse.json(responseData, { status });
  } catch (err) {
    console.error('[Lead Proxy] Failed to forward lead payload upstream:', err);
    return NextResponse.json(
      { status: 'error', message: 'Submission failed. Please try calling us directly.' },
      { status: 502 }
    );
  }
}
