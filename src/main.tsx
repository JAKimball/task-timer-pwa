import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Enable development mode CSS rules by setting the --dev-mode variable
if (import.meta.env.DEV) {
  document.documentElement.style.setProperty('--dev-mode', 'var(--on)')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
