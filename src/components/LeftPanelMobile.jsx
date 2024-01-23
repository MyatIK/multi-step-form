import sidebar_bg_mobile from '../assets/images/bg-sidebar-mobile.svg'

function LeftPanelMobile(){
    return(
        <div>
            <div className=' bg-no-repeat bg-cover h-36 w-full block md:hidden' style={{backgroundImage: `url(${sidebar_bg_mobile})`}}>
                <div className='flex inline justify-center pt-6'>
                    <div className='rounded-full w-8 h-8 bg-white p-1 bg-transparent m-2 border-gray-300 border-2'>1</div>
                    <div className='rounded-full w-8 h-8 bg-white p-1 bg-transparent m-2 border-gray-300 border-2'>2</div>
                    <div className='rounded-full w-8 h-8 bg-white p-1 bg-transparent m-2 border-gray-300 border-2'>3</div>
                    <div className='rounded-full w-8 h-8 bg-white p-1 bg-transparent m-2 border-gray-300 border-2'>4</div>

                </div>
        
            </div>
            <div className=' h-screen bg-blue-50 md:hidden'>

            </div>
        </div>
        

        
        
    )
}

export default LeftPanelMobile