import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Login() {
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth){
      navigate('/profile');
    }
  },[]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password
    };

    try {
      let response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      response= await response.json();
      console.log(response)
      if(response.name){
        localStorage.setItem('user', JSON.stringify(response));
        navigate('/profile');
      }else{
        alert("Please enter correct login details");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 style={{color: "Black"}} className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address:</label>
        <div className="mt-2">
          <input style={{padding: 5}} placeholder='Enter your email...' id="email" name="email" type="email" onChange={(e)=>setemail(e.target.value)} value={email} autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password:</label>
        </div>
        <div className="mt-2">
          <input style={{padding: 5}} placeholder='Enter your password...' id="password" name="password" type="password" onChange={(e)=>setpassword(e.target.value)} value={password} autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button style={{backgroundColor: "Black"}} onClick={handleSubmit} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
    Already have an account? 
    <Link className="no-underline border-b border-blue text-blue" to="/Register">
                        Create an Account
    </Link>.
    </p>
  </div>
</div>
    </div>
  )
}