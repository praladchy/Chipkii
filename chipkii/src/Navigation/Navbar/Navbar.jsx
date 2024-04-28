import React from 'react'
import Lable from '../../Dummy/Lable/Lable'
import {NavLink,Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
<div className="Logo-Main-Container">
<h2><Lable Lable="Chipkii"/></h2>
</div>
<div className="Navbar-Main-Container">
{/* <Link to="/">Home</Link> */}
{/* <Link></Link> */}
<NavLink  to="/Menu">Menu</NavLink>
<NavLink  to="/Mobileapp">Mobileapp</NavLink>
{/* <NavLink  to="/ContactUs">ContactUs</NavLink> */}
</div>
<div className="Navbar-Main-Right-Container">

</div>

    </div>
  )
}

export default Navbar