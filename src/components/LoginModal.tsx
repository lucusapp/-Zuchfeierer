import { useState } from 'react'
import { signIn } from '../lib/auth'
import { isSupabaseConfigured } from '../lib/supabaseClient'

export default function LoginModal(props: { open: boolean; onClose: () => void }) {
  const { open, onClose } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  if (!open) return null

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const { error } = await signIn(email, password)
    setLoading(false)
    if (error) {
      setError(error)
      return
    }
    setPassword('')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-rail-950/90 backdrop-blur-sm flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-rail-900 border border-rail-700 rounded-xl p-5 space-y-3"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Iniciar sesión</h2>
          <button type="button" onClick={onClose} className="text-slate-400 text-sm">
            Cerrar
          </button>
        </div>

        {!isSupabaseConfigured && (
          <p className="text-sm text-amber-400">
            Supabase todavía no está configurado en este despliegue (faltan las variables de
            entorno). El inicio de sesión no funcionará hasta configurarlo.
          </p>
        )}

        <label className="block text-sm">
          Email
          <input
            type="email"
            required
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-lg bg-rail-800 border border-rail-700 px-3 py-2"
          />
        </label>

        <label className="block text-sm">
          Contraseña
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-lg bg-rail-800 border border-rail-700 px-3 py-2"
          />
        </label>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-rail-accent text-rail-950 font-semibold py-2 disabled:opacity-60"
        >
          {loading ? 'Entrando…' : 'Entrar'}
        </button>
      </form>
    </div>
  )
}
