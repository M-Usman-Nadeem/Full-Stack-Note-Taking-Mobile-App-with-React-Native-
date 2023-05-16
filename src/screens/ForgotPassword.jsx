import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../utils/ResponsiveDesign';
import {Fonts} from '../constants/Fonts';
import {COLOR} from '../constants/Colors';
import axios from 'axios';
import Modal from 'react-native-modal';
const ForgotPassword = ({navigation}) => {
  const [otp, setOtp] = useState(null);
  const [userWritternOtp, setUserWritternOtp] = useState('');
  const [showModal, SetShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const sendCode = async () => {
    const {data} = await axios.get(
      `http://192.168.50.65:8000/api/verifyEmail/${email}`,
    );
    SetShowModal(true);
    setOtp(data.Otp);
    console.log(data);
  };
  function checkOtp() {
    if (userWritternOtp == otp) {
      SetShowModal(false);

      navigation.navigate('CreateNewPassword');
    } else {
      Alert.alert('wrong Otp');
    }
  }
  return (
    <View style={styles.container}>
      <Modal isVisible={showModal}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter Otp</Text>
            <TextInput
              style={[styles.otpInp, styles.border]}
              onChangeText={text => setUserWritternOtp(text)}
              value={userWritternOtp}></TextInput>

            <TouchableOpacity
              style={styles.modalBtn}
              onPress={() => checkOtp()}>
              <Text style={styles.loginBtnTxt}>Enter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.backToLoginTxtContainer} onPress={()=>navigation.navigate('Login')}>
        <Image
          source={require('../assets/images/Icon.png')}
          style={styles.backArrow}
        />

        <Text style={styles.backToLoginTxt}>Back to Login</Text>
      </TouchableOpacity>

      <View style={styles.childContainer1}>
        <Text style={styles.loginTxt}>Forgot Password</Text>
        <Text
          style={
            styles.notesIdea
          }>{`Insert your email address to receive a code\nfor creating a new password`}</Text>

        <Text style={styles.InpLabel}>Email Address</Text>
        <TextInput
          onChangeText={text => setEmail(text)}
          value={email}
          style={[styles.border, styles.txtInp]}
          placeholder="Example: johndoe@gmail.com"
          placeholderTextColor={COLOR.baseGrey}
        />

        <View style={styles.subContainer2}>
          <TouchableOpacity style={styles.loginBtn} onPress={() => sendCode()}>
            <Text style={styles.loginBtnTxt}>Send Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  backToLoginTxtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixelSizeHorizontal(15),
    marginTop: pixelSizeVertical(25),
  },
  childContainer1: {
    flex: 1,
    justifyContent: 'flex-end',
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

    paddingHorizontal: pixelSizeHorizontal(16),
  },

  subContainer2: {
    justifyContent: 'center',
    marginTop: pixelSizeVertical(64),
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

  loginBtn: {
    backgroundColor: COLOR.purple,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: pixelSizeHorizontal(22),
    paddingVertical: pixelSizeVertical(20),
    borderRadius: 100,
  },

  loginBtnTxt: {
    color: COLOR.white,
    fontSize: fontPixel(16),
    textAlign: 'center',
    flex: 1,
    fontFamily: Fonts.Weight500,
  },

  RegisterBtnTxt: {
    fontFamily: Fonts.Weight500,
    color: COLOR.purple,
    fontSize: fontPixel(16),
    textAlign: 'center',
  },
  modalText: {
    color: COLOR.black,
    alignSelf: 'center',
  },
  modalView: {
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.background,
    padding: 20,
    width: pixelSizeHorizontal(300),
    borderRadius: 5,
  },
  otpInp: {
    color: COLOR.black,
    borderRadius: 5,

    width: '80%',
  },
  border: {
    borderColor: COLOR.baseGrey,
    borderWidth: 1,
  },
  modalBtn: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100,
    alignSelf: 'center',
    height: 40,
    backgroundColor: COLOR.purple,
  },
});
