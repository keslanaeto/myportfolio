import React from 'react'

import "../style/project.css"
import { projects } from '../data/projects'

const Projects = () => {
  return (
    <section className='projects'>
    
        <div className='nx-container'>
            <h1>Projects</h1>
            <div className='projects'>
              {
              projects.map((project, id) => {
                   return <div key={id} className='project-pic'>
                     <img src={project.imageSrc} alt={`image of ${project.title}`} />
                     <h3>{project.title}</h3>

                     <div className='skilss'>
                      {
                      project.skills.map((skill, id) => {
                         return <div key={id} className='skilll'>{`${skill}`}</div>
                      })}
                      <div/>
                      </div>
                    
                      <div className='links'>
                        <a href={project.Demo} className='link'>Demo</a>
                        <a href={project.Code} className='link'>Code</a>
                     
                   </div>
                   </div>
              })}
              
            </div>

                
           </div>
        
    

     
    </section>
    
  )
}

export default Projects