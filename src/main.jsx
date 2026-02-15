import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

Object.defineProperty(window, 'CYBERSEC_SIGNATURE', {
  value: 'MADE BY SHASHANKA GOGOI (R3LATIVEE)',
  writable: false,
  configurable: false
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
