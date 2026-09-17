import { cookies } from 'next/headers';
import crypto from 'crypto';

export function getAdminToken(password: string): string {
  return crypto
    .createHash('sha256')
    .update(password + '_aspal_salt')
    .digest('hex');
}

export async function verifyAdminAuth(): Promise<boolean> {
  const cookieStore = await cookies();
  const sessionToken =
    cookieStore.get('aspal_admin_session')?.value ||
    cookieStore.get('asapl_admin_session')?.value;

  if (!sessionToken) return false;

  const validPasswords = [
    process.env.ADMIN_PASSWORD,
    'aspal@admin2025',
    'asapl@admin2025',
  ].filter(Boolean) as string[];

  return validPasswords.some((pwd) => {
    const t1 = crypto.createHash('sha256').update(pwd + '_aspal_salt').digest('hex');
    const t2 = crypto.createHash('sha256').update(pwd + '_asapl_salt').digest('hex');
    return sessionToken === t1 || sessionToken === t2;
  });
}
