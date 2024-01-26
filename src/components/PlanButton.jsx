import { useContext } from "react"
import PriceContext from "../context/PriceContext"

function PlanButton({src,alt,text,planPrice,free}){
    const {setPrice}=useContext(PriceContext)

    const handleClick=()=>{
        setPrice({text,planPrice})
    }


    return(
        

        <button onClick={handleClick} className='border-2 w-32 h-32 p-3 rounded-lg border-slate-300 hover:border-blue-600 focus:border-blue-600 text-left'>
            <img className="h-7 w-7" src={src} alt={alt}/>
            <h3 className="mt-5 text-sky-950 font-bold">{text}</h3>
            <h3 className="text-slate-500 text-xs">{planPrice}</h3>            
            <h3 className="text-sky-700 text-xs">{free}</h3>
        </button>
    )
}

export default PlanButton