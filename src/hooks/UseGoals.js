import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addMainTaskAsync,addSubTaskAsync,updateMainTaskCheckBoxAsync} from '../store/userGoalsSlice';
import { setMainTaskIdToAddSubtask } from '../store/userGoalsSlice';
const UseGoals = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.userGoalsSlice);

  const [inp, setInp] = useState('');
  const [type, setType] = useState('');
  const [showInp, setShowInp] = useState(false);

  function addMainTask() {
    console.log(inp);
    if (inp != '') {
      dispatch(addMainTaskAsync(inp));
      setInp('');
    } else {
      return Alert.alert('Field is empty');
    }

    setShowInp(false);
  }

  function showInputFunc(type) {
    setType(type);
    setShowInp(!showInp);
  }
  function addSubTask() {
    if (inp != '') {
     
      dispatch(addSubTaskAsync(inp));
      setInp('');
    } else {
      return Alert.alert('Field is empty');
    }
   
    setShowInp(false);
  }
  function setIdToAddSubTask(id) {
    setType('subTasks');
    dispatch(setMainTaskIdToAddSubtask(id));
    setShowInp(!showInp);
  }

  return {
    inp,
    setInp,
    showInp,
    setShowInp,
    addMainTask,
    type,
    setType,
    state,
    showInputFunc,
    addSubTask,
    setIdToAddSubTask,
  };
};

export default UseGoals;
