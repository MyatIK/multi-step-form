
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



function App() {
  
  

  return (
  
   
      <div className='min-h-screen bg-slate-50 grid md:items-center justify-center'>
        <div className="bg-white rounded-xl md:grid grid-cols-2 md:p-5">
          <div>
              <LeftPanel/>
              <LeftPanelMobile/>
          </div>
          <Personalinfo/>
      
          
              
        </div>

      </div>
    

      

      
    
  
    
    
    
  )               
}

export default App
