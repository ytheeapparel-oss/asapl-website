import { cookies } from 'next/headers';
import crypto from 'crypto';

export function getAdminToken(password: string): string {
  return crypto
    .createHash('sha256')
    .update(password + '_asapl_salt')
    .digest('hex');
}

export async function verifyAdminAuth(): Promise<boolean> {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('asapl_admin_session')?.value;
  if (!sessionToken) return false;

  const adminPassword = process.env.ADMIN_PASSWORD || 'asapl@admin2025';
  const expectedToken = getAdminToken(adminPassword);

  return sessionToken === expectedToken;
}
