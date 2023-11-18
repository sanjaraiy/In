import React from 'react'
import "./Posts.css"
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function Posts() {
  return (
    <div className='posts-Container'>
        <div className='post-bar'>
           <div className='post-Author'>
                <Avatar>S</Avatar>
                Sanjh_. <span>12h</span>
           </div>
           <MoreHorizIcon></MoreHorizIcon>
        </div>
        <div className='post-image'></div>
        <div className='post-footer'></div>
    </div>
  )
}

export default Posts