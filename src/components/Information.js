import React from 'react'
import logo from '../images/profile.jpg'

function Information() {
  return (
    <div>
      <img src={logo} width="150px"style={{margin:"20px"}} alt='profile'/>
      <h1>Navoda Jayamini</h1>
      <h2>Software Engieering-Intern</h2>
      <button onClick={(e) => {
        window.location.href='http://gmail.com';
        }}>
        Email</button>
    </div>
  )
}

export default Information
