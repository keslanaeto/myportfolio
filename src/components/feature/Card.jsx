import React from 'react'

const Card = ({title, des}) => {
  return (
    <div className='what'>

      {/* <div className='ig'>
         {icon}
      </div> */}
      
      <div className='des'>
         <h2>
          {title}
         </h2>

      </div>

      <div>
         <p>
            {des}
         </p>
      </div>
        
   </div>
    
    
  )
}

export default Card