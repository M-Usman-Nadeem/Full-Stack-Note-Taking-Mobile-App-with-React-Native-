  import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
    Dimensions,
  } from 'react-native';
  import React, { useState,useEffect,useRef } from 'react';
  import {
    widthPixel,
    pixelSizeHorizontal,
    fontPixel,
    pixelSizeVertical,
  } from '../utils/ResponsiveDesign';
import useLocalStorage from '../hooks/UseLocalStorage';
  import { Fonts } from '../constants/Fonts';

  const {width} = Dimensions.get('screen');
  import {COLOR} from '../constants/Colors';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  const Item = ({item}) => {
   
    return (
      <View style={{flexDirection: 'column', width}}>
        <Image source={item.path} style={styles.illustrationImg}></Image>
        <Text
          style={
            styles.SlideDescription
          }>{`Jot Down anything you want to\nachieve, today or in the future`}</Text>
      </View>
    );
  };

  const Onboarding = ({navigation}) => {
    const {retrieveToken}=useLocalStorage()
    useEffect(()=>{
      //  for testing  purpose
      // AsyncStorage.clear() 
      retrieveToken()
    },[])
    const [activeIndex,setActiveIndex]=useState(0)
    const flatListRef = useRef(null)

    const carouselItems = [
      {id: 1, path: require('../assets/images/Illustration.png')},
      {id: 2, path: require('../assets/images/Illustration.png')},
      {id: 3, path: require('../assets/images/Illustration.png')},
    ];

  const scrollToIndex = (index) => {
    setActiveIndex(index);
    flatListRef.current.scrollToIndex({ index });
  };
    const onScroll = ((event) => {
      const index = event.nativeEvent.contentOffset.x / width;
      const roundIndex = Math.round(index);
      setActiveIndex(roundIndex)  
  });

    return (
      <View style={styles.container}>
       <View style={styles.childContainerOne}>
       <View>
          <FlatList
          ref={flatListRef}
            horizontal
            onScroll={onScroll}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            data={carouselItems}
            renderItem={({item, index}) => <Item item={item} />}></FlatList>
        </View>

        <View
          style={styles.paginationContainer}>
          {Array(3)
            .fill(0)
            .map((item, index) => {
              return (
                <TouchableOpacity onPress={()=>scrollToIndex(index)}
                key={index}
                  style={{
                    borderRadius: 5000,
                    height: 12,
                    width: 12,

                    backgroundColor: activeIndex === index ? COLOR.yellow : COLOR.dotlightColor,
                  }}></TouchableOpacity>
              );
            })}
        </View>
       </View>
       <View style={styles.childContainerTwo}>

        <TouchableOpacity style={styles.startedBtn} onPress={()=>navigation.navigate('Login')}>
          <Text style={styles.getStartedTxt}>Let’s Get Started</Text>
          <Image
            source={require('../assets/images/arrow-right.png')}
            style={styles.arrowRight}></Image>
        </TouchableOpacity>
       </View>

      </View>
    );
  };

  export default Onboarding;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: COLOR.purple,
      flex: 1,
      justifyContent: 'flex-end',
    },
    childContainerOne:{
flex:2.2,
justifyContent:"flex-end",
    },childContainerTwo:{
      flex:1,
      justifyContent:"flex-end",
      paddingBottom: pixelSizeVertical(84),

    },
    illustrationImg: {
      width: widthPixel(280),
      height: widthPixel(280),
      alignSelf: 'center',
      resizeMode: 'contain',
    },
    SlideDescription: {
      fontSize: fontPixel(20),
      color: COLOR.white,
      alignSelf: 'center',
      fontFamily:Fonts.Weight700
    },
    paginationContainer:{
      flexDirection: 'row',
      alignSelf: 'center',
      gap: pixelSizeHorizontal(12),
      marginTop: pixelSizeVertical(40),
    },
    getStartedTxt: {
      color: COLOR.purple,
      fontSize: fontPixel(16),
      textAlign:'center',
      flex:1,
      fontFamily:Fonts.Weight500
      
    },
    arrowRight: {
      width: 16,
      height: 14,
    },
    startedBtn: {
      backgroundColor: COLOR.white,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingHorizontal: pixelSizeHorizontal(22),
      paddingVertical: pixelSizeVertical(20),
      marginHorizontal: pixelSizeHorizontal(16),
      borderRadius: 100,
    },
  });
