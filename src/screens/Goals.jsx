import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {COLOR} from '../constants/Colors';
import {Fonts} from '../constants/Fonts';
import {fontPixel, pixelSizeHorizontal} from '../utils/ResponsiveDesign';
const Goals = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [type, setType] = useState('');

  const [inp, setInp] = useState('');
  const [selectedSubTaskIndex, setSelectedSubTaskIndex] = useState(null);
  const [showInp, setShowInp] = useState(false);

  function addMainTask() {
    setTasks([
      ...tasks,
      {
        mainTask: {text: inp, checked: false},
        subTasks: [],
      },
    ]);

    setShowInp(false);
  }

  function addSubTask() {
    const arr = tasks.map((item, index) => {
      if (index === selectedSubTaskIndex) {
        return {
          ...item,
          subTasks: [
            ...item.subTasks,
            {
              text: inp,
              checked: false,
            },
          ],
        };
      } else {
        return item;
      }
    });
    console.log(arr, 'subbbbbbbbb');
    setTasks(arr);
    setShowInp(false);
  }
  function updateCheckBox(checked, itemIndex) {
    console.log(checked);
    const arr = tasks.map((item, index) => {
      if (index === itemIndex) {
        if (checked) {
          let updatedItem = item.subTasks.map((item, index) => {
            return {...item, oldState: item.checked, checked: true};
          });
          return {
            subTasks: [...updatedItem],
            mainTask: {...item.mainTask, checked},
          };
        } else {
          let updatedItem = item.subTasks.map((item, index) => {
            return {...item, checked: item.oldState};
          });
          return {
            subTasks: [...updatedItem],
            mainTask: {...item.mainTask, checked},
          };
        }
      }
    });
    setTasks(arr);
  }
  function updateSubtaskCheckBox(newValue, mainIndex, subtaskIndex) {
    const arr = tasks.map((item, index) => {
      if (index === mainIndex) {
        let updatedItem = item.subTasks.map((item, index) => {
          if (index == subtaskIndex) {
            return {...item, checked: newValue};
          } else {
            return item;
          }
        });
        return {...item, subTasks: updatedItem};
      } else {
        return item;
      }
    });
    const newArr = arr.map((item, index) => {
      let isAllChecked = item.subTasks.every(
        (item, index) => item.checked === true,
      );
      if (isAllChecked) {
        return {...item, mainTask: {...item.mainTask, checked: true}};
      } else {
        return {...item, mainTask: {...item.mainTask, checked: false}};
      }
    });
    console.log(newArr, 'arrrr');
    setTasks(newArr);
  }
  function showInputFunc(type) {
    setType(type);
    setShowInp(!showInp);
  }
  function addSub(index) {
    setType('subTasks');
    setSelectedSubTaskIndex(index);
    setShowInp(!showInp);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Monthly Needs</Text>

      {tasks.map((item, mainIndex) => {
        return (
          <View key={mainIndex}>
            <CheckBox
              disabled={false}
              onCheckColor={'#6A3EA1'}
              tintColors={{true: COLOR.purple, false: COLOR.baseGrey}}
              value={item.mainTask.checked}
              onValueChange={newValue => updateCheckBox(newValue, mainIndex)}
            />

            <Text style={styles.taskTxt}>{item?.mainTask.text}</Text>
            {item.subTasks.map((item, subtaskIndex) => {
              return (
                <View key={subtaskIndex}>
                  <CheckBox
                    disabled={false}
                    onCheckColor={'#6A3EA1'}
                    tintColors={{true: COLOR.purple, false: COLOR.baseGrey}}
                    value={item.checked}
                    onValueChange={newValue =>
                      updateSubtaskCheckBox(newValue, mainIndex, subtaskIndex)
                    }
                  />
                  <Text style={styles.taskTxt}>{item.text}</Text>
                </View>
              );
            })}
            {item?.mainTask && (
              <Pressable
                style={styles.mainTaskBtn}
                onPress={() => addSub(mainIndex)}>
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
    </View>
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
