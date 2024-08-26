import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Qualification from './components/Qualification'
import Projects from './components/Projects'





const App = () => {
  return (
    <div>
       <Navbar/>
       <Home/>
       <About/>
       <Skills/>
       <Qualification/>
       <Projects/>
       
    </div>
    
  )
}

export default App
