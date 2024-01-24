import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'
import PlanButton from './PlanButton'
import StepName from './StepName'
import Navigation from './Navigation'

function Plans(){
    return(

        <div className='p-3 bg-white round-xl'>
            <StepName name='Select your plan' description='You have the option of monthly or yearly billing.'/>
           
            
            <div className='flex inline justify-between'>
                <PlanButton src={arcade} alt='Arcade Plan' text='Arcade' price_month='$9/mo'/>
                <PlanButton src={advanced} alt='Advanced Plan' text='Advanced' price_month='$12/mo'/>
                <PlanButton src={pro} alt="Pro Plan" text='Pro' price_month='$15/mo'/>
            
            </div>

            <div className='bg-slate-50 flex inline justify-center'>
                <h3 className='font-bold'>Monthly</h3>
                <h3 className='font-bold'>Yearly</h3>

            </div>
            <Navigation/>
      
        
        </div>
    )
}

export default Plans