import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
const useLocalStorage = () => {
const navigation=useNavigation()
    const  retrieveToken = async () => {
        try {
          const value = await AsyncStorage.getItem('token');
          if (value !== null) {
            // We have data!!
            console.log('token ggett',value);
            navigation.navigate('Home')
          }
        } catch (error) {
          // Error retrieving data
        }
      };
      const setToken = async (token) => {
        try {
          if(token){
    
            await AsyncStorage.setItem(
              'token',
              token,
              );
              console.log(token,'token stored')
             navigation.navigate('Home') 
            }
        } catch (error) {
            console.log('AsyncStorage error',error)
        }
      };
    
  return (
    {
      retrieveToken,setToken
    }
  )
}

export default useLocalStorage

