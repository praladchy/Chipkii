import React, { useState } from 'react'
import Lable from "../../Components/Shared/Lable/Lable"
import { NavLink, Link } from "react-router-dom"
import "./Navbar.css"
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
  const [Decoration, SetDecoration] = useState("Menu")
  return (
    <div className='Navbar-Main-Container navbar navbar-expand-lg navbar-light bg-light'>
      <div className="Logo-Main-Container navbar-brand">
        <h2><Lable Lable="Chipkii" /></h2>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <div className="Navbar-Main-Menu-Container navbar-nav mr-auto mt-2 mt-lg-0">
          <Link onClick={() => SetDecoration("Home")} className={Decoration === "Home" ? "Active" : "Navbar-Main-Menu-Container nav-item"} to="/">Home</Link>
          {/* <Link></Link> */}
          <NavLink text-decoration="none" className={Decoration === "Menu" ? "Active" : "Navbar-Main-Menu-Container nav-item"} onClick={() => SetDecoration("Menu")} to="/Menu">Menu</NavLink>
          <NavLink text-decoration="none" className={Decoration === "Mobileapp" ? "Active" : "Navbar-Main-Menu-Container nav-item"} onClick={() => SetDecoration("Mobileapp")} to="/Mobileapp">Mobileapp</NavLink>
          <NavLink text-decoration="none" className={Decoration === "ContactUs" ? "Active" : "Navbar-Main-Menu-Container nav-item"} onClick={() => SetDecoration("ContactUs")} to="/ContactUs">ContactUs</NavLink>
        </div>
        <div className="Navbar-Main-Right-Container">
          <CiSearch />
          <Link to="/Cart"><FaShoppingCart /></Link>
          <div className="Navbar-Right-Side-Cart-Container">

          </div>

          <Link to="/Login"><button className='Navbar-Button-Container' > Login</button></Link>
        </div>
        </div >
      </div>
      )
}

      export default Navbar