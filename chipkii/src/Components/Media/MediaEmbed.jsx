import React from 'react'
import "./MediaEmbed.css"
import Facebook from "../../Dummy/Photos/MediaIcon/facebook.jpeg"
import Instagram from "../../Dummy/Photos/MediaIcon/Instagram.jpeg"
import Google from "../../Dummy/Photos/MediaIcon/Google.png"
import { Link } from 'react-router-dom'
const MediaEmbed = () => {
  return (
    <div className='Social-Media-Main-Container'>
      <div className="Facebook-Icon-Main-Container">
        <Link to='https://www.Facebook.com' > <img src={Facebook} alt='FAcebook' width=" 80px 80px" /></Link>
      </div>
      <div className="Instagram-Icon-Main-Conatiner">
        <Link to='https://www.Instagram.com' > <img src={Instagram} alt='Istagram' width=" 90px 90px" /></Link>
      </div>
      <div className="Google-Icon-Main-Conatiner">
        <Link to='https://www.google.com' ><img src={Google} alt='Google' width=" 100px 100px" />
        </Link>

      </div>

    </div>
  )
}

export default MediaEmbed