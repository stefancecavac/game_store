import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GameContextProvider } from './context/gameContext.jsx'
import { UserContextProvider } from './context/userContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <GameContextProvider>
        <App />
      </GameContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
