import React from 'react'
import "./Home.css"
import Carsousel from '../../Components/Carsousel/Carsousel'
import Slider from '../../Components/Slider/Slider'

import ExplorSlider from '../../Components/ExploreSlider/ExplorSlider'

const Home = () => {
  return (
    <div className='Home-Main-Container'>
      <Carsousel />
      <Slider />
      <ExplorSlider/>
    </div>
  )
}

export default Home