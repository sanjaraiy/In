import React from 'react'
import "./Posts.css"
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Posts({user,userImage,likes,timestamp}) {
  return (
    <div className='posts-Container'>
        <div className='post-bar'>
           <div className='post-Author'>
                <Avatar>{user.chatAt(0).toUpperCase()}</Avatar>
                {user} .{" "} <span>{timestamp}</span>
           </div>
           <MoreHorizIcon></MoreHorizIcon>
        </div>
        <div className='post-image'>
            <img src={userImage} alt='post'></img>
        </div>
        <div className='post-footer'>
            <div className='post-icons'>
                <div className='main-icon'>
                    <FavoriteBorder className='icon-item'></FavoriteBorder>
                    <ChatBubbleOutlineIcon className='icon-item'></ChatBubbleOutlineIcon>
                    <TelegramIcon className='icon-item'></TelegramIcon>
                </div>
                <div className='save-icon'>
                    <BookmarkBorderIcon></BookmarkBorderIcon>
                </div>
            </div>
            Liked by {likes} people.
        </div>
    </div>
  )
}

export default Posts