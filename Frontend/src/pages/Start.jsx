import React from 'react'
import {Link} from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='h-screen flex  justify-between flex-col w-full  bg-fit bg-no-repeat  md:bg-cover  bg-center bg-[url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_520,w_921/v1709190311/assets/f9/453c50-4b40-4527-ac78-5d0714be3866/original/UberTaxi_16.9%281%29.png)] ' >
        <img className=' m-10 ml-0 w-25 h-15'src='https://s23.q4cdn.com/407969754/files/doc_multimedia/2024/5/1008364843/Uber_Logo_Black_RGB.jpg'/>
        <div className='bg-white gap-5 pb-2 flex justify-between flex-col  w-full p-2 pt-1 border-2 border-x-0 border-b-0'>
            <h2 className='font-bold w-full text-4xl text-center '>Get Started with Uber</h2>
            <Link to='/login'className='text-center   text-2xl flex items-center justify-center bg-black text-white p-1 rounded-md'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start

