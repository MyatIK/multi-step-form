import AddOnCheckbox from "./AddOnCheckbox"
import StepName from "./StepName"
import { useContext } from "react"
import PlanContext from "../context/PlanContext"

function AddOns({buttonUse}){
    const{plan}=useContext(PlanContext);
    

    return(

        <div className="bg-white rounded-xl p-5 z-3 text-left w-4/5 ml-10 absolute top-24 md:top-0 md:relative">
            <StepName name='Pick add-ons' description='Add-ons help enhance your gaming experience'/>

            {plan === false?(
            <div className="space-y-3 mt-5">
                <AddOnCheckbox heading={'Online service'} subtext={'Access to multiplyer games'} addOnPrice={'+$1/mo'}/>
                <AddOnCheckbox heading={'Larger storage'} subtext={'Extra 1TB of cloud save'} addOnPrice={'+$2/mo'}/>
                <AddOnCheckbox heading={'Customizable Profile'} subtext={'Custom theme on your profile'} addOnPrice={'+$2/mo'}/>           
               
            </div>):
            (<div className="space-y-3 mt-5">
                <AddOnCheckbox heading={'Online service'} subtext={'Access to multiplyer games'} addOnPrice={'+$10/yr'}/>
                <AddOnCheckbox heading={'Larger storage'} subtext={'Extra 1TB of cloud save'} addOnPrice={'+$20/yr'}/>
                <AddOnCheckbox heading={'Customizable Profile'} subtext={'Custom theme on your profile'} addOnPrice={'+$20/yr'}/>           
                
            </div>)
            }   
            
            {buttonUse}
           
        
        </div>
    )

}

export default AddOns