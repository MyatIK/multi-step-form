import LeftPanel from "./LeftPanel"
import LeftPanelMobile from "./LeftPanelMobile"
import Personalinfo from "./Personalinfo"

function StepOne(){
    return(
   
    <div className="bg-white rounded-xl md:grid grid-cols-2 md:p-5">
        <div>
            <LeftPanel />
            <LeftPanelMobile/>

        </div>
            
        <Personalinfo />

    </div>  
      
        
    
      
        

   
    
    )
}

export default StepOne
