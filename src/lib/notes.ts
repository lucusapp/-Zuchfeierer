import { isSupabaseConfigured, supabase } from './supabaseClient'

// Bandeja de notas sueltas (ver tabla `dictation_notes` en supabase/schema.sql):
// apuntes rápidos dictados desde el móvil para procesar más tarde en una
// sesión de Claude Code y convertir en contenido real de content/**/*.md.
export type DictationNote = {
  id: string
  created_at: string
  body: string
  processed: boolean
  processed_at: string | null
}

export async function listNotes(): Promise<DictationNote[]> {
  if (!isSupabaseConfigured || !supabase) return []
  const { data, error } = await supabase
    .from('dictation_notes')
    .select('*')
    .order('created_at', { ascending: false })
  if (error || !data) return []
  return data as DictationNote[]
}

export async function addNote(body: string): Promise<{ error?: string }> {
  if (!isSupabaseConfigured || !supabase) {
    return { error: 'Supabase no está configurado todavía.' }
  }
  const { error } = await supabase.from('dictation_notes').insert({ body })
  if (error) return { error: error.message }
  return {}
}

export async function setNoteProcessed(id: string, processed: boolean): Promise<{ error?: string }> {
  if (!isSupabaseConfigured || !supabase) {
    return { error: 'Supabase no está configurado todavía.' }
  }
  const { error } = await supabase
    .from('dictation_notes')
    .update({ processed, processed_at: processed ? new Date().toISOString() : null })
    .eq('id', id)
  if (error) return { error: error.message }
  return {}
}

export async function deleteNote(id: string): Promise<{ error?: string }> {
  if (!isSupabaseConfigured || !supabase) {
    return { error: 'Supabase no está configurado todavía.' }
  }
  const { error } = await supabase.from('dictation_notes').delete().eq('id', id)
  if (error) return { error: error.message }
  return {}
}
