import sidebar_bg from '/bg-sidebar-desktop.svg'
import Steps from './Steps'

function LeftPanel(props){
    return(

       

       
            <div className='bg-contain bg-no-repeat h-full rounded-xl hidden md:block' style={{backgroundImage: `url(${sidebar_bg})`}}>
                <div className='p-3'>
                    <Steps num='1' step='STEP 1' description='YOUR INFO' />
                    <Steps num='2' step='STEP 2' description='SELECT PLAN' />
                    <Steps num='3' step='STEP 3' description='ADD-ONS' />
                    <Steps num='4' step='STEP 4' description='SUMMARY' />

                </div>
                    

                
            </div>
       
            
            
        
       
    )
}

export default LeftPanel