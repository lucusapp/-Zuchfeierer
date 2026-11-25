import { useEffect, useState } from 'react'
import { useAuth } from '../components/AuthContext'
import LoginModal from '../components/LoginModal'
import { addNote, deleteNote, listNotes, setNoteProcessed, type DictationNote } from '../lib/notes'
import { isSupabaseConfigured } from '../lib/supabaseClient'

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function Notes() {
  const { session } = useAuth()
  const [loginOpen, setLoginOpen] = useState(false)
  const [notes, setNotes] = useState<DictationNote[]>([])
  const [loading, setLoading] = useState(true)
  const [draft, setDraft] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function reload() {
    setLoading(true)
    setNotes(await listNotes())
    setLoading(false)
  }

  useEffect(() => {
    reload()
  }, [])

  async function handleSave() {
    if (!session) {
      setLoginOpen(true)
      return
    }
    const body = draft.trim()
    if (!body) return
    setSaving(true)
    setError(null)
    const { error } = await addNote(body)
    setSaving(false)
    if (error) {
      setError(error)
      return
    }
    setDraft('')
    reload()
  }

  async function handleToggleProcessed(note: DictationNote) {
    if (!session) {
      setLoginOpen(true)
      return
    }
    await setNoteProcessed(note.id, !note.processed)
    reload()
  }

  async function handleDelete(note: DictationNote) {
    if (!session) {
      setLoginOpen(true)
      return
    }
    await deleteNote(note.id)
    reload()
  }

  const pending = notes.filter((n) => !n.processed)
  const processed = notes.filter((n) => n.processed)

  return (
    <div>
      <h1 className="text-xl font-bold mb-1">Bandeja de notas</h1>
      <p className="text-sm text-slate-400 mb-4">
        Apunta aquí lo que vayas viendo cuando no tengas una sesión de Claude Code abierta.
        La próxima vez, dile que revise la bandeja y lo convierte en contenido real.
      </p>

      {!isSupabaseConfigured && (
        <p className="text-sm text-amber-400 mb-4">
          Supabase todavía no está configurado en este despliegue — la bandeja no funcionará
          hasta configurarlo.
        </p>
      )}

      <div className="rounded-xl bg-rail-800 border border-rail-700 p-3 mb-6">
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={
            session
              ? 'Escribe o dicta aquí tu nota…'
              : 'Inicia sesión para poder guardar notas.'
          }
          disabled={!session}
          rows={4}
          className="w-full rounded-lg bg-rail-900 border border-rail-700 px-3 py-2 text-sm disabled:opacity-60"
        />
        {error && <p className="text-sm text-red-400 mt-2">{error}</p>}
        <div className="flex justify-end mt-2">
          <button
            onClick={handleSave}
            disabled={saving || (session ? !draft.trim() : false)}
            className="rounded-lg bg-rail-accent text-rail-950 font-semibold px-4 py-2 text-sm disabled:opacity-60"
          >
            {session ? (saving ? 'Guardando…' : 'Guardar nota') : 'Iniciar sesión'}
          </button>
        </div>
      </div>

      {loading ? (
        <p className="text-sm text-slate-500">Cargando…</p>
      ) : (
        <>
          <h2 className="text-sm font-semibold text-slate-400 mb-2">
            Pendientes {pending.length > 0 && `(${pending.length})`}
          </h2>
          {pending.length === 0 ? (
            <p className="text-sm text-slate-500 mb-6">No hay notas pendientes.</p>
          ) : (
            <ul className="space-y-2 mb-6">
              {pending.map((note) => (
                <li
                  key={note.id}
                  className="rounded-lg bg-rail-800 border border-rail-700 p-3"
                >
                  <p className="text-xs text-slate-500 mb-1">{formatDate(note.created_at)}</p>
                  <p className="text-sm whitespace-pre-wrap mb-2">{note.body}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleToggleProcessed(note)}
                      className="text-xs rounded-lg border border-rail-700 px-2 py-1 text-slate-300 hover:text-rail-accent"
                    >
                      Marcar como procesada
                    </button>
                    <button
                      onClick={() => handleDelete(note)}
                      className="text-xs rounded-lg border border-rail-700 px-2 py-1 text-slate-300 hover:text-red-400"
                    >
                      Borrar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {processed.length > 0 && (
            <details>
              <summary className="text-sm font-semibold text-slate-500 cursor-pointer mb-2">
                Procesadas ({processed.length})
              </summary>
              <ul className="space-y-2">
                {processed.map((note) => (
                  <li
                    key={note.id}
                    className="rounded-lg bg-rail-800/50 border border-rail-700 p-3 opacity-70"
                  >
                    <p className="text-xs text-slate-500 mb-1">{formatDate(note.created_at)}</p>
                    <p className="text-sm whitespace-pre-wrap mb-2 line-through decoration-slate-600">
                      {note.body}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleToggleProcessed(note)}
                        className="text-xs rounded-lg border border-rail-700 px-2 py-1 text-slate-300 hover:text-rail-accent"
                      >
                        Marcar como pendiente
                      </button>
                      <button
                        onClick={() => handleDelete(note)}
                        className="text-xs rounded-lg border border-rail-700 px-2 py-1 text-slate-300 hover:text-red-400"
                      >
                        Borrar
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </details>
          )}
        </>
      )}

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  )
}
