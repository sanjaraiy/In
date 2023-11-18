import React from 'react'
import "./Signup.css";
function Signup() {
  return (
    <div className='signup'>
        <img src='https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png' alt='logo'></img>
        <input type='email' placeholder='Email'></input>
        <input type='text' placeholder='Username'></input>
        <input type='password' placeholder='Password'></input>
        <button>Sign up</button>
    </div>
  )
}

export default Signup