import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Menu from '../../Page/Menu/Menu'
import MobileApp from '../../Page/MobileApp/MobileApp'
import Home from "../../Page/Home/Home"

const Routing = () => {
    return (
        <div>
            {/* <Router> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<Menu />} />
                {/* <Routes> */}
                <Route path="/MobileApp" element={<MobileApp />} />
                {/* <Route path="/news" element={<News />} /> */}
                {/* Define other routes that you need*/}
            </Routes>
            {/* Define other routes that you need*/}
        {/* </Routes> */}
        {/* </Router> */ }
    </div >
  )
}

export default Routing