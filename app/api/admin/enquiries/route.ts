import { NextResponse } from 'next/server';
import { verifyAdminAuth } from '@/lib/admin-auth';
import { supabaseAdmin } from '@/lib/supabase-admin';

export async function GET(request: Request) {
  const isAuth = await verifyAdminAuth();
  if (!isAuth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const status = searchParams.get('status');
  const search = searchParams.get('search')?.trim();

  let query = supabaseAdmin
    .from('enquiries')
    .select('*')
    .order('created_at', { ascending: false });

  if (type && type !== 'all') {
    query = query.eq('type', type);
  }

  if (status && status !== 'all') {
    query = query.eq('status', status);
  }

  if (search) {
    // Search in name, phone, child_name, email
    query = query.or(
      `name.ilike.%${search}%,phone.ilike.%${search}%,child_name.ilike.%${search}%,email.ilike.%${search}%`
    );
  }

  const { data, error } = await query;

  if (error) {
    console.error('Failed to fetch enquiries:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ enquiries: data || [] });
}

export async function PATCH(request: Request) {
  const isAuth = await verifyAdminAuth();
  if (!isAuth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id, status } = await request.json();

    if (!id || !status) {
      return NextResponse.json(
        { error: 'Enquiry id and new status are required' },
        { status: 400 }
      );
    }

    const { error } = await supabaseAdmin
      .from('enquiries')
      .update({ status })
      .eq('id', id);

    if (error) {
      console.error('Failed to update enquiry status:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Status updated' });
  } catch (err: unknown) {
    console.error('Patch error:', err);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const isAuth = await verifyAdminAuth();
  if (!isAuth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Enquiry id is required' },
        { status: 400 }
      );
    }

    const { error } = await supabaseAdmin
      .from('enquiries')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Failed to delete enquiry:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Enquiry deleted' });
  } catch (err: unknown) {
    console.error('Delete error:', err);
    return NextResponse.json(
      { error: 'Failed to delete enquiry' },
      { status: 500 }
    );
  }
}
