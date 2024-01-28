import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'
import PlanButton from './PlanButton'
import StepName from './StepName'
import { useState } from 'react'
import { useContext } from 'react'
import PlanContext from '../context/PlanContext'



function Plans(){

    const{plan,togglePlan}=useContext(PlanContext);
    

    return(

        <div className='p-3 bg-white round-xl'>
            <StepName name='Select your plan' description='You have the option of monthly or yearly billing.'/>
           
            {plan === false? (<div className='flex inline space-x-3'>
                <PlanButton src={arcade} alt={'Arcade Plan'} text={'Arcade'} planPrice={'$9/mo'}/>
                <PlanButton src={advanced} alt={'Advanced Plan'} text={'Advanced'} planPrice={'$12/mo'}/>
                <PlanButton src={pro} alt={"Pro Plan"} text={'Pro'} planPrice={'$15/mo'}/>
            
            </div>) : 
            (<div className='flex inline space-x-3'>
            <PlanButton src={arcade} alt={'Arcade Plan'} text={'Arcade'} planPrice={'$90/yr'} free={'2 months free'}/>
            <PlanButton src={advanced} alt={'Advanced Plan'} text={'Advanced'}  planPrice={'$120/yr'} free={'2 months free'}/>
            <PlanButton src={pro} alt={"Pro Plan"} text='Pro' planPrice={'$150/yr'} free={'2 months free'}/>
        
        </div>)

            }

            <div className='bg-slate-50 flex inline justify-center mt-10 p-3 space-x-3'>
                <h3 className='font-bold'>Monthly</h3>
                <label className='relative inline-flex items-center cursor-pointer'>
                    <input type='checkbox' checked={plan} onChange={togglePlan} value="" className='sr-only peer'/>
                    <div className="w-11 h-6 bg-blue-600 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600">

                    </div>
                    
                </label>
                <h3 className='font-bold'>Yearly</h3>

            </div>
            
      
        
        </div>
    )
}

export default Plans