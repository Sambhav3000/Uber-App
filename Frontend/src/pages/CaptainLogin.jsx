import React,{useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'


const CaptainLogin = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate()
    const {captain,setCaptain}=useContext(CaptainDataContext)
  
    const submitHandler=async(e)=>{
      e.preventDefault();
      const captainData={
        email: email,
        password: password
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captainData)
      if(response.status === 200){
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token',data.token)
        navigate('/captain-home')

      }
      
      setEmail('')
      setPassword('')
    }

  return (
    <div className='p-7 flex flex-col h-screen justify-between'>
      <div>
        <img 
        className=' m-10 -ml-5    w-auto h-15'src='https://s23.q4cdn.com/407969754/files/doc_multimedia/2024/5/1008364843/Uber_Logo_Black_RGB.jpg'/>

        <form onSubmit={(e)=>{submitHandler(e)}}>

          <h3 className='text-lg font-medium mb-2'>What's your email?</h3>

          <input type='email'
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'required placeholder='abc@abc.com'/>

          <h3 className='text-lg font-medium mb-2'>What's your password?</h3>

          <input type='password'
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required placeholder='Password'/>

          <button className='bg-[#111] text-white mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>

          <p className='text-center'>Want to Join the Fleet?<Link to='/captain-signup'className='text-blue-600'> Register as a Captain</Link></p>
        </form>

      </div>

      <div>
        <Link 
        to='/login'
        className='bg-[#6dde4b] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin
