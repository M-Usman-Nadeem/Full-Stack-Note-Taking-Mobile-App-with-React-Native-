import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,

  KeyboardAvoidingView
} from 'react-native';
import React from 'react';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../utils/ResponsiveDesign';
import {Fonts} from '../constants/Fonts';
import {COLOR} from '../constants/Colors';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>

<KeyboardAvoidingView behavior='height' style={styles.subContainer1}>


        <Text style={styles.loginTxt}>Let’s Login</Text>
        <Text style={styles.notesIdea}>And notes your idea</Text>
        <View style={{gap:pixelSizeVertical(32)}}>

      <View>
      <Text style={styles.InpLabel}>Email Address</Text>
        <TextInput
          style={[styles.border,styles.txtInp]}
          placeholder="Example: johndoe@gmail.com"
          placeholderTextColor={'#C8C5CB'}
        />
      </View>
        <View>
        <Text style={styles.InpLabel}>Password</Text>
        <TextInput
         style={[styles.border,styles.txtInp]}
          placeholder="********"
          placeholderTextColor={COLOR.baseGrey}
        />
        </View>
        </View>
        </KeyboardAvoidingView>
        <Text style={styles.forgotPassTxt}>Forgot Password</Text>

<View style={styles.subContainer2}>
<View >
<TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginBtnTxt}>Login</Text>
          <Image
            source={require('../assets/images/whiteArrow.png')}
            style={styles.arrow}></Image>
        </TouchableOpacity>

        <View style={styles.socialSignUp}>
          <View style={styles.line}></View>
          <Text style={[styles.orText]}>or </Text>
          <View style={styles.line}></View>
        </View>
        <TouchableOpacity style={[styles.loginWithGoogleBtn,styles.border]}>
        <Image
            source={require('../assets/images/google.png')}
            style={styles.googleLogo}></Image>
          <Text style={styles.loginWithGoogleBtnTxt}>Login with Google</Text>
          
        </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
          <Text style={styles.RegisterBtnTxt}>
            Don’t have any account? Register here
          </Text>
        </TouchableOpacity>
</View>
</View>
      
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'flex-end',
 
  paddingHorizontal: pixelSizeHorizontal(16),},
  subContainer1:{flex:2,justifyContent:'flex-end',},
  subContainer2:{flex:1,justifyContent:'space-around'},
  notesIdea:{color: COLOR.darkGrey,fontSize:fontPixel(16),marginBottom:pixelSizeVertical(32)},
  loginTxt: {
    fontSize: fontPixel(32),
    fontFamily: Fonts.Weight700,
    color: COLOR.black,
    marginBottom:pixelSizeVertical(12)
  },
  InpLabel: {fontFamily: Fonts.Weight500, color: COLOR.black,marginBottom:pixelSizeVertical(12)},
  border: {
    borderColor: COLOR.baseGrey,
    borderWidth: 1,
  },
  txtInp:{
    borderRadius:8,
    paddingLeft:pixelSizeHorizontal(16),
    color:COLOR.baseGrey,
    height:54
  },
  forgotPassTxt: {
    fontFamily: Fonts.Weight500,
    color: COLOR.purple,
    borderBottomColor: COLOR.purple,
    borderBottomWidth: 1,
    alignSelf:'flex-start',
    fontSize: fontPixel(16),
    lineHeight: fontPixel(16),
    marginTop:pixelSizeVertical(12),
    marginBottom:pixelSizeVertical(40)
  },
  loginBtn: {
    backgroundColor: COLOR.purple,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: pixelSizeHorizontal(22),
    paddingVertical: pixelSizeVertical(20),
    borderRadius: 100,

  },
  socialSignUp: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: pixelSizeVertical(16),
    marginVertical:pixelSizeVertical(16)
  },
  loginBtnTxt: {
    color: COLOR.white,
    fontSize: fontPixel(16),
    textAlign: 'center',
    flex: 1,
    fontFamily: Fonts.Weight500,
  },
  arrow: {
    width: 16,
    height: 14,
    marginTop:4
  },
  orText: {fontSize: fontPixel(12), color: COLOR.darkGrey, fontFamily: Fonts.Weight500,},
  line: {backgroundColor: COLOR.lightGrey, height: 0.8, flex: 1,marginTop:3},
  googleLogo:{width:24,height:24},
  loginWithGoogleBtn: {
    alignItems: 'center',
    flexDirection:'row',
    gap:pixelSizeHorizontal(16),
    paddingVertical: pixelSizeVertical(15),
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center',
    
  },
            loginWithGoogleBtnTxt:{
              fontFamily: Fonts.Weight500,
              color: COLOR.black,
             fontSize: fontPixel(16),
            },
            RegisterBtnTxt:{
              fontFamily: Fonts.Weight500,
              color: COLOR.purple,
              fontSize: fontPixel(16),
              textAlign:'center',
             paddingVertical:pixelSizeVertical(10)

            }
});
