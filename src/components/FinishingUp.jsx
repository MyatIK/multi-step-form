import StepName from "./StepName"


function FinishingUp(){
    return(
        <div>
            <StepName name='Finishing up' description='Double-check everything looks OK before confirming.'/>
            <div className="bg-slate-50 p-5 rounded-lg">
                <div className="flex justify-between ">
                    <div>
                        <h3>Arcade(Monthly)</h3>
                        <h3>Change</h3>
                    </div>
                    <h3>$9/mo</h3>
                </div>
                <div className="flex justify-between">
                    <h3>Online sercice</h3>
                    <h3>$1/mo</h3>

                </div>
                <div className="flex justify-between">
                    <h3>Larger storage</h3>
                    <h3>$2/mo</h3>
                </div>
                
            </div>
            <div className="mt-5 flex justify-between p-3">
                <h3>Total(per month)</h3>
                <h3 className="text-indigo-500 font-bold text-lg">+$12/mo</h3>

            </div>
            
   
            
        
        
        </div>
    )
}

export default FinishingUp