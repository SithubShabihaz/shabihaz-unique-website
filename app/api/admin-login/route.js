import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // .env file se email aur password uthana
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    // Match karna
    if (email === adminEmail && password === adminPassword) {
      return NextResponse.json({ success: true, message: 'Login Successful!' }, { status: 200 });
    } else {
      return NextResponse.json({ success: false, message: 'Invalid Credentials! Wrong Email & Password.' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
  }
}