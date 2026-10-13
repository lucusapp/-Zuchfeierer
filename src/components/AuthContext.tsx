import type { Session } from '@supabase/supabase-js'
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { getSession, onAuthStateChange } from '../lib/auth'

const AuthCtx = createContext<{ session: Session | null }>({ session: null })

export function AuthProvider(props: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    getSession().then(setSession)
    return onAuthStateChange(setSession)
  }, [])

  return <AuthCtx.Provider value={{ session }}>{props.children}</AuthCtx.Provider>
}

export function useAuth() {
  return useContext(AuthCtx)
}
