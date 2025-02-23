import React,{useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'

const UserSignUp = () => {
  
  const [firstName,setFirstName] = useState('')
  const [lastName,setlastName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')



  const navigate = useNavigate()
  const {user, setUser} = useContext(UserDataContext)

  const submitHandler= async(e)=>{
    e.preventDefault();
    const newUser={
      fullname:{
        firstname: firstName,
        lastname: lastName
      },
      email,
      password
    }
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)

    if(response.status === 201){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/home')
    }

    setFirstName('')
    setlastName('')
    setEmail('')
    setPassword('')
  }  

  return (
    <div className='p-7 flex flex-col h-screen justify-between'>
      <div>
        <img 
        className=' m-10 -ml-5    w-auto h-20'src='https://brandlogos.net/wp-content/uploads/2021/12/uber-brandlogo.net_.png'/>

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

          <button className='bg-[#111] text-white mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-lg'>Sign Up</button>

          <p className='text-center'>Already have an Account?<Link to='/login'className='text-blue-600'> Login Here</Link></p>
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

export default UserSignUp
