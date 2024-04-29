import React, { useState } from 'react'
import Lable from '../../Dummy/Lable/Lable'
import { NavLink, Link } from "react-router-dom"
import "./Navbar.css"
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
  const [Decoration, SetDecoration] = useState("Menu")
  return (
    <div className='Navbar-Main-Container'>
      <div className="Logo-Main-Container">
        <h2><Lable Lable="Chipkii" /></h2>
      </div>
      <div className="Navbar-Main-Menu-Container">
        <Link onClick={() => SetDecoration("Home")} className={Decoration === "Home" ? "Active" : "Navbar-Main-Menu-Container"} to="/">Home</Link>
        {/* <Link></Link> */}
        <NavLink text-decoration="none" className={Decoration === "Menu" ? "Active" : "Navbar-Main-Menu-Container"} onClick={() => SetDecoration("Menu")} to="/Menu">Menu</NavLink>
        <NavLink text-decoration="none" className={Decoration === "Mobileapp" ? "Active" : "Navbar-Main-Menu-Container"} onClick={() => SetDecoration("Mobileapp")} to="/Mobileapp">Mobileapp</NavLink>
        <NavLink text-decoration="none" className={Decoration === "ContactUs" ? "Active" : "Navbar-Main-Menu-Container"} onClick={() => SetDecoration("ContactUs")} to="/ContactUs">ContactUs</NavLink>
      </div>
      <div className="Navbar-Main-Right-Container">
        <CiSearch />
       <Link to="/Cart"><FaShoppingCart /></Link> 
        <div className="Navbar-Right-Side-Cart-Container">
         
        </div>

        <button className='Navbar-Button-Container' > Login</button>
      </div>

    </div>
  )
}

export default Navbar