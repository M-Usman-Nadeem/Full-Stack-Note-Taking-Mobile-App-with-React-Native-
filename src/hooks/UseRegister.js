import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
const UseRegister = () => {
   
const [registerationFormData,setRegisterationFormData]=useState({
name:"",
email:'',
password:''
})
const _storeData = async (token) => {
    try {
      await AsyncStorage.setItem(
        'token',
        token,
      );
    } catch (error) {
        console.log('AsyncStorage error',error)
    }
  };

const  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        // We have data!!
        console.log('token',value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
async function registerUser(){
// console.log(registerationFormData)
const res=await axios.post('http://192.168.50.65:8000/api/register',registerationFormData)
// console.log(res.data)

_storeData(res.data.token)



}
  return (
    {
registerationFormData,setRegisterationFormData,registerUser
    }
  )
}

export default UseRegister

