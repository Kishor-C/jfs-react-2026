import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Profile, UserForm } from './components/Profile'
import { Link, Route } from 'react-router-dom'


function App() {
  return (<div className="container-fluid">
    <div>
      <Profile id = "2"/>
    </div>
  </div>)
}

export default App
