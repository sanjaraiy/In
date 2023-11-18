import React, { useState } from 'react'
import "./Signup.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { auth } from './../../firebase';
function Signup() {
  const[email,setEmail]=useState("")
  const [username,setUsername]=useState("")
  const[password,setPassword]=useState("")
   
  const handleSignup=()=>{
        createUserWithEmailAndPassword(auth,email,password).then(
        signInWithEmailAndPassword(auth,email,password).then(
        updateProfile(auth.currentUser,{displayName:username}))
        ).catch(err=>{
          alert(err);
        });
  };
  return (
    <div className='signup'>
        <img src='https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png' alt='logo'></img>
        <input onChange={e=>setEmail(e.target.value)} type='email' placeholder='Email' value={email}></input>
        <input onChange={e=>setUsername(e.target.value)} type='text' placeholder='Username' value={username}></input>
        <input onChange={e=>setPassword(e.target.value)} type='password' placeholder='Password' value={password}></input>
        <button onClick={handleSignup}>Sign up</button>
    </div>
  )
}

export default Signup