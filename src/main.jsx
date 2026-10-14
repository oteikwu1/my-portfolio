import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
    <NavBar />
   </BrowserRouter>
  </StrictMode>,
)
