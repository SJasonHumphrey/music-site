import React, { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'

function App() {
const [results, setResults] = useState([]);
  return (
    <>
     <NavBar setResults={setResults} />
     <Home />
    </>
  )
}

export default App
