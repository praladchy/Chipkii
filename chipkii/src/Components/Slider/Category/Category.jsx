

import React, { useState } from 'react'
// import { SliderData } from '../../../Dummy/Photos/SliderData'
import { SliderData } from '../../../Dummy/Photos/SliderData/SliderData'
import ExplorSlider from '../../ExploreSlider/ExplorSlider'
import "./Category.css"
const Category = () => {
    const [Category, setCategory] = useState("All")
    // console.log(Category)
    return (<>
   
        <div className='Slider-Main-Container'>
            {SliderData.map((each, index) => {
                return (
                    <div className="Slider-Image-Lable-Container" key={index}>
                        <img onClick={()=>setCategory(prev=>prev===each.Name?"All":each.Name)}  
                        
                        className='Slider-Image-Container' src={each.url} alt={each.Name}
                        />
                        <p>{each.Name}</p>
                    </div>
                );
            })}
            <hr />
            
        </div>
        <ExplorSlider Category={Category} />
        </>
    )
}

export default Category