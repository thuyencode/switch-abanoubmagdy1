import App from './App.tsx'
import './index.css'

// @ts-types="@types/react"
import { StrictMode } from 'react'
// @ts-types="@types/react-dom/client"
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
