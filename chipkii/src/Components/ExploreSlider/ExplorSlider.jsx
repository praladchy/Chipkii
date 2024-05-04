import React, { useContext} from 'react'
import "./ExplorSlider.css"
// import { ExplorerSliderData } from '../../Dummy/Photos/Explorer/ExplorerSliderData'
import { Link } from 'react-router-dom'
// import NoteContext from "../UseContext/CreateContext/NoteContext"
import { Notecontext } from '../UseContext/CreateContext/NoteContextprovider'


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
  // const{ ExplorerSliderDat}=useContext(NoteContext);
  const Explor=useContext(Notecontext)
  // const [Count,setCount]=useState(0)
  return (
    <div className='ExplorerSlide-Main-Container'>
      {
        Explor.map((each, index) => {
          
          if(Category===each.Cartigory || Category==="All"){
          return (

            <div className="ExploreSlider-image-Container" key={index}>

              <Link to={each.Name} >
                <img className='ExploreSlider-image-Container' src={each.Url} alt={each.alt} />
                <h6>{each.Name}</h6></Link>


              <p>{each.Definition}</p>


            </div>
            
            
          )
        }
      
      })}
    </div>
  )
}

export default ExplorSlider