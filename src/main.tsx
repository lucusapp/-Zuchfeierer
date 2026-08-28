import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import SectionPage from './pages/SectionPage'
import DocPage from './pages/DocPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:section" element={<SectionPage />} />
          <Route path="/:section/:slug/*" element={<DocPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
