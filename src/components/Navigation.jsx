import { useState } from "react"

function Navigation(){
    const[count,setCount]=useState(0)

    return(

        <div className="block flex mt-20 justify-between">
            <button className='text-sky-950 font-bold' onClick={()=>setCount(count-1)}>Go Back</button>
            <button className="bg-sky-950 rounded-lg text-white p-3" onClick={()=>setCount(count+1)}>Next Step</button>
            

        </div>
    )
}

export default Navigation