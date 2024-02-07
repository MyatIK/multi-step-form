


function Steps(props){

   

    return(
        <div className="flex m-4">
            <div className="rounded-full w-9 text-sm h-9 bg-white p-2 pl-2.5 bg-opacity-0 m-3 border-slate-300/70 border-2">{props.num}</div>
            <div className="ml-3 mt-3 text-left">
                <h3 className="text-gray-300 text-sm">{props.step}</h3>
                <h3 className="text-white text-sm">{props.description}</h3>

            </div>

        
        </div>
    )
}

export default Steps
