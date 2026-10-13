import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { AuthProvider } from './components/AuthContext'
import Home from './pages/Home'
import SectionPage from './pages/SectionPage'
import DocPage from './pages/DocPage'
import { initOverrides } from './lib/overrides'
import './index.css'

function renderApp() {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <AuthProvider>
        <HashRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/:section" element={<SectionPage />} />
              <Route path="/:section/:slug/*" element={<DocPage />} />
            </Route>
          </Routes>
        </HashRouter>
      </AuthProvider>
    </React.StrictMode>,
  )
}

// Carga la caché de ediciones (Supabase) antes de pintar nada. Si falla o no
// está configurado, initOverrides resuelve igualmente con la caché vacía.
initOverrides().finally(renderApp)
