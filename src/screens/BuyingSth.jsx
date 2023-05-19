import {StyleSheet, Text, View,TextInput,Pressable} from 'react-native';
import React, { useState } from 'react';
import Header from '../components/Header';
import {COLOR} from '../constants/Colors';
import {fontPixel, pixelSizeVertical} from '../utils/ResponsiveDesign';
import {Fonts} from '../constants/Fonts';
import CheckBox from '@react-native-community/checkbox';
import { pixelSizeHorizontal } from '../utils/ResponsiveDesign';
import Modal from 'react-native-modal'
const BuyingSth = () => {
  const [showInp,setShowInp]=useState(false)
  const [setInp,setSetInp]=useState('')
  return (
    <View>
      <Header />
      {
        <Modal isVisible={showInp}>
          <View style={styles.modalInp}>
            <Text style={[styles.modalBtnTxtStyles, styles.modalHeading]}>
              {/* Enter Your {type == 'main' ? 'MainTask' : 'Subtask'} */}
            </Text>
            <TextInput
              style={styles.modalTextInp}
              onChangeText={text => setInp(text)}
            />
            <View style={styles.modalBtnContainer}>
              <Pressable
                style={[styles.modalCancelBtn, styles.modalBtn]}
                onPress={() => setShowInp(false)}>
                <Text
                  style={[styles.modalBtnCancelTxt, styles.modalBtnTxtStyles]}>
                  Cancel
                </Text>
              </Pressable>
              <Pressable
                style={[styles.modalAddBtn, styles.modalBtn]}
                onPress={() => (type == 'main' ? addMainTask() : addSubTask())}>
                <Text style={[styles.modalBtnTxt, styles.modalBtnTxtStyles]}>
                  Add {type == 'main' ? 'Main Task' : 'Subtask'}
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      }
      <View style={styles.Container}>
        <Text style={styles.heading}>🛒 Monthly Needs</Text>
        <View  style={[styles.direction,styles.gap]} >
        <CheckBox
                      disabled={false}
                      onCheckColor={'#6A3EA1'}
                      tintColors={{true: COLOR.purple, false: COLOR.baseGrey}}
                      value={true}
                      // onValueChange={checked =>
                      //   dispatch(
                      //     updateSubtaskCheckBoxAsync({
                      //       checked,
                      //       mainId: mainItem._id,
                      //       subtaskIndex,
                      //     }),
                      //   )
                      // }
                    />
                    <Text style={styles.taskTxt}>fdasadfs</Text>
      </View>
      </View>
    </View>
  );
};

export default BuyingSth;

const styles = StyleSheet.create({
  heading: {
    color: COLOR.black,
    fontSize: fontPixel(32),
    fontFamily: Fonts.Weight700,
    marginBottom:pixelSizeVertical(28)
  },
  Container: {
    padding: 16,
  },
  taskTxt:{
    color:COLOR.black,
    
      },direction:{
        flexDirection:'row',
        alignItems:'center'
      },
      gap:{
        gap:pixelSizeHorizontal(6)
      },
});
