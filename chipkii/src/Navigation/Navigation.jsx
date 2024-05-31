import React from 'react'
import "./Navigation.css"
import Navbar from './Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'

import NoteContextprovider from '../Components/Hooks/CreateContext/NoteContextprovider'
import Routing from '../Components/Routing/Routing'



const Navigation = () => {
  return (
    <>
    <BrowserRouter>
    

   <NoteContextprovider>

    <Navbar/>
    {/* <Routing/> */}
    <Routing/>
    
    </NoteContextprovider>
    
    </BrowserRouter>
    </>
  )
}


export default Navigation