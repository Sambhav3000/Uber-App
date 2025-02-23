import React,{ useContext, useEffect, useState }  from 'react'
import {UserDataContext} from '../context/UserContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const UserProtectedWrapper = ({children}) => {

    const token = localStorage.getItem('token')
    const {user,setUser}= useContext(UserDataContext)
    const [isLoading,setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(()=>{
      if(!token){
        navigate('/login')
    }
    },[token])
    
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then(response=>{
      setUser(response.data.user)
      setIsLoading(false)
    }).catch(err=>{
      console.log(err)
      localStorage.removeItem('token')
      navigate('/login')
    })

  return (
    <>
      {children}
    </>
  )
}

export default UserProtectedWrapper
