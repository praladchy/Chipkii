import React from 'react'
import "./MediaEmbed.css"
import { SiFacebook } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const MediaEmbed = () => {
  return (
    <div className='Social-Media-Main-Container'>
      <div className="Facebook-Icon-Main-Container">
        <SiFacebook />
      </div>
      <div className="Instagram-Icon-Main-Conatiner">
        <FaInstagramSquare width="80pxl"/>
      </div>
      <div className="Google-Icon-Main-Conatiner">
        <FcGoogle />
        <h6>
          Google
        </h6>

      </div>

    </div>
  )
}

export default MediaEmbed