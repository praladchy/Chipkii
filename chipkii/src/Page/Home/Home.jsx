import React from 'react'
import "./Home.css"
import Carsousel from '../../Components/Carsousel/Carsousel'
import Slider from '../../Components/Slider/Slider'

import MediaEmbed from '../../Navigation/Media/MediaEmbed'
const Home = () => {
  return (
    <div className='Home-Main-Container'>
      <Carsousel />
      <Slider />
     
      <MediaEmbed/>
    </div>
  )
}

export default Home