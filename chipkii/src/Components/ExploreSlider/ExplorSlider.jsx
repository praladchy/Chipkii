import React, { useContext, useState } from 'react'
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
  const [isReadMore, setIsReadMore] = useState(true);

  const Explors = useContext(Notecontext)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const Explorer = Explors.slice(0, 20);
  const Explore = Explors;

  return (<>
    <div className='ExplorerSlide-Main-Container'>
      {isReadMore ? <>{Explorer.map((each, index) => {

        if (Category === each.Cartigory || Category === "All") {
          return (

            <div className="ExploreSlider-image-Description-Container" key={index}  >

              {/* <Link to={each.Name} >
                <img  className='ExploreSlider-image-Container' src={each.Url} alt={each.alt} />
                <h6>{each.Name}</h6></Link>


              <p >{each.Definition}</p> */}

              <Product Name={each.Name} Url={each.Url} alt={each.alt} Definition={each.Definition} />

            </div>


          );
        }
        return null;

      })}</> : <>{
        Explore.map((each, index) => {

          if (Category === each.Cartigory || Category === "All") {
            return (

              <div className="ExploreSlider-image-Description-Container" key={index}  >

                {/* <Link to={each.Name} >
                <img  className='ExploreSlider-image-Container' src={each.Url} alt={each.alt} />
                <h6>{each.Name}</h6></Link>


              <p >{each.Definition}</p> */}

                <Product Name={each.Name} Url={each.Url} alt={each.alt} Definition={each.Definition} />

              </div>


            );
          }
          return null;

        })}</>};


    </div>
    <div className="Explore-button-container">
      <button onClick={toggleReadMore} className='Navbar-Button-Container' >
        {isReadMore ? 'Read more' : 'Read less'}
      </button>
    </div>
  </>
  )
}

export default ExplorSlider