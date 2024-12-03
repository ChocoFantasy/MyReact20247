import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 通常會把嚴格模式開起來
  <React.StrictMode> <></>
    <App />
  </React.StrictMode>,
)
