import { useState } from "react"
import StepName from "./StepName"

function Personalinfo({buttonUse}){
    const[inputs,setInputs]=useState({
        fname: "",
        email: "",
        phone: null,
    })

    const[errors,setErrors]=useState({})
    const[submitting,setSubmitting]=useState(false);

    const validation=(inputs)=>{
        let errors={};
        if(inputs.fname.length<= 1){
            errors.fname = "Please enter a name";
        }
        if(inputs.email<5){
            errors.email = "Email address must have more than 5 characters";
        }
        if(!inputs.phone || 8>=inputs.phone.length>=15){
            errors.phone = "Phone number must be between 8 to 15 characters in length";
        }
        return errors;

    };
    


    const handleSubmit=(e)=>{
        e.preventDefault();
        setErrors(validation(inputs));
        setSubmitting(true);
    };
    

    return(

        <div className="bg-white rounded-xl p-5 z-3 text-left w-4/5 ml-10 absolute top-24 md:top-0 md:relative">
        
            <StepName name='Personal info' description='Please provide your name, email address, and phone number.'/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="block mb-3 font-primary-regular">
                        Name
                        <input 
                        type="text"
                        value={inputs.fname}
                        onChange={(e)=>{setInputs({fname:e.target.value})}}
                        placeholder='eg.Stephen King' className="border rounded-lg p-2 block w-full mt-2"/>
                    </label> 
                   {errors.name? (<p>Please enter a name</p>):null}
                </div>
                
                <label className="block mb-3 font-primary-regular">
                    Email Address
                    <input 
                    type="email"
                    value={inputs.email}
                    onChange={(e)=>{setInputs({email:e.target.value})}}
                    placeholder="e.g. stephanking@lorem.com" className="border rounded-lg p-2 block w-full mt-2"/>
                </label>
                <label className="block mb-3 font-primary-regular">
                    Phone Number
                    <input
                    type="number"
                    value={inputs.phone}
                    onChange={(e)=>{setInputs({phone:e.target.value})}}
                    placeholder='e.g. +1 234 567 890' className="border rounded-lg p-2 block w-full mt-2"/>
                </label>
                
                   
            </form>
            {buttonUse}
            
           
           
           
                

        
            
            
            
        
        </div>
    )
}

export default Personalinfo