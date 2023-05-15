import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import useLocalStorage from '../hooks/UseLocalStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../utils/ResponsiveDesign';
import {Fonts} from '../constants/Fonts';
import {COLOR} from '../constants/Colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const Home = () => {
  const {retrieveToken} = useLocalStorage();
  useEffect(() => {
    const token = retrieveToken();
  }, []);
 
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/homeImg.png')}
        style={styles.img}></Image>
      <View>
        <Text style={styles.startJourneyTxt}>Start Your Journey</Text>
        <Text style={styles.descriptionTxt}>
          {`Every big step start with small step.\nNotes your first idea and start\nyour journey!`}
        </Text>
      </View>
      <Image
        source={require('../assets/images/Direction.png')}
        style={styles.directionImg}></Image>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.primaryBg,
    justifyContent: 'flex-end',
    alignItems:'center',
    paddingBottom: pixelSizeVertical(30),
  },
  img: {
    width: widthPixel(240),
    height: widthPixel(240),
    marginBottom:pixelSizeVertical(10)
  },
  startJourneyTxt: {
    fontSize: fontPixel(24),
    fontFamily: Fonts.Weight700,
    color: COLOR.black,
  },
  descriptionTxt: {
    color: COLOR.darkGrey,
    textAlign: 'center',
    fontSize: fontPixel(14),
    lineHeight: fontPixel(19.6),
    paddingBottom: pixelSizeVertical(21),
    paddingTop: pixelSizeVertical(16),
  },directionImg:{
    width: widthPixel(24),
    marginLeft: 90,
    alignSelf: 'center',
    resizeMode: 'contain',
    height: heightPixel(100),
  }
});
