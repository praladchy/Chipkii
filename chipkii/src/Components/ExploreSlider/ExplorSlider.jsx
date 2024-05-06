import React, { useContext} from 'react'
import "./ExplorSlider.css"
// import { ExplorerSliderData } from '../../Dummy/Photos/Explorer/ExplorerSliderData'
// import { Link} from 'react-router-dom'
// import NoteContext from "../UseContext/CreateContext/NoteContext"
import { Notecontext } from '../UseContext/CreateContext/NoteContextprovider'
import Product from '../Products/Product'


// const ExplorSlider = ({key,name,Src,Alt} ) => {
//   return (
//     <div className='ExplorerSlide-Main-Container'>
//       {/* {
//         ExplorerSliderData.map((each, index) => { */}
//           return(
//             <div className="ExploreSlider-image-Container" key={key}>
//              <Link to={name} ><img className='ExploreSlider-image-Container' src={Src} alt={Alt}  />
//               <p>{name}</p>
//               </Link>
//             </div>

//           )
//         {/* })
//       }; */}

//     </div>
//   )
// }

// export default ExplorSlider


const ExplorSlider = ({ Category }) => {
  
  const Explors=useContext(Notecontext)
  
  
  return (
    <div className='ExplorerSlide-Main-Container'>
      {
        Explors.map((each, index) => {
          
          if(Category===each.Cartigory || Category==="All"){
          return (

            <div  className="ExploreSlider-image-Description-Container" key={index}  >

              {/* <Link to={each.Name} >
                <img  className='ExploreSlider-image-Container' src={each.Url} alt={each.alt} />
                <h6>{each.Name}</h6></Link>


              <p >{each.Definition}</p> */}

              <Product Name={each.Name} Url={each.Url} alt={each.alt} Definition={each.Definition}/>

            </div>
            
            
          );
        }
        return null;
      
      })}
    </div>
  )
}

export default ExplorSlider