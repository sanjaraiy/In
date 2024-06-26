import React from 'react'
import "./Navbar.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../Features/userSlice';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

function Navbar() {
    const user=useSelector(state=>state.data.user.user)
    const dispatch=useDispatch();
    const handleLogout=()=>{
      dispatch(logoutUser());
      signOut(auth);
    }
  return (
    <div className='side_navBar'>
        <img className='insta_logo' src='https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png' alt='logo'></img>
        <div className='btns'>
            <button className='side-btn'>
                <HomeIcon></HomeIcon>
                <span>Home</span>
            </button>
            <button className='side-btn'>
                <SearchIcon></SearchIcon>
                <span>Search</span>
            </button>
            <button className='side-btn'>
                <ExploreIcon></ExploreIcon>
                <span>Explore</span>
            </button>
            <button className='side-btn'>
                <SlideshowIcon></SlideshowIcon>
                <span>Reels</span>
            </button>
            <button className='side-btn'>
                <ChatIcon></ChatIcon>
                <span>Message</span>
            </button>
            <button className='side-btn'>
                <FavoriteBorderIcon></FavoriteBorderIcon>
                <span>Notifications</span>
            </button>
            <button className='side-btn'>
                <AddCircleOutlineIcon></AddCircleOutlineIcon>
                <span>Create</span>
            </button>

            <button className='side-btn'>
                <Avatar>A</Avatar>
                <span>{user.username}
                <button onClick={handleLogout} className='logout_button'>Log out</button>
                </span>
            </button>
            <div className='more-btn'>
                <button className='side-btn'>
                    <MenuIcon></MenuIcon>
                    <span>More</span>
                </button> 
            </div>
          </div>
    </div>
    
  )
}

export default Navbar