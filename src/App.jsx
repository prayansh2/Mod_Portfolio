import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Op from './components/Op'
import Contact from './components/Contact'
import Footer from './components/Footer'  

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <Navbar></Navbar>
   <Hero></Hero>
   <About></About>
    <Skill></Skill>
   <Op></Op>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  )
}

export default App
