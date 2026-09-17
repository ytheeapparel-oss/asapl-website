import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  'https://dioowbsrtycyxdhafsof.supabase.co';
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'sb_publishable_xV5L2XNvvi6aIZGNZWEm3w_DkOUIHGa';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
