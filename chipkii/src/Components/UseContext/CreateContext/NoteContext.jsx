import { Children, createContext } from "react";
import { ExplorerSliderData } from "../../../Dummy/Photos/Explorer/ExplorerSliderData";
export const NoteContext = createContext();

const CreateContext = () => {
  // const Contextapi=useContext()
  const Explor = { ExplorerSliderData }
  return (

    < NoteContext.Provider value={Explor} >
      {Children}
    </NoteContext.Provider >
  )
}

export default CreateContext