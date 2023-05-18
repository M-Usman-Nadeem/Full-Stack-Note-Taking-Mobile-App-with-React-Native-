import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {COLOR} from '../constants/Colors';
import {Fonts} from '../constants/Fonts';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../utils/ResponsiveDesign'
import axios from 'axios'
import UseGoals from '../hooks/UseGoals'
import Modal from 'react-native-modal'
import {useDispatch, useSelector} from 'react-redux'
import {
  getGoals,
  updateMainTaskCheckBoxAsync,
  updateSubtaskCheckBoxAsync,
} from '../store/userGoalsSlice';
import Header from '../components/Header';
const Goals = ({navigation}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.userGoalsSlice);
  const {
    inp,
    setInp,
    showInp,
    setShowInp,
    type,
    addMainTask,
    showInputFunc,
    addSubTask,
    setIdToAddSubTask,
  } = UseGoals();

  useEffect(() => {
    dispatch(getGoals());
  }, []);

  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.navigate('CreateNotes')} />
      {
        <Modal isVisible={state.showLoading}>
          <View>
            <ActivityIndicator size="large" color={COLOR.white} />
          </View>
        </Modal>
      }
      {
        <Modal isVisible={showInp}>
          <View style={styles.modalInp}>
            <Text style={[styles.modalBtnTxtStyles, styles.modalHeading]}>
              Enter Your {type == 'main' ? 'MainTask' : 'Subtask'}
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

      <ScrollView style={[styles.subContainer1]}>
        <Text style={styles.heading}>Monthly Needs</Text>

        {state.goals.map((mainItem, mainIndex) => {
          return (
<>
            <View key={mainIndex} style={[styles.direction,styles.gap]} >
              <CheckBox
                disabled={false} 
                onCheckColor={'#6A3EA1'}
                tintColors={{true: COLOR.purple, false: COLOR.baseGrey}}
                value={mainItem.mainTask.checked}
                onValueChange={checked =>
                  dispatch(
                    updateMainTaskCheckBoxAsync({checked, id: mainItem._id}),
                  )
                }
              />
              <Text style={styles.taskTxt}>{mainItem?.mainTask.text}</Text>
            </View>

            <View>

              {mainItem.subTask.map((item, subtaskIndex) => {
                return (
                  <View key={subtaskIndex} style={[styles.subTaskContainer,styles.SubTaskMargin,styles.direction,styles.gap]} >
                    <CheckBox
                      disabled={false}
                      onCheckColor={'#6A3EA1'}
                      tintColors={{true: COLOR.purple, false: COLOR.baseGrey}}
                      value={item.checked}
                      onValueChange={checked =>
                        dispatch(
                          updateSubtaskCheckBoxAsync({
                            checked,
                            mainId: mainItem._id,
                            subtaskIndex,
                          }),
                        )
                      }
                    />
                    <Text style={styles.taskTxt}>{item.text}</Text>
                  </View>
                );
              })}
              {mainItem?.mainTask && (
                <Pressable
                  style={[,styles.SubTaskMargin,styles.direction,styles.gap,{marginBottom:20}]}
                  onPress={() => setIdToAddSubTask(mainItem._id)}>
                  <Image
                    source={require('../assets/images/plusIcon.png')}
                    style={styles.plusIcon}></Image>
                  <Text style={[styles.addTaskBtnTxt]}>
                    Add subtask
                  </Text>
                </Pressable>
              )}
              </View>

</>

          );
        })}

        <Pressable
          style={[styles.addTaskBtn,styles.direction,styles.gap]}
          onPress={() => showInputFunc('main')}>
          <Image
            source={require('../assets/images/plusIcon.png')}
            style={styles.plusIcon}></Image>
          <Text style={[styles.addTaskBtnTxt,]}>Add main task</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Goals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  subContainer1: {
    padding: pixelSizeHorizontal(16),
  },
  heading: {
    color: COLOR.black,
    fontFamily: Fonts.Weight700,
    fontSize: fontPixel(32),
    paddingBottom: pixelSizeVertical(28),
  },
  modalInp: {
    backgroundColor: COLOR.white,
    padding: 15,
    gap: 20,
    borderRadius: 10,
    width: 280,
    alignSelf: 'center',
  },
  modalBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: pixelSizeHorizontal(5),
    paddingVertical: pixelSizeVertical(10),
    borderRadius: 100,
  },
  modalTextInp: {
    borderColor: COLOR.lightGrey,
    borderRadius: 10,
    paddingLeft: 5,
    borderWidth: 1,
  },
  modalBtnContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  modalCancelBtn: {
    backgroundColor: COLOR.white,
    borderWidth: 1,
    borderColor: COLOR.lightGrey,
  },
  modalAddBtn: {backgroundColor: COLOR.purple},
  modalBtnTxt: {color: COLOR.white},
  modalHeading: {color: COLOR.purple},
  modalBtnTxtStyles: {
    fontSize: fontPixel(16),
    textAlign: 'center',
    fontFamily: Fonts.Weight500,
  },
  subTaskContainer:{
marginBottom:5,
marginLeft:34
  },
  modalBtnCancelTxt: {color: COLOR.darkGrey},
  gap:{
    gap:pixelSizeHorizontal(6)
  },
  direction:{
    flexDirection:'row',
    alignItems:'center'
  },
  SubTaskMargin:{
    marginLeft:30
  },
  taskTxt:{
color:COLOR.black,

  },
  // txt: {fontFamily: Fonts.Weight500, fontSize: fontPixel(16)},
  addTaskBtnTxt: {
    color: COLOR.purple,
    textDecorationLine: 'underline',
    
  },

  plusIcon: {
    width: 10,
    height: 10,
  },
  // mainTaskBtn: {
  //   gap: pixelSizeHorizontal(13),
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
});
