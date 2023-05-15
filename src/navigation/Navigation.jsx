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
import {View,Text} from 'react-native'
const Stack = createNativeStackNavigator();
import TabNavigation from './TabNavigation.jsx';
import CreateNotes from '../screens/CreateNotes.jsx';
const Navigation = () => {
  return (
    <>
      <NavigationContainer >
         <Stack.Navigator
          initialRouteName="TabNavigation"
          screenOptions={{headerShown: false}}>
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
            component={CreateNotes}
          /> 
          <Stack.Screen
            name="TabNavigation"
            component={TabNavigation}
          />
           {/* <Stack.Screen name="Home" component={Home} /> */}
        </Stack.Navigator> 
      </NavigationContainer>
    </>
  );
};

export default Navigation;
