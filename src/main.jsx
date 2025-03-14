// main.jsx er hovedfilen i prosjektet. Denne filen er ansvarlig for å rendre App komponenten i DOMen.
import { createRoot } from 'react-dom/client'
import './index.css'
// Importerer App komponenten.
import App from './App.jsx'
// Importerer BrowserRouter fra react-router-dom.
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // Har byttet ut StrictMode med BrowserRouter for å kunne bruke react-router-dom.
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
