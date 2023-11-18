import React from 'react'
import "./Timeline.css"
import Suggestpage from '../Suggestpage/Suggestpage'
import Posts from '../Posts/Posts'
function Timeline() {
  return (
    <div className='timeline_Container'>
        <div className='t_left'>
          <div className='insta-posts'>
            <Posts></Posts>
          </div>
        </div>
        <div className='t_right'>
            <Suggestpage></Suggestpage>
        </div>
    </div>
  )
}

export default Timeline