

function StepName(props){
    return(

        <>
        <h1 className="font-primary-bold text-xl text-sky-950 ">{props.name}</h1>
        <h3  className="text-gray-400 mt-2 mb-5 font-primary-regular">{props.description}</h3>
        
        </>
    )
}

export default StepName