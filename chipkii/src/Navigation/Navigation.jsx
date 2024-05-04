import React from 'react'
import "./Navigation.css"
import Navbar from './Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routing/Routing'
import CreateContext from '../Components/UseContext/CreateContext/NoteContext'

const Navigation = () => {
  return (
    <div><BrowserRouter>
    {/* <CreateContext> */}

   
    <Navbar/>
    <Routing/>
    {/* </CreateContext> */}

    </BrowserRouter>
    </div>
  )
}

export default Navigation