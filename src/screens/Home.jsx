import { StyleSheet, Text, View ,Pressable,Image} from 'react-native'
import React,{useEffect} from 'react'
import axios from 'axios';
import useLocalStorage from '../hooks/UseLocalStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fontPixel, pixelSizeHorizontal, widthPixel } from '../utils/ResponsiveDesign';
import { Fonts } from '../constants/Fonts';
import { COLOR } from '../constants/Colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const Home = () => {
  const {retrieveToken}=useLocalStorage()
  useEffect(()=>{
  
   const token= retrieveToken()
   
  },[])
  async function verifyEmail(){
    const {data}=await axios.get( 'http://192.168.50.65:8000/api/verifyEmail')
    
  }
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/homeImg.png')} style={styles.img}></Image>
      <View>
        <Text style={styles.startJourneyTxt}>
        Start Your Journey
        </Text>
        <Text style={styles.descriptionTxt}>
        {`Every big step start with small step.\nNotes your first idea and start\nyour journey!`}
        </Text>
      </View>
   

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,backgroundColor:COLOR.primaryBg
  },
  img:{
    width:widthPixel(240),
    height:widthPixel(240),
    alignSelf:'center'
  },startJourneyTxt:{
fontSize:fontPixel(24),
fontFamily:Fonts.Weight700,
color:COLOR.black
  },descriptionTxt:{
    color:COLOR.darkGrey,
    textAlign:'center',
    fontSize:fontPixel(14),
    lineHeight:fontPixel(19.6)
  }
})