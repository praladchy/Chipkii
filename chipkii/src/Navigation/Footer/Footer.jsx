import React from 'react'
import { Link } from 'react-router-dom'
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

            <p className='Footer-Main'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid architecto eveniet cum accusamus eos corporis, asperiores maiores neque odit vitae. lorem60 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, adipisci esse voluptate at eligendi, repudiandae reprehenderit sapiente obcaecati minus consequuntur ducimus! Non, voluptates delectus est, labore unde suscipit enim quam deleniti ducimus eveniet assumenda voluptatem expedita possimus corrupti alias maxime. Temporibus veritatis facere incidunt adipisci dicta accusamus quidem. Ex ipsa porro temporibus, quas facere inventore distinctio alias quos blanditiis officiis?</p>

        </div>
    )
}

export default Footer