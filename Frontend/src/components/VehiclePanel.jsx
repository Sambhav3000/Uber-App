import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div >
        <h5  onClick={()=>{props.setVehiclePanel(false)}}
        className='p-3 text-center w-[90%] absolute top-0'><i className=' text-3xl text-gray-500 ri-arrow-down-wide-line'/></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        
        <div onClick={()=>{props.setConfirmRidePanel(true)}} className='flex border-2 mb-2 active:border-black border-gray-100 rounded-xl  w-full items-center justify-between p-5'>
          <img
          className='h-12' 
          src="https://imgs.search.brave.com/S-Q4AZgPnp2lxL6K5mo5t_RsJ842EGxCDzzPF8GEYuU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzgvVWJl/ci1QTkctUGhvdG9z/LnBuZw" alt="" />
          <div className=' ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberCar <span><i className="ri-user-fill"> 4</i></span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable, Compact Rides</p>
          </div>
          <h2 className='text-lg font-semibold '><p>$222.22</p></h2>
        </div>

        <div onClick={()=>{props.setConfirmRidePanel(true)}} className='flex border-2 mb-2 active:border-black border-gray-100 rounded-xl  w-full items-center justify-between p-5'>
          <img
          className='h-12' 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDlRGfB7YisJKCrvxSL8jaTKlB8M-TENW-hw&s" alt="" />
          <div className=' ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberBike <span><i className="ri-user-fill"> 1</i></span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable, Motorcycle Rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$222.22</h2>
        </div>

        <div onClick={()=>{props.setConfirmRidePanel(true)}} className='flex border-2 mb-2 active:border-black border-gray-100 rounded-xl  w-full items-center justify-between p-5'>
          <img
          className='h-12' 
          src="data:image/png;base64,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" alt="" />
          <div className=' ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-fill"> 3</i></span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable, Auto Rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$118.23</h2>
        </div>
      </div>

  )
}

export default VehiclePanel
