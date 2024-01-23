
function Personalinfo(){

    return(

        <div className="p-3 text-left">
            <div className="bg-white rounded-xl">
                <h1 className="font-bold text-xl text-sky-950 ">Personal info</h1>
                <h3 className="text-gray-400 mt-2 mb-5">Please provide your name, email address, and phone number.</h3>
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
                    <div className="flex justify-end mt-20">
                        <button className="bg-sky-950 rounded-lg text-white p-3">Next Step</button>

                    </div>
                </form>

            </div>
            
            
            
        
        </div>
    )
}

export default Personalinfo