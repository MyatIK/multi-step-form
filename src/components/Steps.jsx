import ColorContext from "../context/ColorContext"
import { useContext } from "react"


function Steps(props){

    const{color}=useContext(ColorContext)

    return(
        <div className="flex m-4">
            <div className="rounded-full w-8 text-sm h-8 bg-white p-2 bg-transparent m-3 border-gray-300 border-2">{props.num}</div>
            <div className="ml-3 text-left">
                <h3 className="text-gray-300 text-sm">{props.step}</h3>
                <h3 className="text-white text-sm">{props.description}</h3>

            </div>

        
        </div>
    )
}

export default Steps
