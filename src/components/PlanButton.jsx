

function PlanButton(props){
    return(

        <button className='border-2 p-4 rounded-lg border-slate-300 hover:border-blue-600 focus:border-blue-600 text-left'>
            <img className="h-7 w-7" src={props.src} alt={props.alt}/>
            <h3 className="mt-5 text-sky-950 font-bold">{props.text}</h3>
            <h3 className="text-slate-500 text-sm">{props.price_month}</h3>
        </button>
    )
}

export default PlanButton