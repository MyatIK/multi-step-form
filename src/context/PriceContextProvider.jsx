import {useState } from "react";
import PriceContext from "./PriceContext";

const PriceContextProvider=({children})=>{
    const[price,setPrice]=useState(null)
    const[addOn,setAddOn]=useState('')


    return(
        <PriceContext.Provider value={{price,setPrice,addOn,setAddOn}}>
            {children}

        </PriceContext.Provider>


    )
}

export default PriceContextProvider