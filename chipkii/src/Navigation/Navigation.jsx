import React from 'react'
import "./Navigation.css"
import Navbar from './Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routing/Routing'
import NoteContextprovider from '../Components/UseContext/CreateContext/NoteContextprovider'



const Navigation = () => {
  return (
    <><BrowserRouter>
    

   <NoteContextprovider>

    <Navbar/>
    <Routing/>
    
    </NoteContextprovider>
    
    </BrowserRouter>
    </>
  )
}


export default Navigation