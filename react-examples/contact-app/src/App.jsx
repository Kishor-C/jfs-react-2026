import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Route, Router, Routes } from 'react-router-dom'
import { Login, Register, Success } from './components/ContactApp'

function App() {
  return (<div>
    <h1>This is Root component</h1>
    

    <Routes>
      <Route path="" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="success/:profileId" element={<Success />} />
    </Routes>
  </div>)
}

export default App
