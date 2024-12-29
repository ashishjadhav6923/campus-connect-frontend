import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard from './components/Dashboard.jsx'
import SignIN from './components/registration.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dashboard />
    <SignIN />
  </StrictMode>,
)
