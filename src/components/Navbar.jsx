import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { navlinksdata } from '../Navbarjs';
import { FaBars } from "react-icons/fa";


import '../style/Navbar.css'


const Naviga = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen)
   }

  return (
   <header>
       <div className='con'>
      <nav>
         <div className='logo'>
             <h5>keslA</h5>
         </div>

         <ul className={isOpen ? 'nav-link active ' : 'nav-link'}> {
             navlinksdata.map(({_id, title, link})=>(
              <li key={_id} > 
              
             <Link
             activeClass='active'
             to={link}
             spy={true}
             smooth={true}
             offset={-60}
             duration={300}
             >
             {title}
             </Link>  
              
              </li>
     
     
            ))}
       </ul>  

        <div className="iconss" onClick={toggleMenu}>
            <FaBars />
        </div>

      </nav>
    </div>
   </header>
  
  )
}

export default Naviga