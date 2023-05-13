import React, { useState } from 'react'
import useLocalStorage from './UseLocalStorage'
import axios from 'axios'
export default function UseLogin() {
  const {setToken}=useLocalStorage()
    const[loginFormData,setLoginFormData]=useState({
      email:'',
      password:''
    })
    const UserLogin=async ()=>{
      console.log(loginFormData)
const {data}=await axios.post( 'http://192.168.50.65:8000/api/login',loginFormData)
setToken(data?.token)
    }
  return (
{
  loginFormData,setLoginFormData,UserLogin
}
  )
}