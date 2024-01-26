import StepName from "./StepName"

function Personalinfo(){

    return(

        <div className="text-left">
        
            <StepName name='Personal info' description='Please provide your name, email address, and phone number.'/>
            <form>
                <label className="block mb-3">
                    Name
                    <input 
                    type="text"
                    placeholder='eg.Stephen King' className="border rounded-lg p-2 block w-full mt-2"/>
                </label>
                <label className="block mb-3">
                    Email Address
                    <input 
                    type="email"
                    placeholder="e.g. stephanking@lorem.com" className="border rounded-lg p-2 block w-full mt-2"/>
                </label>
                <label className="block mb-3">
                    Phone Number
                    <input
                    type="number"
                    placeholder='e.g. +1 234 567 890' className="border rounded-lg p-2 block w-full mt-2"/>
                </label>
                   
            </form>
           
                

        
            
            
            
        
        </div>
    )
}

export default Personalinfo