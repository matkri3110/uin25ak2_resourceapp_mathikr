// App.jsx er hovedkomponenten i prosjektet. 
// Denne komponenten er en funksjonell komponent som returnerer en Layout komponent som igjen inneholder en Routes komponent fra react-router-dom.
// Importerer useState fra react.
import { useState } from 'react'
import './App.css'
// Importerer main.scss filen som inneholder de globale stilene for prosjektet.
import './styles/scss/main.scss'
// Importerer Layout komponenten.
import Layout from './components/Layout'
// Importerer Resources komponenten.
import Resources from './components/Resources'
// Importerer Routes og Route fra react-router-dom.
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    // Returnerer Layout komponenten som inneholder Routes komponenten.
    <Layout>
      {/* Setter opp ruter for alle kategoriene som skal vises på siden. */ }
      <Routes>
        <Route path="/html" element = { <Resources category="html" /> } /> {/* Setter opp rute for HTML */}
        <Route path="/css" element = { <Resources category="css" /> } /> {/* Setter opp rute for CSS */}
        <Route path="/javascript" element = { <Resources category="javascript" /> } /> {/* Setter opp rute for JavaScript */}
        <Route path="/react" element = { <Resources category="react" /> } /> {/* Setter opp rute for React */}
        <Route path="/headless-cms" element = { <Resources category="headless-cms" /> } /> {/* Setter opp rute for Sanity */}
      </Routes>
    </Layout>
  )
}

export default App
