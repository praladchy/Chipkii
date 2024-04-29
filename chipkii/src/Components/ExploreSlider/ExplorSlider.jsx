import React from 'react'
import "./ExplorSlider.css"
import { ExplorerSliderData } from '../../Dummy/Photos/Explorer/ExplorerSliderData'

const ExplorSlider = () => {
  return (
    <div className='ExplorerSlide-Main-Container'>
      {
        ExplorerSliderData.map((each, index) => {
          return (
            <div className="ExploreSlider-image-Container" key={index}>
              <img className='ExploreSlider-image-Container' src={each.Url} alt={each.alt}  />
              <p>{each.Name}</p>
            </div>

          )
        })
      };

    </div>
  )
}

export default ExplorSlider