import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sign_in from './components/Sign_in.jsx'
import Sign_up from './components/Sign_up.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Sign_up />
  </StrictMode>,
)
