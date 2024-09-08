import React from 'react'
import '../style/Skills.css'
import javascript from '/assets/javascript.png'
import react from '/assets/react.js.png'
import html from '/assets/html logo.png'
import css from '/assets/css.png'
import tailwind from '/assets/tailwind css.jpg'
import git from '/assets/git.png'
import github from '/assets/github.png'
import python from '/assets/python.png'
import mysql from '/assets/mysql.png'
import django from '/assets/django.png'
import flutter from '../../public/assets/flutter.png'
import nextjs from '/assets/nextjs.png'
import figma from '../../public/assets/figma.jpg'



const Skills = () => {
  return (
    <>
     <section id='skills'>
     <div className='skills'>
            <h1> Skills </h1>
        </div>

<div className='tech'>
      <h3>Technical competence</h3>
</div>


            <div className='lang'>

             <div>
                 <p>JavaScript</p> <br />
               <img src={javascript} alt="" className='js' />


              </div>

              <div>
                <p>React Js</p> <br />
                 <img src={react} alt="" className='react' />
              </div>


              <div>
                 <p >HTML</p> <br /> <br />
                 <img src={html} alt="" className='html' /> 
              </div>
               
               <div>
                 <p>CSS</p> <br />
                  <img src={css} alt="" className='css'/>
               </div>

                <div>
                 <p>Git</p> <br />
                  <img src={git} alt="" className='git' />
               </div>

               <div>
                 <p>Github</p> <br />
                  <img src={github} alt="" className='github'/>
               </div> 

               <div>
                 <p>TailWindcss</p> <br />
                  <img src={tailwind} alt="" className='tailwind' />
               </div> 


            <p className='eng'>English language (Proficient) </p>
            </div>

            
          



            <div className='skill'>
            <h2> Learning </h2>

            </div>
         

         <div className='bk-lang'>
          
         <div>
          <p>Python</p> <br />
          <img src={python} alt="" className='python'/>
         </div>

         <div>
          <p>My SQL</p> <br />
          <img src={mysql} alt="" className='python' />
         </div>

         <div>
          <p>Django</p> <br />
         <img src={django} alt=""className='django' />
         </div>

         <div>
          <p>Flutter</p> <br />
          <img src={flutter} alt="" className='boots' />
         </div>

         <div>
          <p>Next Js</p> <br />
           <img src={nextjs} alt="" className='next' />
         </div>

         <div>
            <p>Figma</p>
            <img src={figma} alt="" className='figma'/>
         </div>

         
           
        
         </div>

     </section>
    
    
    </>
   
  )
}

export default Skills