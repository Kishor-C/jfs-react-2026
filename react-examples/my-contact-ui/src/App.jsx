import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Profile, UserForm } from './components/Profile'


function App() {
  let profile1 = {id: 7890, name : "Alex1", dob: "2000-11-25"};
  let profile2 = {id: 7896, name : "Alex2", dob: "2001-11-25"};
  let profile3 = {id: 8890, name : "Alex3", dob: "2002-11-25"};
  
  let profiles = [profile1, profile2, profile3];
  
  return (
   <div className="container-fluid">
     <h2 className="text-center">This is a root component</h2>
     {profiles.map((profile, index)=><Profile key = {profile.id} details = {profile}/>)}
     <div className="w-50">
      <UserForm />
     </div>
   </div>
  )
}

export default App
