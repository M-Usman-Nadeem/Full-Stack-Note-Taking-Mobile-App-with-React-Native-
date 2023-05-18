import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React from 'react'
import {fontPixel, pixelSizeHorizontal,pixelSizeVertical} from '../utils/ResponsiveDesign';
import {COLOR}  from '../constants/Colors.js';
import { Fonts } from '../constants/Fonts';
const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
    <Pressable
      onPress={props?.onPress}
      style={styles.backBtn}>
      <Image
        source={require('../assets/images/Icon.png')}
        style={styles.backArrow}></Image>
      <Text style={styles.backTxt}>Back</Text>
    </Pressable>
    <Text style={styles.headerNotes}>{props?.txt}</Text>
  </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        paddingHorizontal: pixelSizeHorizontal(23),
    
        paddingVertical: pixelSizeVertical(16),
        borderBottomColor: COLOR.lightGrey,
        borderBottomWidth: 1,
      },
      backTxt: {
        color: COLOR.purple,
        fontSize: fontPixel(16),
        fontFamily: Fonts.Weight500,
      },
      backBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: pixelSizeHorizontal(15),
      },
      backArrow: {
        width: 6,
        height: 10,
      },  headerNotes: {
        flex: 0.8,
        textAlign: 'center',
    
        color: COLOR.black,
    
        fontSize: fontPixel(16),
        fontFamily: Fonts.Weight500,
      },
})