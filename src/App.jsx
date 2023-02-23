// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import React from 'react'
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css'

function App() {
  return (
    <div className="App">
      {<Navbar/>}
      {<Main />}
    </div>
  )
}

export default App
