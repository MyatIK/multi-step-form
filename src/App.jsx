
import './App.css'
import LeftPanel from './components/LeftPanel'
import LeftPanelMobile from './components/LeftPanelMobile'
import Personalinfo from './components/Personalinfo'
import ColorContextProvider from './context/ColorContextProvider'
import ThankYou from './components/ThankYou'
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
        <div className="block flex mt-20 justify-between">
            {count>0 &&<button className='text-sky-950 font-bold' onClick={()=>setCount(count-1)}>Go Back</button>}
            <button className="bg-sky-950 rounded-lg text-white p-3" onClick={()=>setCount(count+1)}>Confirm</button>
            

        </div>
      )
    }else{
      return(
        <div className="block flex mt-20 justify-between">
            {count>0 && <button className='text-sky-950 font-bold' onClick={()=>setCount(count-1)}>Go Back</button>}
            <button className="bg-sky-950 rounded-lg text-white p-3 absolute right-1" onClick={()=>setCount(count+1)}>Next Step</button>
        </div>

      )
      
    }
  }

  return (
  
    <PlanContextProvider>
      <PriceContextProvider>
      <div className='min-h-screen bg-slate-50 grid md:items-center justify-center'>
        <div className="bg-white h-4/5 rounded-xl md:grid grid-cols-2 md:p-5">
          <div>
              <LeftPanel/>
              <LeftPanelMobile/>
          </div>
          <div className='relative'>
            {count ===0 && <Personalinfo/>}
            {count ===1 && <Plans/>}
            {count ===2 && <AddOns/>}
            {count ===3 && <FinishingUp/>}
            {count ===4 && <ThankYou/>}
            {buttonFun()}

          </div>            
        </div>
      </div>
      </PriceContextProvider>
    </PlanContextProvider>

      

      
    
  
    
    
    
  )               
}

export default App
