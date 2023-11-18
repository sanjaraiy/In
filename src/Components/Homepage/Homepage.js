import React from 'react'
import "./Homepage.css"
import Navbar from '../Navbar/Navbar'
import Timeline from '../Timeline/Timeline'

function Homepage() {
  return (
    <div className='mainContainer'>
        <div className='navBar'>
            <Navbar></Navbar>
        </div>
        <div className='timeLine'>
            <Timeline></Timeline>
        </div>
    </div>
  )
}

export default Homepage