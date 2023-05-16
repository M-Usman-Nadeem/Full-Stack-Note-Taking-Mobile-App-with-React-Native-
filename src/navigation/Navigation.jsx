import React from 'react';
import Onboarding from '../screens/OnBoarding.jsx';
import Login from '../screens/Login.jsx';
import Register from '../screens/Register.jsx';
import ForgotPassword from '../screens/ForgotPassword.jsx';
import CreateNewPassword from '../screens/CreateNewPassword.jsx';
import Home from '../screens/Home.jsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import BuyingSth from '../screens/BuyingSth.jsx';
const Stack = createNativeStackNavigator();
import TabNavigation from './TabNavigation.jsx';
import CreateNotes from '../screens/CreateNotes.jsx';
import InterestingIdeas from '../screens/InterestingIdeas.jsx';
import Goals from '../screens/Goals.jsx'
import Guidance from '../screens/Guidance.jsx'
import RoutineTasks from '../screens/RoutineTasks.jsx';
const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{headerShown: false}} >
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen
            name="CreateNewPassword"
            component={CreateNewPassword}
          />
          <Stack.Screen
            name="CreateNotes"
            screenOptions={{headerShown: false}}
            component={CreateNotes}
          />
          <Stack.Screen
            name="InterestingIdeas"
           
            component={InterestingIdeas}
          />
          <Stack.Screen
            name="BuyingSth"
           
            component={BuyingSth}
          />
          <Stack.Screen
            name="Goals"
           
            component={Goals}
          />
          <Stack.Screen
            name="Guidance"
           
            component={Guidance}
          />
          <Stack.Screen
            name="RoutineTasks"
           
            component={RoutineTasks}
          />
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
