import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CaptainHome = () => {
    const [ridePopupPanel, setRidePopupPanel] = useState(true);
    const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
    const ridePopupPanelRef = useRef(null) 
    const confirmRidePopupPanelRef = useRef(null)

    useGSAP(function(){
      if(ridePopupPanel){
        gsap.to(ridePopupPanelRef.current,{
          transform: 'translateY(0)'
        })
      }else{
        gsap.to(ridePopupPanelRef.current,{
          transform: 'translateY(100%)'
        })
      }
    },[ridePopupPanel])
    
    useGSAP(function(){
      if(confirmRidePopupPanel){
        gsap.to(confirmRidePopupPanelRef.current,{
          transform: 'translateY(0)'
        })
      }else{
        gsap.to(confirmRidePopupPanelRef.current,{
          transform: 'translateY(100%)'
        })
      }
    },[confirmRidePopupPanel])




  return (
    <div className='h-screen'>
    <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
      <img className='w-16' src="https://brandlogos.net/wp-content/uploads/2021/12/uber-brandlogo.net_.png" alt="" />
      <Link to='/home'> <div className='h-10 w-10 bg-white flex items-center justify-center rounded-full'> 
        <i className='text-lg font-medium ri-logout-box-r-linee'/>
      </div>
      </Link>
    </div>

  <div className='h-3/5'>
  <img className='h-full w-full object-cover'src='https://www.researchgate.net/publication/323759986/figure/fig3/AS:631576123682823@1527590890164/Map-in-Uber-application-tracking-user-in-a-Yellow-Cab.png'/>
  </div>

  <div className='h-2/5 p-6'>
    <CaptainDetails/>
  </div>

    <div  ref={ridePopupPanelRef} className='fixed w-full translate-y-full z-10 bottom-0 bg-white px-3 py-10 pt-12'>
      <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
    </div>
    <div  ref={confirmRidePopupPanelRef} className='fixed w-full h-screen translate-y-full z-10 bottom-0  bg-white px-3 py-10 pt-12'>
      <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}/>
    </div>

    </div>
  )
}

export default CaptainHome
