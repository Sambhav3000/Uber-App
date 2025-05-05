import React from 'react'
import {Link} from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home'> <div className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full'> 
            <i className='text-lg font-medium ri-home-5-line'/>
        </div>
        </Link>

      <div className='h-1/2'>
      <img className='h-full w-full object-cover'src='https://www.researchgate.net/publication/323759986/figure/fig3/AS:631576123682823@1527590890164/Map-in-Uber-application-tracking-user-in-a-Yellow-Cab.png'/>
      </div>

      <div className='h-1/2 p-4'>
      
      <div className='flex items-center justify-between'>
        <img className='h-12'
        src="https://imgs.search.brave.com/S-Q4AZgPnp2lxL6K5mo5t_RsJ842EGxCDzzPF8GEYuU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzgvVWJl/ci1QTkctUGhvdG9z/LnBuZw" alt="" />
        <div className='text-right'>
          <h2 className='text-lg font-medium'>Ram Bahadur</h2>
          <h4 className='text-xl -mt-1 -mb-1 font-semibold'>Lu 1 Kha</h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki</p>
        </div>
      </div>
        <div className='flex gap-2 justify-between flex-col items-center'>


          <div className='w-full'>
            
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
        </div>
        <button className='w-full mt-5 bg-green-400 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
      </div>
    </div>
  )
}

export default Riding
