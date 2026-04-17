import { createClient } from '@supabase/supabase-js';

// Usamos aserción de tipos para garantizar que las variables de entorno existen
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);
