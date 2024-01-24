import AddOnCheckbox from "./AddOnCheckbox"
import StepName from "./StepName"
import Navigation from "./Navigation"

function AddOns(){

    return(

        <div>
            <StepName name='Pick add-ons' description='Add-ons help enhance your gaming experience'/>
            <div className="space-y-3 mt-5">
                <AddOnCheckbox heading='Online service' subtext='Access to multiplyer games' price='+$1/mo'/>
                <AddOnCheckbox heading='Larger storage' subtext='Extra 1TB of cloud save' price='+$2/mo'/>
                <AddOnCheckbox heading='Customizable Profile' subtext='Custom theme on your profile' price='+$2/mo'/>           
                
            </div>
            <Navigation/>
            
            
           
        
        </div>
    )

}

export default AddOns