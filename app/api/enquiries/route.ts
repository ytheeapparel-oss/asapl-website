import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

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

    const { error } = await supabase
      .from('enquiries')
      .insert([
        {
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
        },
      ]);

    if (error) {
      console.error('Supabase error inserting enquiry:', error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Enquiry submitted successfully' });
  } catch (err: unknown) {
    console.error('Unexpected error handling enquiry:', err);
    const message = err instanceof Error ? err.message : 'Internal server error';
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
