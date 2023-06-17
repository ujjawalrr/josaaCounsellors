import React from 'react'
import Navbar from './Navbar'
import AboutUsContent from './AboutUsContent'

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className='contentContainer'>
        <AboutUsContent />
      </div>
    </div>
  )
}

export default AboutUs
