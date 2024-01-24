
function AddOnCheckbox(props){
    return(

        <>
        <div className="p-3 flex inline border-2 hover:border-indigo-500 relative rounded-xl">
            <input className="mr-3 accent-indigo-500" type="checkbox"/>    
            <div >
                <h3 className="text-sky-950 font-bold text-sm">{props.heading}</h3>
                <h3 className="text-sm">{props.subtext}</h3>
            </div>
            <h3 className="text-sm p-2 absolute right-0 text-indigo-500">{props.price}</h3>

        </div>
           
        
        </>
    )
}

export default AddOnCheckbox