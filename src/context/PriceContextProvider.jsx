import {useState } from "react";
import PriceContext from "./PriceContext";

const PriceContextProvider=({children})=>{
    const[price,setPrice]=useState(null)


    return(
        <PriceContext.Provider value={{price,setPrice}}>
            {children}

        </PriceContext.Provider>


    )
}

export default PriceContextProvider