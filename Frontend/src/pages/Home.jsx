import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmedRide'
import LookingForDriver from '../components/LookingForDriver'


const Home = () => {

  const [pickUp,setPickUp] = useState('')
  const [destination,setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel,setVehiclePanel] = useState(false)
  const vehiclePanelRef = useRef(null)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const confirmRidePanelRef = useRef(null)
  const [vehicleFound,setVehicleFound] = useState(false)
  const vehicleFoundRef = useRef(null)

  const submitHandler=(e)=>{
    e.preventDefault()
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'75%',
        padding:24
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    } 
    else{
      gsap.to(panelRef.current,{
        height:'0%',
        padding:0
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform: 'translateY(0)'
      })
    }
    else{
      gsap.to(vehiclePanelRef.current,{
        transform: 'translateY(100%)'
      })
      
    }
  },[vehiclePanel])

  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        transform: 'translateY(0)'
      })
    }
    else{
      gsap.to(confirmRidePanelRef.current,{
        transform: 'translateY(100%)'
      })
      
    }
  },[confirmRidePanel])
  
  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform: 'translateY(0)'
      })
    }
    else{
      gsap.to(vehicleFoundRef.current,{
        transform: 'translateY(100%)'
      })
      
    }
  },[vehicleFound])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-auto h-20 absolute left-5 top-5' src='https://brandlogos.net/wp-content/uploads/2021/12/uber-brandlogo.net_.png'/>
      
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover'src='https://www.researchgate.net/publication/323759986/figure/fig3/AS:631576123682823@1527590890164/Map-in-Uber-application-tracking-user-in-a-Yellow-Cab.png'/>
      </div>

      <div className=' h-screen flex flex-col justify-end absolute top-0 w-full'>
        
        <div className='bg-white h-[25%] p-6 relative'>

          <h5 ref={panelCloseRef} 
          onClick={
            ()=>{setPanelOpen(false)}
          } 
          className='absolute opacity-0 right-2 top-6 text-2xl'>
          <i className="ri-arrow-down-s-line"></i>
          </h5>

          <h4 className='text-2xl font-semibold'>Find a Trip</h4>

          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-1 top-[41%] left-12 rounded-full  bg-gray-900"></div>
            <input type="text" 
            value={pickUp}
            onChange={(e)=>{
              setPickUp(e.target.value)
            }}
            onClick={()=>{
              setPanelOpen(true)
            }}
            className='bg-[#eee] px-12 rounded-lg py-2 text-base w-full mt-5'
            placeholder='Add a pickup location'/>

            <input type="text" 
            value={destination}
            onChange={(e)=>{
              setDestination(e.target.value)
            }}
            onClick={()=>{
              setPanelOpen(true)
            }}
            className='bg-[#eee] px-12 rounded-lg py-2 text-base w-full mt-3' 
            placeholder='Enter your destination'/>

            
          </form>
        </div>
        
        <div ref={panelRef} className='h-0  bg-white'>
                {<LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>}
        </div>
      </div>
      
      <div ref={vehiclePanelRef}className='fixed z-10 px-3 py-10 translate-y-full w-full  bg-white bottom-0'>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>

      <div ref={confirmRidePanelRef} className='fixed z-10 px-3 py-10 translate-y-full w-full  bg-white bottom-0'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>
      
      <div ref={vehicleFoundRef} className='fixed z-10 px-3 py-10 translate-y-full w-full  bg-white bottom-0'>
        <LookingForDriver/>
      </div>
</div>
   
  )
}

export default Home

