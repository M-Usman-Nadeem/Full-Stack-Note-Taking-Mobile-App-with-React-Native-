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
import {fontPixel, pixelSizeHorizontal} from '../utils/ResponsiveDesign';
import axios from 'axios';
import UseGoals from '../hooks/UseGoals';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {
  getGoals,
  updateMainTaskCheckBoxAsync,
  updateSubtaskCheckBoxAsync
} from '../store/userGoalsSlice';
const Goals = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.userGoalsSlice);
  const {
    inp,
    setInp,
    showInp,
    type,
    addMainTask,
    showInputFunc,
    addSubTask,
    setIdToAddSubTask,
  } = UseGoals();

  useEffect(() => {
    dispatch(getGoals());
  }, []);

  // function updateSubtaskCheckBox(newValue, mainIndex, subtaskIndex) {
  //   const arr = tasks.map((item, index) => {
  //     if (index === mainIndex) {
  //       let updatedItem = item.subTasks.map((item, index) => {
  //         if (index == subtaskIndex) {
  //           return {...item, checked: newValue};
  //         } else {
  //           return item;
  //         }
  //       });
  //       return {...item, subTasks: updatedItem};
  //     } else {
  //       return item;
  //     }
  //   });
  //   const newArr = arr
  //   console.log(newArr, 'arrrr');
  //   setTasks(newArr);
  // }

  return (
    <ScrollView style={styles.container}>
      {
        <Modal isVisible={state.showLoading}>
          <View>
            <ActivityIndicator size="large" color={COLOR.white} />
          </View>
        </Modal>
      }

      <Text style={styles.heading}>Monthly Needs</Text>

      {state.goals.map((mainItem, mainIndex) => {
        return (
          <View key={mainIndex}>
            <CheckBox
              disabled={false}
              onCheckColor={'#6A3EA1'}
              tintColors={{true: COLOR.purple, false: COLOR.baseGrey}}
              value={mainItem.mainTask.checked}
              onValueChange={checked =>
                dispatch(updateMainTaskCheckBoxAsync({checked, id:mainItem._id}))
              }
            />
            <Text style={styles.taskTxt}>{mainItem?.mainTask.text}</Text>
            {mainItem.subTask.length > 0 && (
              <Text style={styles.heading}>subtask</Text>
            )}
            {mainItem.subTask.map((item, subtaskIndex) => {
              return (
                <View key={subtaskIndex}>
                  <CheckBox
                    disabled={false}
                    onCheckColor={'#6A3EA1'}
                    tintColors={{true: COLOR.purple, false: COLOR.baseGrey}}
                    value={item.checked}
                    onValueChange={checked =>
                      dispatch(
                        updateSubtaskCheckBoxAsync(
                         { checked,
                          mainId:mainItem._id,
                          subtaskIndex}
                          )
                          )
                    }
                  />
                  <Text style={styles.taskTxt}>{item.text}</Text>
                </View>
              );
            })}
            {mainItem?.mainTask && (
              <Pressable
                style={styles.mainTaskBtn}
                onPress={() => setIdToAddSubTask(mainItem._id)}>
                <Image
                  source={require('../assets/images/plusIcon.png')}
                  style={styles.plusIcon}></Image>
                <Text style={[styles.mainTaskTxt, styles.txt]}>
                  Add subtask
                </Text>
              </Pressable>
            )}
          </View>
        );
      })}

      {showInp && (
        <View style={{backgroundColor: 'red'}}>
          <TextInput onChangeText={text => setInp(text)} />
          <Pressable
            onPress={() => (type == 'main' ? addMainTask() : addSubTask())}>
            <Text>Add {type == 'main' ? 'Main Task' : 'Subtask'}</Text>
          </Pressable>
        </View>
      )}
      <Pressable
        style={styles.mainTaskBtn}
        onPress={() => showInputFunc('main')}>
        <Image
          source={require('../assets/images/plusIcon.png')}
          style={styles.plusIcon}></Image>
        <Text style={[styles.mainTaskTxt, styles.txt]}>Add main task</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Goals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    paddingHorizontal: pixelSizeHorizontal(16),
  },
  heading: {
    color: COLOR.black,
    fontFamily: Fonts.Weight700,
    fontSize: fontPixel(32),
  },
  taskTxt: {
    backgroundColor: 'red',
    color: COLOR.black,
  },
  txt: {fontFamily: Fonts.Weight500, fontSize: fontPixel(16)},
  mainTaskTxt: {
    color: COLOR.purple,
    textDecorationLine: 'underline',
  },
  plusIcon: {
    width: 10,
    height: 10,
  },
  mainTaskBtn: {
    gap: pixelSizeHorizontal(13),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
