import React from 'react'
import "./Suggestpage.css"
import { Avatar } from '@mui/material'
function Suggestpage() {
  return (
    <div className='suggest-container'>
      <div className='suggests-title'>Suggestions for you</div>
      <div className='suggests-usernames'>
        <div className='suggest-username'>
             <div className='username-left'>
              <span className='avatar'>
                <Avatar>S</Avatar>
              </span>
              <div className='username-info'>
                <span className='username'>sanjh</span>
                <span className='relation'>New to Instagram</span>
                
              </div>
             </div>
             <button className='follow_button'>Follow</button>
        </div>

        <div className='suggest-username'>
             <div className='username-left'>
              <span className='avatar'>
                <Avatar>S</Avatar>
              </span>
              <div className='username-info'>
                <span className='username'>sanjh</span>
                <span className='relation'>New to Instagram</span>
                
              </div>
             </div>
             <button className='follow_button'>Follow</button>
        </div>

        <div className='suggest-username'>
             <div className='username-left'>
              <span className='avatar'>
                <Avatar>S</Avatar>
              </span>
              <div className='username-info'>
                <span className='username'>sanjh</span>
                <span className='relation'>New to Instagram</span>
                
              </div>
             </div>
             <button className='follow_button'>Follow</button>
        </div>

        <div className='suggest-username'>
             <div className='username-left'>
              <span className='avatar'>
                <Avatar>S</Avatar>
              </span>
              <div className='username-info'>
                <span className='username'>sanjh</span>
                <span className='relation'>New to Instagram</span>
                
              </div>
             </div>
             <button className='follow_button'>Follow</button>
        </div>
      </div>
    </div>
  )
}

export default Suggestpage