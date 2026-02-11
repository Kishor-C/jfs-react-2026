import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Profile } from './components/Profile'


function App() {
  return (
   <div>
     <h2>This is a root component</h2>
     <Profile />
   </div>
  )
}

export default App
