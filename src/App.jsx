import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Experience from './Components/Experience'
import Skill from './Components/Skill'
import Op from './Components/Op'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
   <Navbar></Navbar>
   <Hero></Hero>
   <About></About>
   <Experience></Experience>
    <Skill></Skill>
   <Op></Op>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  )
}

export default App
