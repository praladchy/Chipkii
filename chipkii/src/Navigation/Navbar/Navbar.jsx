import React from 'react'
import Lable from '../../Dummy/Lable/Lable'
import { NavLink, Link } from "react-router-dom"
import "./Navbar.css"
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='Navbar-Main-Container'>
      <div className="Logo-Main-Container">
        <h2><Lable Lable="Chipkii" /></h2>
      </div>
      <div className="Navbar-Main-Menu-Container">
        {/* <Link to="/">Home</Link> */}
        {/* <Link></Link> */}
        <NavLink to="/Menu">Menu</NavLink>
        <NavLink to="/Mobileapp">Mobileapp</NavLink>
        {/* <NavLink  to="/ContactUs">ContactUs</NavLink> */}
      </div>
      <div className="Navbar-Main-Right-Container">
      <CiSearch />
      <FaShoppingCart />
      <button className='Navbar-Button-Container' > Login</button>
      </div>

    </div>
  )
}

export default Navbar