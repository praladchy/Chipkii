import React from 'react'
import { Mustnag } from '../../Dummy/Photos/Mustang/Mustang'
import "./Slider.css"
const Slider = () => {
  return (
    <div className='Slider-Main-Container'>
        {Mustnag.map((each,index)=>{
            return(
                <div className="Slider-Image-Lable-Container" key={index  }>
                <img className='Slider-Image-Container' src={each.url} alt={each.Lable}
                />
                <p>{each.Lable}</p>
            </div>
            );
        })}

    </div>
  )
}

export default Slider