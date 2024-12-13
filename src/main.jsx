import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sign_in from './pages/Sign_in.jsx'
import Sign_up from './pages/Sign_up.jsx'
import Header from './components/Header.jsx'
import Events from './pages/Events.jsx'
import Button from './components/Button.jsx'
import Community from './pages/Community.jsx'
import Cart from './pages/Cart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Cart/>
  </StrictMode>,
)
