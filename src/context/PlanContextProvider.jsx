import { useState } from "react";
import PlanContext from "./PlanContext";

const PlanContextProvider=({children})=>{
    const[plan,setPlan]=useState(false)
    const togglePlan=()=>{
        setPlan(!plan);
    }

    return(
        <PlanContext.Provider value={{plan,togglePlan}}>
            {children}
        </PlanContext.Provider>
    )
}

export default PlanContextProvider