
import './App.css'
import Form from './components/Form';
import { useState } from 'react';
import PlanContextProvider from './context/PlanContextProvider';
import PriceContextProvider from './context/PriceContextProvider';





function App() {
  const[count,setCount]=useState(0)
  
  const buttonFun=()=>{
    if(count>3){
      return undefined
    }else if(count ===3){
      return(
        <div className="block flex justify-between bg-white mt-20">
            {count>0 &&<button className='text-sky-950 font-bold p-3' onClick={()=>setCount(count-1)}>Go Back</button>}
            <button type='submit' className="bg-sky-950 rounded-lg text-white p-3 absolute right-0" onClick={()=>setCount(count+1)}>Confirm</button>
            

        </div>
      )
    }else{
      return(
        <div className="block flex justify-between bg-white mt-20">
            {count>0 && <button className='text-sky-950 font-bold p-3' onClick={()=>setCount(count-1)}>Go Back</button>}
            <button type="submit" className="bg-sky-950 rounded-lg text-white p-3 absolute right-0" onClick={()=>setCount(count+1)}>Next Step</button>
        </div>

      )
      
    }
  }

  return (
  
    <PlanContextProvider>
      <PriceContextProvider>
      <div className='h-screen bg-slate-50 grid md:items-center md:justify-center relative'>
        <Form/>      
        
      </div>
      </PriceContextProvider>
    </PlanContextProvider>

      

      
    
  
    
    
    
  )               
}

export default App
