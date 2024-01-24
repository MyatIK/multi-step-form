import ColorContext from "./ColorContext";
import { useState } from "react";

const ColorContextProvider=({children})=>{
    const[color,setColor]=useState(null)

    return(
        <ColorContext.Provider value={{color,setColor}}>
            {children}
        
        </ColorContext.Provider>
    )
}

export default ColorContextProvider
