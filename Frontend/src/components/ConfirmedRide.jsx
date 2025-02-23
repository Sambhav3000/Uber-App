import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
      <h5  onClick={()=>{props.setConfirmRidePanel(false)}}
        className='p-1 text-center w-[90%] absolute top-0'><i className=' text-3xl text-gray-500 ri-arrow-down-wide-line'/></h5>
        <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

        <div className='flex gap-2 justify-between flex-col items-center'>
          <img className='h-20'
          src="https://imgs.search.brave.com/S-Q4AZgPnp2lxL6K5mo5t_RsJ842EGxCDzzPF8GEYuU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzgvVWJl/ci1QTkctUGhvdG9z/LnBuZw" alt="" />

          <div className='w-full'>
            <div className='flex items-center gap-5 p-3 border-b-2'>
              <i className='text-lg ri-map-pin-2-fill'/>
              <div>
                <h3 className='text-lg font-medium'>562/11-A</h3>
                <p className='text-sm -mt-1 text-gray-600 '>Kankariya Talab, Ahemdabad</p>
              </div>
            </div>
            <div className='flex items-center gap-5 p-3 border-b-2'>
              <i className='text-lg ri-map-pin-2-fill'/>
                <div>
                  <h3 className='text-lg font-medium'>562/11-A</h3>
                  <p className='text-sm -mt-1 text-gray-600 '>Kankariya Talab, Ahemdabad</p>
                </div>
            </div>
            <div className='flex items-center gap-5 p-3'>
              <i className='ri-currency-line'/>
                <div>
                  <h3 className='text-lg font-medium'>$222.22</h3>
                  <p className='text-sm -mt-1 text-gray-600 '>Cash Cash</p>
                </div>
            </div>
          </div>

            <button onClick={()=>{
              props.setVehicleFound(true)
              props.setConfirmRidePanel(false)
            }}className='w-full mt-5 bg-green-400 text-white font-semibold p-2 rounded-lg'>Confirm</button>
        </div>

    </div>
  )
}

export default ConfirmRide
