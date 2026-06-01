import { NextRequest, NextResponse } from 'next/server';

/**
 * Local Next.js API proxy route.
 * Forwards all lead submissions to the Railway backend proxy.
 * This prevents any private Railway URL or GHL credentials from
 * being exposed in the client-side bundle.
 */
export async function POST(req: NextRequest) {
  const railwayProxyUrl = process.env.LEAD_PROXY_URL;

  if (!railwayProxyUrl) {
    console.error('[Lead Proxy] LEAD_PROXY_URL environment variable is not set.');
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
    const upstreamResponse = await fetch(railwayProxyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await upstreamResponse.json();

    return NextResponse.json(data, { status: upstreamResponse.status });
  } catch (err) {
    console.error('[Lead Proxy] Failed to reach Railway proxy:', err);
    return NextResponse.json(
      { status: 'error', message: 'Submission failed. Please try calling us directly.' },
      { status: 502 }
    );
  }
}
