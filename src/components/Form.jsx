import LeftPanel from "./LeftPanel"
import LeftPanelMobile from "./LeftPanelMobile"
import Personalinfo from "./Personalinfo";
import Plans from "./Plans";
import AddOns from "./AddOns";
import Thankyou from "./Thankyou";
import { useState } from "react";

function Form(){
    const[page,setPage]=useState(0);

    const displayPage=()=>{
        if(page === 0){
            return <Personalinfo/>
        }if(page ===1){
            return <Plans/>
        }else if(page === 2){
            return <AddOns/>
        }else{
            return <Thankyou/>
        }

    }
    return(

        <div className="md:bg-white w-full rounded-xl md:grid grid-cols-3 md:p-5 justify-center h-screen ">
          <div>
              <LeftPanel/>
              <LeftPanelMobile/>
          </div>
          <div className=" col-span-2">
            <div >
                {displayPage()}

            </div>

            <div className="block flex justify-between bg-white relative mt-20">
                <button className='text-sky-950 font-bold p-3' onClick={()=>{setPage((currPage)=> currPage - 1)}}>Go Back</button>
                <button className="bg-sky-950 rounded-lg text-white p-3 absolute right-0"
                
                onClick={()=>{setPage((currPage)=> currPage + 1)}}>Next Step</button>
            </div>

          </div>

                   
                    
        </div>
      
          
        
     
    )
}

export default Form