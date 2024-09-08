import React from 'react'
import '../style/About.css'
import Card from './feature/Card'
import { FaFileCode } from "react-icons/fa";







const About = () => {
  return (

    
    <>

 <section id='about'>
 <h1 className='abth'>About Me</h1>

<div className='abt-container'>
    
<div className='about'>
<p>
    Hello, I am Chime Kesla Naetochukwu. <br />
     <br />
   I am a Detailed oriented frontend developer passionate <br />
   about creating a robust and user-friendly web Application <br /> 
   for your online presence.

  <br />
   <br />
   I am skilled in HTML, CSS, JavaScript, Also 
   <br /> React Js as a modern framework. <br />
   I pay good attention to details, and in addition i have an indepth communication skill. <br /> <br />
   Willing to learn and adapt to new tools and technologies.

  </p>
</div>


</div>
     

   <div className='spec-container'>

   <div className='spec'>
      <h1>What i do</h1>
     </div>
   

     <div className='grid'>
        <Card 
          title='frontend development'
          des='With my skills and my keen eyes for good designs, i bring beautiful web interfaces to life. 
          I also build Websites and web Applications that work perfectly on various devices and screen sizes. 
          '

        />


       <Card 
        title='backend development'
        des= 'Build and maintain the mechanism that processes data and APIs. skilled in Pyhton, Django MySQL. '
        
        />
   
     </div>
   </div>
      
    
 </section>
    </>
 
     
    
  )
}

export default About