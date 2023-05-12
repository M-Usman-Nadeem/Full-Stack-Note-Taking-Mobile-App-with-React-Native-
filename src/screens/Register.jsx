import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
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
import useRegister from '../hooks/UseRegister';
const Register = ({navigation}) => {
  const {registerationFormData, setRegisterationFormData,registerUser} = useRegister();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backToLoginTxtContainer}
        onPress={() => navigation.navigate('Login')}>
        <Image
          source={require('../assets/images/Icon.png')}
          style={styles.backArrow}
        />

        <Text style={styles.backToLoginTxt}>Back to Login</Text>
      </TouchableOpacity>
      <ScrollView>
        <View>
          <View>
            <Text style={styles.loginTxt}>Register</Text>
            <Text style={styles.notesIdea}>And start taking notes</Text>
          </View>
        </View>

        <View
          style={{
            gap: pixelSizeVertical(32),
          }}>
          <View>
            <Text style={styles.InpLabel}>Full Name</Text>
            <TextInput
              style={[styles.border, styles.txtInp]}
              placeholder="Example: John Doe"
              placeholderTextColor={COLOR.baseGrey}
              onChangeText={text =>
                setRegisterationFormData({...registerationFormData, name: text})
              }
            />
          </View>
          <View>
            <Text style={styles.InpLabel}>Email Address</Text>
            <TextInput
              style={[styles.border, styles.txtInp]}
              placeholder="Example: johndoe@gmail.com"
              placeholderTextColor={COLOR.baseGrey}
              onChangeText={text =>
                setRegisterationFormData({...registerationFormData, email: text})
              }
            />
          </View>
          <View>
            <Text style={styles.InpLabel}>Password</Text>
            <TextInput
              style={[styles.border, styles.txtInp]}
              placeholder="********"
              placeholderTextColor={COLOR.baseGrey}
              onChangeText={text =>
                setRegisterationFormData({...registerationFormData, password: text})
              }
            />
          </View>
          <View>
            <Text style={styles.InpLabel}>Retype Password</Text>
            <TextInput
              style={[styles.border, styles.txtInp]}
              placeholder="********"
              placeholderTextColor={COLOR.baseGrey}
          
            />
          </View>
        </View>

        <View style={styles.subContainer2}>
          <TouchableOpacity style={styles.loginBtn} onPress={()=>registerUser()}>
            <Text style={styles.loginBtnTxt}>Register</Text>
            <Image
              source={require('../assets/images/whiteArrow.png')}
              style={styles.arrow}></Image>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  backToLoginTxtContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: pixelSizeHorizontal(15),
    marginTop: pixelSizeVertical(25),
  },
  backArrow: {
    width: 6,
    height: 10,
  },
  backToLoginTxt: {
    fontFamily: Fonts.Weight500,
    fontSize: fontPixel(16),
    color: COLOR.purple,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-end',

    paddingHorizontal: pixelSizeHorizontal(16),
  },

  subContainer2: {
    justifyContent: 'center',
    marginTop: pixelSizeVertical(40),
    marginBottom: pixelSizeVertical(24),
  },
  notesIdea: {
    color: COLOR.darkGrey,
    fontSize: fontPixel(16),
    marginBottom: pixelSizeVertical(32),
  },
  loginTxt: {
    fontSize: fontPixel(32),
    fontFamily: Fonts.Weight700,
    color: COLOR.black,
    marginTop: pixelSizeVertical(26),
    marginBottom: pixelSizeVertical(16),
  },
  InpLabel: {
    fontFamily: Fonts.Weight500,
    color: COLOR.black,
    marginBottom: pixelSizeVertical(12),
  },
  border: {
    borderColor: COLOR.baseGrey,
    borderWidth: 1,
  },
  txtInp: {
    borderRadius: 8,
    paddingLeft: pixelSizeHorizontal(16),
    height: 54,
    color: COLOR.baseGrey,
  },
  forgotPassTxt: {
    fontFamily: Fonts.Weight500,
    color: COLOR.purple,
    borderBottomColor: COLOR.purple,
    borderBottomWidth: 1,
    alignSelf: 'flex-start',
    fontSize: fontPixel(16),
    lineHeight: fontPixel(16),
    marginTop: pixelSizeVertical(12),
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
    marginVertical: pixelSizeVertical(16),
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
    marginTop: 4,
  },
  orText: {
    fontSize: fontPixel(12),
    color: COLOR.darkGrey,
    fontFamily: Fonts.Weight500,
  },
  line: {backgroundColor: COLOR.lightGrey, height: 0.8, flex: 1, marginTop: 3},
  googleLogo: {width: 24, height: 24},
  loginWithGoogleBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: pixelSizeHorizontal(16),
    paddingVertical: pixelSizeVertical(15),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom:pixelSizeVertical(32)
  },
  loginWithGoogleBtnTxt: {
    fontFamily: Fonts.Weight500,
    color: COLOR.black,
    fontSize: fontPixel(16),
  },
  RegisterBtnTxt: {
    fontFamily: Fonts.Weight500,
    color: COLOR.purple,
    fontSize: fontPixel(16),
    textAlign: 'center',
  },
});
