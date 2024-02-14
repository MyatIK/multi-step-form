import InputContext from "./InputContext";
import { useState } from "react";

const InputContextProvider=({children})=>{
    const[count,setCount]=useState(0)

    

    return(
        <InputContext.Provider value={{count,setCount}}>
            {children}
        
        </InputContext.Provider>
    )
}

export default InputContextProvider
