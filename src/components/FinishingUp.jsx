import StepName from "./StepName"
import { useContext, useState } from "react"
import PriceContext from "../context/PriceContext"

function FinishingUp(){
    const{price,addOn}=useContext(PriceContext);
   

    const items=addOn.map((eachItem)=>{
        return(
            <div className="flex justify-between">
                <h3>{eachItem.heading}</h3>
                <h3>{eachItem.addOnPrice}</h3>
            </div>

        )       
    }
    )
   
    return(
        <div>
            <StepName name='Finishing up' description='Double-check everything looks OK before confirming.'/>
            <div className="bg-slate-50 p-5 rounded-lg">
                <div className="flex justify-between ">
                    <div>
                        <h3>{price.text}</h3>
                        <h3>Change</h3>
                    </div>
                    <h3>{price.planPrice}</h3>
                </div>
                <div className="block">
                    {items}
                    

                </div>
                
            </div>
            <div className="mt-5 flex justify-between p-3">
                <h3>Total(per month)</h3>
                <h3 className="text-indigo-500 font-bold text-lg">+$12/mo</h3>

            </div>
            
   
            
        
        
        </div>
    )
}

export default FinishingUp