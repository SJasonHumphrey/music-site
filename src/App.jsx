import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'

function App() {
  const [artist, setArtist] = useState()

  return (
    <>
     <NavBar />
     <Home />
    </>
  )
}

export default App