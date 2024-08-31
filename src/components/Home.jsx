import React from 'react'
import '../style/Home.css'
import kes from '/assets/kes.jpg'
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";




const Home = () => {
  return (
     
    <>
    <section id='home' className='section-one'>
    <div className='first-sec'>

 

  <div className='p-img'>
    { <img src={kes} alt="" className='p-profile' /> }
</div> 

<div>
<div className='info'>
      <h2>Hi, i am <br />
        
         <span>Kesla Chime</span>
      </h2> 
           <p>FRONTEND DEVELOPER</p>
   </div>
   

  <div className='media'>
    
    
    <a href="https://www.linkedin.com/in/chime-kesla-291706317"> <FaLinkedin /></ a>
    <a href="https://github.com/keslanaeto"> <FaGithub/></a> 
    <a href="https://t.co/1yAjp4n7fy"> <FaWhatsapp/></a>   
    
  </div>


 <div className='tel'>
    <a className='tell' href="tel:09017428035"><FiPhoneCall/> +2349017428035</a>  <br />


 </div>

<div className='mail'>
   <a className='email'  href="https://mail.google.com/mail/u/0/#inbox?compose=new"> <MdOutlineAttachEmail/> Email</a>

</div>


</div>

 
 </div>

<div className='resume'>
    <a href="https://docs.google.com/document/d/1FQIquGxmwEWkBdwolTf4y7YOoU-O8M1NIXLuqcNQhHs/pub">GET C.V</a>
</div>
 



    </section>

    
    </>

    
  )
}

export default Home