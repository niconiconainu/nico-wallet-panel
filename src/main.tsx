import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import WalletPanel from './WalletPanel.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WalletPanel></WalletPanel>
    <App />
  </React.StrictMode>,
)
