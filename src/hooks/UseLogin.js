import React, { useState } from 'react'
import {setToken} from './UseLocalStorage'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
export default function UseLogin() {
  const navigation=useNavigation()
    const[loginFormData,setLoginFormData]=useState({
      email:'',
      password:''
    })
    const UserLogin=async ()=>{
const {data}=await axios.post( 'http://192.168.50.65:8000/api/login',loginFormData)
console.log(data)
setToken(data?.token)
navigation.navigate('TabNavigation',{screen:'Home'})
    }
  return (
{
  loginFormData,setLoginFormData,UserLogin
}
  )
}