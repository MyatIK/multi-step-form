import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'
import PlanButton from './PlanButton'
import StepName from './StepName'
import { useContext } from 'react'
import PlanContext from '../context/PlanContext'



function Plans({buttonUse}){

    const{plan,togglePlan}=useContext(PlanContext);
    

    return(

        <div className="bg-white rounded-xl p-5 z-3 text-left w-4/5 ml-10 absolute top-24 md:top-0 md:relative">
            <StepName name='Select your plan' description='You have the option of monthly or yearly billing.'/>
           
            {plan === false? (<div className='space-y-3 md:space-y-0 md:flex md:inline md:space-x-3'>
                <PlanButton src={arcade} alt={'Arcade Plan'} text={'Arcade'} planPrice={'$9/mo'}/>
                <PlanButton src={advanced} alt={'Advanced Plan'} text={'Advanced'} planPrice={'$12/mo'}/>
                <PlanButton src={pro} alt={"Pro Plan"} text={'Pro'} planPrice={'$15/mo'}/>
            
            </div>) : 
            (<div className='space-y-3 md:space-y-0 md:flex md:inline md:space-x-3'>
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
            {buttonUse}
            
      
        
        </div>
    )
}

export default Plans