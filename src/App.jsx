import React from 'react'
// import Nav from './components/Navbar'
// import Naviga from './components/Naviga'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Qualification from './components/Qualification'
import Projects from './components/Projects'
import Footer from './components/Footer'




const App = () => {
  return (
    <div>
       <Navbar/>
       <Home/>
       <About/>
       <Skills/>
       <Qualification/>
       <Projects/>
       <Footer />
       
    </div>
    
  )
}

export default App
