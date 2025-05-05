import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import FinishRide from '../components/FinishRide'

const CaptainRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)

 useGSAP(function(){
      if(finishRidePanel){
        gsap.to(finishRidePanelRef.current,{
          transform: 'translateY(0)'
        })
      }else{
        gsap.to(finishRidePanelRef.current,{
          transform: 'translateY(100%)'
        })
      }
    },[finishRidePanel])

  return (
    <div className='h-screen '>
        

    <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
      <img className='w-16' src="https://brandlogos.net/wp-content/uploads/2021/12/uber-brandlogo.net_.png" alt="" />
      <Link to='/home'> <div className='h-10 w-10 bg-gray flex items-center justify-center rounded-full'> 
        <i className='text-lg font-medium ri-logout-box-r-linee'/>
      </div>
      </Link>
    </div>

  <div className='h-4/5'>
  <img className='h-full w-full object-cover'src='https://www.researchgate.net/publication/323759986/figure/fig3/AS:631576123682823@1527590890164/Map-in-Uber-application-tracking-user-in-a-Yellow-Cab.png'/>
  </div>


    <div onClick={()=>setFinishRidePanel(true)} className='h-1/5 p-6 flex items-center relative justify-between bg-yellow-400'>
        <h5  onClick={()=>{}}
            className='p-1 text-center w-[95%] absolute top-0'><i className=' text-3xl text-gray-500 ri-arrow-down-wide-line'/>
        </h5>
        <h4 className='text-xl font-semibold'>4 KM away</h4>
        <button className='w-full  bg-green-400 p-3 px-10 text-white font-semibold  rounded-lg'>Complete Ride</button>
    </div>

   
    <div  ref={finishRidePanelRef} className='fixed w-full translate-y-full z-10 bottom-0 bg-white px-3 py-10 pt-12'>
      <FinishRide setFinishRidePanel={setFinishRidePanel}/>
    </div>
    </div>
  )
}

export default CaptainRiding
