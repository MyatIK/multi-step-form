import sidebar_bg_mobile from '../assets/images/bg-sidebar-mobile.svg'

function LeftPanelMobile(){
    return(
        <div>
            <div className='relative bg-no-repeat bg-cover h-36 w-full block md:hidden' style={{backgroundImage: `url(${sidebar_bg_mobile})`}}>
                <div className='flex inline justify-center pt-6'>
                    <div className='rounded-full w-8 h-8 bg-white pl-2 p-1 bg-opacity-0 m-2 border-slate-200/70 border-2'>1</div>
                    <div className='rounded-full w-8 h-8 bg-white pl-2 p-1 bg-opacity-0 m-2 border-slate-200/70 border-2'>2</div>
                    <div className='rounded-full w-8 h-8 bg-white pl-2 p-1 bg-opacity-0 m-2 border-slate-200/70 border-2'>3</div>
                    <div className='rounded-full w-8 h-8 bg-white pl-2 p-1 bg-opacity-0 m-2 border-slate-200/70 border-2'>4</div>

                </div>
        
            </div>
            
        </div>
        

        
        
    )
}

export default LeftPanelMobile