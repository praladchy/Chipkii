import React from 'react'
import { Link } from 'react-router-dom'
import Chocolate from "../../Dummy/Photos/R.png"
import "./Footer.css"
const Footer = () => {
    return (
        <div className='Footer-Main-Container'>
            <div className="Footer-Heading-container">
                <h3>Chipkii</h3>
            </div>
            <div className="Footer-Nav-Container">
                <Link className="Footer-Nav" to="/Home">Home</Link>
                <Link className="Footer-Nav" to="/About">About</Link>
                <Link className="Footer-Nav" to="/MobileApp"> App</Link>

                <Link className="Footer-Nav" to="/Service" >Service</Link>

                <Link className="Footer-Nav" to="/ContactUs">ContactUs</Link>






            </div>
            <div className="Footer-Slogan-Container">
                <img src={Chocolate} alt='Slogan' width="350em" />


                <p className='Footer-Main'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid architecto eveniet cum accusamus eos coritatis facere incidunt adipisci dicta accusamus quidem. Ex ipsa porro temporibus, quas facere inventore distinctio alias quos blanditiis officiis?</p>
            </div>
            <p>"permission to reproduce photographs and other copyright material"</p>
        </div>
    )
}

export default Footer