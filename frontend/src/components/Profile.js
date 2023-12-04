import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Quiz from './Quiz';

export default function Profile() {
  const auth=localStorage.getItem('user')
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/');
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='border border-gray-300 rounded p-4' style={{width:700, justifyContent:"center", alignItems:"center", textAlign:"center"}}>
        <h1>Hello {JSON.parse(auth).name}</h1>
        Profile <br/>
        <Quiz/>
        <Link onClick={logout} to="/">Log out</Link>
    </div>
    </div>
  )
}