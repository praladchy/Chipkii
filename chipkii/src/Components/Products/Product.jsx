import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GrAdd } from "react-icons/gr";
import { FaMinus } from "react-icons/fa";

const Product = ({ Name, Url, alt, Definition }) => {
  const [Count, setCount] = useState(0);
  return (
    <>
      <Link to={Name} >
        <img className='ExploreSlider-image-Container' src={Url} alt={alt} /></Link>

      {Count === 0 ? < GrAdd onClick={()=>setCount(Count => Count + 1)} /> :
        <>< GrAdd  onClick={()=>setCount(Count => Count + 1) }/>
          {Count}
          <FaMinus onClick={()=>setCount(Count => Count -1) }/></>}
      <Link to={Name} >
        <h6>{Name}</h6></Link>


      <p >{Definition}</p>
    </>
  )
}

export default Product