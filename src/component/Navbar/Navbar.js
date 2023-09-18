import React from 'react'
import "./Navbar.css" 
function Navbar() {
  return (
    <div className='nav-bar'>
       <img className='nav-logo' src="./netflixlogo.png" alt="logo" />
      
       <div className='nav-right'>
       <img src="./icon_taransalte.png" alt="" />
      <select name="language" id="language">
      
      <option value="">English</option>
      <option value="">Hindi</option>
      </select>
      <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar