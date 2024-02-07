import ColorContext from "./ColorContext";
import { useState } from "react";

const ColorContextProvider=({children})=>{
    const[count,setCount]=useState(0)

    

    return(
        <ColorContext.Provider value={{count,setCount}}>
            {children}
        
        </ColorContext.Provider>
    )
}

export default ColorContextProvider
