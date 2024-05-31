import React from 'react'
import "./Home.css"
import Carsousel from '../../Components//Slider/Carsousel/Carsousel'
import Slider from '../../Components/Slider/Slider'

import MediaEmbed from '../../Components/Media/MediaEmbed'
import Footer from '../../Navigation/Footer/Footer'
const Home = () => {
  return (
    <div className='Home-Main-Container'>
      <Carsousel />
      <Slider />
     
      <MediaEmbed/>
      <Footer/>
    </div>
  )
}

export default Home