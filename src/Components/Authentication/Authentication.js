import React, {useState} from 'react'
import "./Authentication.css"
import Login from "./Login"
import Signup from './Signup';

function Authentication() {
    const [active,setActive]=useState("login");
   
    const handleChange=()=>{
        setActive(active==="login" ? "signup":"login")
    }
    
 return (
    <div className='authentication'>
        <div className='auth-left'>
            <img src='https://i.imgur.com/P3Vm1Kq.png' alt=''></img>
        </div>
        <div className='auth-right'>
          {active==="login" ? (<Login></Login>):(<Signup></Signup>)}
            <div className='auth-more'>
              <span>
                {active==="login" ? (<>Don't have an account?<button onClick={handleChange}>Sign up</button></>):(<>Have an account?<button onClick={handleChange}>Log in</button></>)}
              </span>
            </div>
        </div>
    </div>
  )
}

export default Authentication;