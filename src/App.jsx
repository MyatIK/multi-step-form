
import './App.css'
import LeftPanel from './components/LeftPanel'
import LeftPanelMobile from './components/LeftPanelMobile'
import Personalinfo from './components/Personalinfo'
import Thankyou from './components/Thankyou'
import Plans from './components/Plans'
import AddOns from './components/AddOns'
import FinishingUp from './components/FinishingUp'
import { useState } from 'react'
import PlanContextProvider from './context/PlanContextProvider'
import PriceContextProvider from './context/PriceContextProvider'





function App() {
  const[count,setCount]=useState(0)
  
  const buttonFun=()=>{
    if(count>3){
      return undefined
    }else if(count ===3){
      return(
        <div className="block flex justify-between bg-white mt-20">
            {count>0 &&<button className='text-sky-950 font-bold p-3' onClick={()=>setCount(count-1)}>Go Back</button>}
            <button className="bg-sky-950 rounded-lg text-white p-3 absolute right-0" onClick={()=>setCount(count+1)}>Confirm</button>
            

        </div>
      )
    }else{
      return(
        <div className="block flex justify-between bg-white mt-20">
            {count>0 && <button className='text-sky-950 font-bold p-3' onClick={()=>setCount(count-1)}>Go Back</button>}
            <button className="bg-sky-950 rounded-lg text-white p-3 absolute right-0" onClick={()=>setCount(count+1)}>Next Step</button>
        </div>

      )
      
    }
  }

  return (
  
    <PlanContextProvider>
      <PriceContextProvider>
      <div className='h-screen bg-slate-50 grid md:items-center md:justify-center relative'>
        <div className="md:bg-white w-full rounded-xl md:grid grid-cols-3 md:p-5 justify-center h-5/6">
          <div>
              <LeftPanel/>
              <LeftPanelMobile/>
          </div>
          <div className='col-span-2'>
            {count ===0 && <Personalinfo buttonUse={buttonFun()}/>}
            {count ===1 && <Plans buttonUse={buttonFun()}/>}
            {count ===2 && <AddOns buttonUse={buttonFun()}/>}
            {count ===3 && <FinishingUp buttonUse={buttonFun()}/>}
            {count ===4 && <Thankyou/>}
            
            
            
            
              


          </div> 
         

          
                    
        </div>
      
          
        
      </div>
      </PriceContextProvider>
    </PlanContextProvider>

      

      
    
  
    
    
    
  )               
}

export default App
