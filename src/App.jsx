import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'

function App() {

  const [hamMenuActive, setHamMenuActive] = useState(false)

  function toggleMenu() {
    setHamMenuActive(oldValue => !oldValue)
  }


  return (
    <>
    <Header menuActive={hamMenuActive} toggleMenu={toggleMenu} />
    <Home />
    <Projects />
    <About />
    <Contact />
    <Footer />
    </>
  )
}

export default App
