import type { Doc, Section } from './types'
import { isSupabaseConfigured, supabase } from './supabaseClient'

// Ediciones hechas desde la propia app. Antes se guardaban en localStorage
// (solo en ese dispositivo); ahora viven en la tabla `doc_overrides` de
// Supabase, para que no se pierdan al cambiar de móvil o borrar datos del
// navegador. Para que el resto de la app (content.ts, páginas) no tenga que
// volverse asíncrono, se mantiene una caché en memoria que se carga una vez
// al arrancar (ver initOverrides, llamado desde main.tsx) y que vuelve a
// cargarse tras cada guardado/borrado (las páginas ya hacen un reload tras
// guardar, así que basta con repoblar la caché antes de ese reload).
export type DocOverride = Partial<Pick<Doc, 'title' | 'summary' | 'tags' | 'body'>> & {
  meta?: Record<string, string>
}

type OverrideRow = DocOverride & { section: string; slug: string }

const cache = new Map<string, DocOverride>()

function cacheKey(section: Section, slug: string) {
  return `${section}/${slug}`
}

// Se llama una vez al arrancar la app, antes de renderizar. Si Supabase no
// está configurado (faltan las variables de entorno) o falla la red, la
// caché queda vacía y la app sigue funcionando con el contenido estático.
export async function initOverrides(): Promise<void> {
  cache.clear()
  if (!isSupabaseConfigured || !supabase) return
  try {
    const { data, error } = await supabase.from('doc_overrides').select('*')
    if (error || !data) return
    for (const row of data as OverrideRow[]) {
      const { section, slug, ...override } = row
      cache.set(cacheKey(section as Section, slug), override)
    }
  } catch {
    // Sin conexión o Supabase caído: seguimos con la caché vacía.
  }
}

export function getOverride(section: Section, slug: string): DocOverride | undefined {
  return cache.get(cacheKey(section, slug))
}

export async function saveOverride(
  section: Section,
  slug: string,
  data: DocOverride,
): Promise<{ error?: string }> {
  if (!isSupabaseConfigured || !supabase) {
    return { error: 'Supabase no está configurado todavía.' }
  }
  const { error } = await supabase
    .from('doc_overrides')
    .upsert({ section, slug, ...data, updated_at: new Date().toISOString() })
  if (error) return { error: error.message }
  cache.set(cacheKey(section, slug), data)
  return {}
}

export async function clearOverride(section: Section, slug: string): Promise<{ error?: string }> {
  if (!isSupabaseConfigured || !supabase) {
    return { error: 'Supabase no está configurado todavía.' }
  }
  const { error } = await supabase
    .from('doc_overrides')
    .delete()
    .eq('section', section)
    .eq('slug', slug)
  if (error) return { error: error.message }
  cache.delete(cacheKey(section, slug))
  return {}
}
