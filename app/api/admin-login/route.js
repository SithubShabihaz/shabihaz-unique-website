import { NextResponse } from 'next/server';
import { verifyTurnstile } from 'nextjs-turnstile';

export async function POST(request) {
  try {
    const { email, password, token } = await request.json();

    // 1. Verify Turnstile Token on the server
    const isHuman = await verifyTurnstile(token, {
      secretKey: process.env.TURNSTILE_SECRET_KEY,
    });

    if (!isHuman) {
      return NextResponse.json(
        { success: false, message: 'Bot verification failed. Invalid CAPTCHA.' },
        { status: 400 }
      );
    }

    // 2. Check environment credentials
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (email === adminEmail && password === adminPassword) {
      return NextResponse.json({ success: true, message: 'Login Successful!' }, { status: 200 });
    } else {
      return NextResponse.json({ success: false, message: 'Invalid Credentials! Wrong Email & Password.' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
  }
}
