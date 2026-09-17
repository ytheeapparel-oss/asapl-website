import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getAdminToken, verifyAdminAuth } from '@/lib/admin-auth';

export async function GET() {
  const isAuthenticated = await verifyAdminAuth();
  return NextResponse.json({ authenticated: isAuthenticated });
}

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD || 'asapl@admin2025';

    if (!password || password !== adminPassword) {
      return NextResponse.json(
        { success: false, error: 'Incorrect password. Please try again.' },
        { status: 401 }
      );
    }

    const token = getAdminToken(adminPassword);
    const cookieStore = await cookies();

    cookieStore.set('asapl_admin_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error('Login error:', err);
    return NextResponse.json(
      { success: false, error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete('asapl_admin_session');
  return NextResponse.json({ success: true, message: 'Logged out' });
}
