import React from 'react'

import '../style/Qualification.css'
// import skills from "../data/skills.json"
import history from "../data/history.json"



export const Qualification = () => {
  return (
    <section className='container' id='experience'>    
     <h2>Experience</h2>

       <div className='content'>
        {/* <div className='skills'>
          { skills.map((skill, id) => {
               return <div key={id} className='tc-skill'>
                    <p>{skill.title}</p>
                   <div className='sec-img'>
                    <img src={skill.imageSrc} alt={skill.title} />
                    </div>
               </div>
            })
          }
           </div> */}
        
             <ul className='snd-container'>
              {
                history.map((historyItem, id) => {
                  return <li key={id} className='history'>
                    {/* <img src={historyItem.imageSrc} alt={`${historyItem.company}`} /> */}
                    <div className='historys'>
                      <h3>{`${historyItem.company}`}</h3>
                      <h4>{`${historyItem.role}`}</h4>
                      <p>{`${historyItem.startDate}, - ${historyItem.endDate}`}</p>
                      <ul>{historyItem.experience.map((experience, id) => {
                        return <li key={id}>{experience}</li>
                      }
                      )}
                      
                      </ul>
                    </div>
                  </li>
                })
              }
             </ul>
      </div>   


    </section>
    
  )
}

export default Qualification