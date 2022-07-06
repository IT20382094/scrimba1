import React from 'react'
import logo1 from '../images/1.png'
import logo2 from '../images/2.png'
import logo3 from '../images/3.png'
import logo4 from '../images/4.jpg'




function Footer() {
  return (
    <div>
        <img src={logo1} width="50" style={{padding:"20px"}} alt='linkdin logo'/>
        <img src={logo2} width="50" style={{padding:"20px"}} alt='facebook logo'/>
        <img src={logo3} width="50" style={{padding:"20px"}} alt='instagram logo'/>
        <img src={logo4} width="50" style={{padding:"20px"}} alt='twitter logo'/>

    </div>
  )
}

export default Footer
