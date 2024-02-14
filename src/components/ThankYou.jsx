import Thanks from '../assets/images/icon-thank-you.svg';

function Thankyou(){

    return(

        <div className="flex items-center h-full bg-white rounded-xl p-5 z-3 text-left ml-10 absolute top-24 md:top-0 md:relative">
            <div className='text-center'>
                <div className='flex justify-center'>
                    <img src={Thanks} alt='check mark to show you have completed the steps' className='w-14 h-14'/>

                </div>
                
                <h1  className="font-bold text-xl text-sky-950  mt-5 mb-5">Thank you!</h1>
                <p className="text-slate-400 w-full md:w-80 text-sm">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
            </div> 

            
            
        </div>
    )
}

export default Thankyou