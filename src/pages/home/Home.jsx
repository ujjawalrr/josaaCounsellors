import React from 'react'
import Navbar from '../../components/Navbar'
import AboutUsContent from '../aboutUs/AboutUsContent'
import WhyUs from './WhyUs'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='contentContainer'>
        <AboutUsContent />
        <WhyUs />
      </div>
    </div>
  )
}

export default Home
