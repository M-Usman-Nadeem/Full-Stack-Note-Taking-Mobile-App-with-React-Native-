import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {setToken} from './UseLocalStorage';
const UseRegister = () => {
  const navigation = useNavigation();
  const [registerationFormData, setRegisterationFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  async function registerUser() {
    const res = await axios.post(
      'http://192.168.50.65:8000/api/register',
      registerationFormData,
    );
    console.log(res.data);
    navigation.navigate('Home')
    setToken(res.data.token);
  }
  return {
    registerationFormData,
    setRegisterationFormData,
    registerUser,
  };
};

export default UseRegister;
