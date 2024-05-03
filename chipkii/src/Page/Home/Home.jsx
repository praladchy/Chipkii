import React from 'react'
import "./Home.css"
import Carsousel from '../../Components/Carsousel/Carsousel'
import Slider from '../../Components/Slider/Slider'


const Home = () => {
  return (
    <div className='Home-Main-Container'>
      <Carsousel />
      <Slider />
     
    
    </div>
  )
}

export default Home