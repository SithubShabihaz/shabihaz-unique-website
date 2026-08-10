import { NextResponse } from 'next/server';

// In-memory array to store incoming webhook events (Production ke liye database use karein)
export let bookingEvents = [];

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Trigger type identify karna (jaise BOOKING_CREATED, BOOKING_CANCELLED, etc.)
    const triggerEvent = body.triggerEvent || body.event || 'UNKNOWN_EVENT';
    const payload = body.payload || body;

    // Safe extraction of client and meeting details from various event formats
    const eventName = payload.title || payload.type || payload.scheduled_event?.name || triggerEvent;
    const attendeeName = payload.attendees?.[0]?.name || payload.name || 'N/A';
    const attendeeEmail = payload.attendees?.[0]?.email || payload.email || 'N/A';
    const startTime = payload.startTime || payload.scheduled_event?.start_time || new Date().toISOString();

    // Status determine karna trigger ke mutabiq
    let status = 'Confirmed';
    if (triggerEvent.toLowerCase().includes('cancel')) {
      status = 'Canceled';
    } else if (triggerEvent.toLowerCase().includes('reschedule')) {
      status = 'Rescheduled';
    } else if (triggerEvent.toLowerCase().includes('reject')) {
      status = 'Rejected';
    } else if (triggerEvent.toLowerCase().includes('form')) {
      status = 'Form Submitted';
    }

    const eventRecord = {
      id: payload.id || Math.random().toString(),
      trigger: triggerEvent,
      name: attendeeName,
      email: attendeeEmail,
      meetingName: eventName,
      eventTime: startTime,
      status: status,
      createdAt: new Date().toISOString(),
      isRead: false, // Unread red badge ke liye
    };

    // List ke shuru mein naya event add karna
    bookingEvents.unshift(eventRecord);

    return NextResponse.json({ success: true, message: 'Event processed successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ success: true, meetings: bookingEvents }, { status: 200 });
}