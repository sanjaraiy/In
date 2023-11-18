import React, { useState } from 'react'
import "./Timeline.css"
import Suggestpage from '../Suggestpage/Suggestpage'
import Posts from '../Posts/Posts'
function Timeline() {
  const [posts,setposts]=useState([
    {
      user:"sanjh_",
      postImage:"https://images.pexels.com/photos/19121700/pexels-photo-19121700/free-photo-of-a-man-standing-in-front-of-a-rock-formation-with-a-starry-sky.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      likes:12,
      timestamp:"2d",
    },
    {
      user:"deep_",
      postImage:"https://images.pexels.com/photos/19001793/pexels-photo-19001793/free-photo-of-bicycles-on-pavement-in-amsterdam-netherlands.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      likes:23,
      timestamp:"3d",
    },
    {
      user:"sandy_",
      postImage:"https://images.pexels.com/photos/19036029/pexels-photo-19036029/free-photo-of-hot-air-balloon-floating-over-mountains.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      likes:32,
      timestamp:"4d",
    },

  ]);

  return (
    <div className='timeline_Container'>
        <div className='t_left'>
          <div className='insta-posts'>
            
            {
              posts.map((post)=>{
                <Posts user={post.user} userImage={post.postImage} likes={post.likes} timestamp={post.timestamp}></Posts>
              })
            }
           

          </div>
        </div>
        <div className='t_right'>
            <Suggestpage></Suggestpage>
        </div>
    </div>
  )
}

export default Timeline