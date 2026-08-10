import { NextResponse } from 'next/server';

// Google Sheet ke events store karne ke liye array
export let sheetEvents = [];

export async function POST(request) {
  try {
    const body = await request.json();
    
    const eventRecord = {
      id: body.id || Math.random().toString(),
      name: body.name || 'N/A',
      email: body.email || 'N/A',
      message: body.message || 'Naya Form Submit hua hai',
      date: new Date().toISOString(),
      status: 'Google Sheet Form',
    };

    // List ke shuru mein naya form submission add karna
    sheetEvents.unshift(eventRecord);

    return NextResponse.json({ success: true, message: 'Sheet data received' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ success: true, sheets: sheetEvents }, { status: 200 });
}