import React from 'react'
import imgUrl from '../assets/react.png'

function Navbar() {
  return (
      <nav className="nav-bar">
        <img className="nav--logo" src={imgUrl} alt="react logo"/>
        <h3 className="nav--logotype">ReactFacts</h3>
        
        <h4 className="nav--title">React Course - Project 1</h4>
      </nav>
  )
}

export default Navbar