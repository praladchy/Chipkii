import React from 'react'
import ExploreRoutingData from './ExplorRoutingData.jsx/ExploreRoutingData'
import { Route, Router } from 'react-router-dom'

const ExplorRouting = () => {
  return (
    <div className='ExploreRouting-Main-Container'>
        

{ExploreRoutingData.map((each,index)=>{
    <div className="ExploreRouting-Container" key={index}>
<Router>
    <Route path={each.path} element={each.Element}/>
</Router>
    </div>
})}
    </div>
  )
}

export default ExplorRouting