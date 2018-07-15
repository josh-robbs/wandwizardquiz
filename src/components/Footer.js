import React from 'react'
import logo from '../logo.svg'


const Footer = () => {

  return (
    <footer className="footer flex">
      <div className="footer-elements flex">    
        <small>&copy; TacoCorp</small>
        <img  className="react-logo"
              src={logo} 
              alt="logo" />
      </div>
    </footer>
  )

}

export default Footer