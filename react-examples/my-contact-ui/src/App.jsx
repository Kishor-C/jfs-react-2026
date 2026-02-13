import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Profile, SimpleArrays } from './components/Profile'


function App() {
  let profile1 = {id: 7890, name : "Alex1", dob: "2000-11-25"};
  let profile2 = {id: 7896, name : "Alex2", dob: "2001-11-25"};
  let profile3 = {id: 8890, name : "Alex3", dob: "2002-11-25"};
  

  
  return (
   <div>
     <h2>This is a root component</h2>
     <Profile details = {profile1} />
     <Profile details = {profile2} />
     <Profile details = {profile3} />
     <SimpleArrays />
   </div>
  )
}

export default App
