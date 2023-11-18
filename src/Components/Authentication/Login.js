import React from 'react'
import "./Login.css";

function Login() {
  return (
    <div className='login'>
      <img src='https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png' alt='logo'></img>
      <input type='email' placeholder='Email'></input>
      <input type='password' placeholder='Password'></input>
      <button>Log in</button>
    </div>
  )
}

export default Login