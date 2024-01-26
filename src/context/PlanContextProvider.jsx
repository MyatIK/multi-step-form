import { useState } from "react";
import PlanContext from "./PlanContext";

const PlanContextProvider=({children})=>{
    const[plan,setPlan]=useState(null)

    return(
        <PlanContext.Provider value={{plan,setPlan}}>
            {children}
        </PlanContext.Provider>
    )
}

export default PlanContextProvider