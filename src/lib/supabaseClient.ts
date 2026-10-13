import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Mientras no se configuren las variables de entorno (desarrollo local sin
// .env.local, o un despliegue antiguo sin las vars en Vercel), la app debe
// poder arrancar igualmente mostrando el contenido estático — solo fallan
// las funciones que necesitan Supabase (editar, subir imagen, iniciar sesión).
export const isSupabaseConfigured = Boolean(url && anonKey)

export const supabase = isSupabaseConfigured
  ? createClient(url, anonKey)
  : null

export const CONTENT_IMAGES_BUCKET = 'content-images'
