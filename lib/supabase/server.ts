import 'server-only'
import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

/** Cliente de solo lectura pública (respeta RLS). Para páginas públicas. */
export function getPublicClient() {
  return createClient(url, anonKey, {
    auth: { persistSession: false },
  })
}

/**
 * Cliente con la service role key: bypassea RLS por completo.
 * Usar únicamente dentro de Server Actions/rutas ya protegidas por sesión
 * de administrador — nunca exponer este cliente ni la key al navegador.
 */
export function getAdminClient() {
  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  })
}
