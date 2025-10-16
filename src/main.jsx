import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'   // 👈 importa o BrowserRouter
import './index.css'
import App from './App.jsx'
import Projetos from './Projetos.jsx'
import Subsistemas from './Subsistemas.jsx'
import Contato from './Contato.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>   
      <Routes>
        <Route path="/" element={<App />} />   
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/subsistemas" element={<Subsistemas />} />
        <Route path="/Contato" element={<Contato />} />
          
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)