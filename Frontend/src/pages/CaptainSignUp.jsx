import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignUp = () => {
  
    const [firstName,setFirstName] = useState('')
    const [lastName,setlastName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [vehicleColor, setVehicleColor] = useState('')
    const [vehicleType, setVehicleType] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')

    const {captain,setCaptain} = useContext(CaptainDataContext)
    
    const navigate = useNavigate()

    const submitHandler=async(e)=>{
      e.preventDefault();
      const captainData={
        fullname:{
          firstname: firstName,
          lastname: lastName
        },
        email,
        password,
        vehicle:{
          color:vehicleColor,
          plate:vehiclePlate,
          vehicleType:vehicleType,
          capacity:vehicleCapacity
        }
      }
      
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData)

      if(response.status === 201){
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token',data.token)
        navigate('/captain-home')
      }

      setFirstName('')
      setlastName('')
      setEmail('')
      setPassword('')
      setVehicleCapacity('')
      setVehicleColor('')
      setVehiclePlate('')
      setVehicleType('')
    }  
  
  return (
    <div className='p-7 flex flex-col h-screen justify-between'>
      <div>
        <img 
        className=' m-10 -ml-5    w-auto h-15'src='https://s23.q4cdn.com/407969754/files/doc_multimedia/2024/5/1008364843/Uber_Logo_Black_RGB.jpg'/>

        <form onSubmit={(e)=>{submitHandler(e)}}>

        <h3 className='text-lg font-medium mb-2'>What's your name?</h3>

        <div className='flex gap-4 mb-5'>

        <input type='text'
          value={firstName}
          onChange={(e)=>{
            setFirstName(e.target.value)
          }}
          required
          className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-sm'
          placeholder='First Name'/>

        <input type='text'
          value={lastName}
          onChange={(e)=>{
            setlastName(e.target.value)
          }}
          required
          className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-sm'
          placeholder='Last Name'/>
        </div>
          <h3 className='text-lg font-medium mb-2'>What's your email?</h3>

          <input type='email'
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
          required
          placeholder='abc@abc.com'/>

          <h3 className='text-lg font-medium mb-2'>What's your password?</h3>

          <input type='password'
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' 
          required 
          placeholder='Password'/>

        <h3 className='text-lg font-medium mb-2'>Provide your Vehicle's Information</h3>

        <div className='flex gap-4 mb-5'>

        <input type='text'
          value={vehicleColor}
          onChange={(e)=>{
            setVehicleColor(e.target.value)
          }}
          required
          className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-sm'
          placeholder='Vehicle Color'/>

        <input type='text'
          value={vehiclePlate}
          onChange={(e)=>{
            setVehiclePlate(e.target.value)
          }}
          required
          className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-sm'
          placeholder='Vehicle Plate'/>
        </div>
        <div className='flex gap-4 mb-5'>

        <input type='number'
          value={vehicleCapacity}
          onChange={(e)=>{
            setVehicleCapacity(e.target.value)
          }}
          required
          className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-sm'
          placeholder='Vehicle Capacity'/>

        <select 
          required
          defaultValue=''
          onChange={(e)=>{
            setVehicleType(e.target.value)
          }}
          className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border  text-lg '>
          <option value="" disabled  >Vehicle Type</option>
          <option value="Motocycle">Motorcycle</option>
          <option value="Car">Car</option>
          <option value="Auto">Auto</option>
        </select>
        </div>

          <button className='bg-[#111] text-white mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-lg'>Sign Up</button>

          <p className='text-center'>Already have an Account?<Link to='/captain-login'className='text-blue-600'> Login Here</Link></p>
        </form>

      </div>

      <div>
        <p className='text-xs leading-tight'> 
          This site is protected by reCAPTCHA and the <span className='underline'>Google 
          Privacy Policy</span> and <span className='underline'>Terms of Service</span> apply.
        </p>
      </div>
    </div>
  )
}

export default CaptainSignUp
