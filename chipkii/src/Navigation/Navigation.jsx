import React from 'react'
import "./Navigation.css"
import Navbar from './Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routing/Routing'

const Navigation = () => {
  return (
    <div><BrowserRouter>
    <Routing/>
        <Navbar/>

    </BrowserRouter>
    </div>
  )
}

export default Navigation