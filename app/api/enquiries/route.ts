import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const NOTIFICATION_EMAIL = process.env.INQUIRY_NOTIFICATION_EMAIL || 'Rakeshpandey2001@gmail.com';

async function dispatchEmailNotification(enquiry: {
  type: string;
  name: string;
  phone: string;
  email?: string | null;
  child_name?: string | null;
  child_age?: string | null;
  grade?: string | null;
  visit_date?: string | null;
  subject?: string | null;
  message?: string | null;
}) {
  const isAdmission = enquiry.type === 'admission';
  const subjectLine = `[ASPAL International] New ${isAdmission ? 'Admission Inquiry' : 'Contact Message'} - ${enquiry.name} (${enquiry.phone})`;

  // 1. Resend API support if configured
  if (process.env.RESEND_API_KEY) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM || 'ASPAL Admissions <onboarding@resend.dev>',
          to: [NOTIFICATION_EMAIL],
          subject: subjectLine,
          html: `
            <h2>New Inquiry Received at ASPAL International</h2>
            <p><strong>Enquiry Type:</strong> ${isAdmission ? 'Admission Application' : 'General Contact'}</p>
            <p><strong>Parent Name:</strong> ${enquiry.name}</p>
            <p><strong>Phone:</strong> <a href="tel:${enquiry.phone}">${enquiry.phone}</a></p>
            <p><strong>Email:</strong> ${enquiry.email || 'Not provided'}</p>
            ${enquiry.child_name ? `<p><strong>Child Name:</strong> ${enquiry.child_name}</p>` : ''}
            ${enquiry.child_age ? `<p><strong>Child Age:</strong> ${enquiry.child_age}</p>` : ''}
            ${enquiry.grade ? `<p><strong>Grade:</strong> ${enquiry.grade}</p>` : ''}
            ${enquiry.visit_date ? `<p><strong>Visit Date:</strong> ${enquiry.visit_date}</p>` : ''}
            ${enquiry.subject ? `<p><strong>Subject:</strong> ${enquiry.subject}</p>` : ''}
            ${enquiry.message ? `<p><strong>Message:</strong> ${enquiry.message}</p>` : ''}
            <hr />
            <p><a href="https://www.aspal.co.in/admin">Open ASPAL Admin Panel</a></p>
          `,
        }),
      });
      return;
    } catch (err) {
      console.error('Resend notification dispatch failed:', err);
    }
  }

  // 2. Direct forwarder to Gmail
  try {
    await fetch(`https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://www.aspal.co.in',
        'Referer': 'https://www.aspal.co.in/',
      },
      body: JSON.stringify({
        _subject: subjectLine,
        'Enquiry Type': isAdmission ? 'Admission Application' : 'General Contact',
        'Parent Name': enquiry.name,
        'Phone Number': enquiry.phone,
        'Parent Email': enquiry.email || 'Not provided',
        'Child Name': enquiry.child_name || 'N/A',
        'Child Age': enquiry.child_age || 'N/A',
        'Grade': enquiry.grade || 'N/A',
        'Preferred Visit Date': enquiry.visit_date || 'N/A',
        'Subject': enquiry.subject || 'N/A',
        'Message': enquiry.message || 'No additional message',
        'Admin Panel': 'https://www.aspal.co.in/admin',
        _template: 'table',
      }),
    });
  } catch (err) {
    console.error('Email notification forwarder error:', err);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Silent drop if honeypot is filled
    if (body.honeypot) {
      return NextResponse.json({ success: true, message: 'Enquiry received' });
    }

    const {
      type = 'contact',
      name,
      phone,
      email,
      child_name,
      child_age,
      grade,
      visit_date,
      subject,
      message,
    } = body;

    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!phone || !phone.trim()) {
      return NextResponse.json(
        { success: false, error: 'Phone number is required' },
        { status: 400 }
      );
    }

    const trimmedEnquiry = {
      type,
      name: name.trim(),
      phone: phone.trim(),
      email: email?.trim() || null,
      child_name: child_name?.trim() || null,
      child_age: child_age?.trim() || null,
      grade: grade?.trim() || null,
      visit_date: visit_date?.trim() || null,
      subject: subject?.trim() || null,
      message: message?.trim() || null,
      status: 'new',
    };

    const { error } = await supabase
      .from('enquiries')
      .insert([trimmedEnquiry]);

    if (error) {
      console.error('Supabase error inserting enquiry:', error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    // Trigger email notification to Rakeshpandey2001@gmail.com
    await dispatchEmailNotification(trimmedEnquiry).catch((e) => {
      console.error('Background email dispatch failed:', e);
    });

    return NextResponse.json({
      success: true,
      message: 'Enquiry submitted successfully and forwarded to admissions desk',
    });
  } catch (err: unknown) {
    console.error('Unexpected error handling enquiry:', err);
    const message = err instanceof Error ? err.message : 'Internal server error';
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
