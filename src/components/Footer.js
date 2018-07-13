import React from 'react';
import logo from '../logo.svg';


const Footer = (props) => {
  return (
    <footer className="App-footer flex">
      <small>&copy; TacoCorp</small>
      <img src={logo} className="App-logo" alt="logo" />
    </footer>
  )
}

export default Footer