import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Menu from '../../Page/Menu/Menu'
import MobileApp from '../../Page/MobileApp/MobileApp'
import Home from "../../Page/Home/Home"
import Cart from '../../Page/Cart/Cart'
import PlaceOrder from '../../Page/PlaceOrder/PlaceOrder'
import { ExplorerSliderData } from '../../Dummy/Photos/Explorer/ExplorerSliderData'
import ExplorSlider from '../../Components/ExploreSlider/ExplorSlider'

const Routing = () => {
    return (
        <div>
            {/* <Router> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Menu" element={<Menu />} />
                {/* <Routes> */}
                <Route path="/MobileApp" element={<MobileApp />} />
                <Route path='/Cart'  element={<Cart/>}/>
                <Route path='/Order' element={<PlaceOrder/>}/>

{/* 
                {ExplorerSliderData.map((each)=>{
                    return(
                    <Route path={each.link} element={<ExplorSlider key={each.index} name={each.Name} Src={each.Url} Alt={each.alt}/>}/>
                 ) })

                } */}
                
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