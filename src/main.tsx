import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./theme/index.css"

// Main은 Provider단으로 적용될 것들을

// 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
