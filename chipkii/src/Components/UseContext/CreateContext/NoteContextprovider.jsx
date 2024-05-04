// import { Children, createContext } from "react";
// import { ExplorerSliderData } from "../../../Dummy/Photos/Explorer/ExplorerSliderData";
// export const NoteContext = createContext();

// const CreateContext = () => {
//   // const Contextapi=useContext()
//   const Explor = { ExplorerSliderData }
//   return (

//     < NoteContext.Provider value={Explor} >
//       {Children}
//     </NoteContext.Provider >
//   )
// }

// export default CreateContext
import React, { createContext } from 'react'
import { ExplorerSliderData } from '../../../Dummy/Photos/Explorer/ExplorerSliderData';

export const Notecontext=createContext();
const NoteContextprovider = (props) => {
  const Explor=ExplorerSliderData;
  return (
    <Notecontext.Provider value={Explor}>
      {props.children}
    </Notecontext.Provider>
  )
}

export default NoteContextprovider