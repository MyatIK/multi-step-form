import {useState } from "react";
import PriceContext from "./PriceContext";

const PriceContextProvider=({children})=>{
    const[price,setPrice]=useState(null)
    const[addOn,setAddOn]=useState([])

    const addNew=(item)=>
        setAddOn((prev)=>[...prev,item]);


    return(
        <PriceContext.Provider value={{price,setPrice,addOn,addNew}}>
            {children}

        </PriceContext.Provider>


    )
}

export default PriceContextProvider