import StepName from "./StepName"

function Personalinfo({buttonUse}){

    

    return(

        <div className="bg-white rounded-xl p-5 z-3 text-left w-4/5 ml-10 absolute top-24 md:top-0 md:relative">
        
            <StepName name='Personal info' description='Please provide your name, email address, and phone number.'/>
            <form>
                <label className="block mb-3 font-primaryRegular">
                    Name
                    <input 
                    type="text"
                    placeholder='eg.Stephen King' className="border rounded-lg p-2 block w-full mt-2"/>
                </label>
                <label className="block mb-3 font-primaryRegular">
                    Email Address
                    <input 
                    type="email"
                    placeholder="e.g. stephanking@lorem.com" className="border rounded-lg p-2 block w-full mt-2"/>
                </label>
                <label className="block mb-3 font-primaryRegular">
                    Phone Number
                    <input
                    type="number"
                    placeholder='e.g. +1 234 567 890' className="border rounded-lg p-2 block w-full mt-2"/>
                </label>
                
                   
            </form>
            {buttonUse}
            
           
           
           
                

        
            
            
            
        
        </div>
    )
}

export default Personalinfo