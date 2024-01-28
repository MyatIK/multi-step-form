import { useContext } from "react"
import PriceContext from "../context/PriceContext"

function AddOnCheckbox({heading,subtext,addOnPrice}){
    const{setAddOn}=useContext(PriceContext)

    const handleClick=()=>{
        setAddOn({heading,addOnPrice})
    }

    return(

        <>
        <div onClick={handleClick} className="p-3 flex inline border-2 hover:border-indigo-500 relative rounded-xl cursor-pointer">
            <input className="mr-3 accent-indigo-500 cursor-pointer" type="checkbox"/>    
            <div >
                <h3 className="text-sky-950 font-bold text-sm">{heading}</h3>
                <h3 className="text-sm">{subtext}</h3>
            </div>
            <h3 className="text-sm p-2 absolute right-0 text-indigo-500">{addOnPrice}</h3>

        </div>
           
        
        </>
    )
}

export default AddOnCheckbox