import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Home = () => {
  useEffect(()=>{
    const  _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('token');
        if (value !== null) {
          // We have data!!
          console.log('token ggett',value);
        }
      } catch (error) {
        // Error retrieving data
      }
    };
    _retrieveData()
  },[])
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})