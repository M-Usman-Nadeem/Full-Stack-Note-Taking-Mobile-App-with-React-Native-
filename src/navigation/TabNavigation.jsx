import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {Children, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../utils/ResponsiveDesign';
import {useRoute} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/native';
const Tab = createBottomTabNavigator();
import Home from '../screens/Home';
import Finished from '../screens/Finished';
import { useNavigation } from '@react-navigation/native';
import Setting from '../screens/Setting';
import Search from '../screens/Search';
import {COLOR} from '../constants/Colors';
import CreateNotes from '../screens/CreateNotes';
const TabNavigation = () => {
  const [state, setState] = useState('');
  const route = useRoute();
  function EmptyScreen() {
    return <View />;
  }
  const AddButton = ({children}) => {
    const navigation=useNavigation()
    return (
        <View style={{padding:8,backgroundColor:COLOR.primaryBg,  justifyContent: 'center',
        alignItems: 'center',height:widthPixel(80),    borderRadius: 100,  top: -pixelSizeVertical(60),}}>


      <Pressable onPress={()=>navigation.navigate('CreateNotes')}
        style={{
            padding:8,

          zIndex: 999,
      
          justifyContent: 'center',
          alignItems: 'center',
          width: widthPixel(64),
          height: widthPixel(64),
          backgroundColor: COLOR.purple,
          borderRadius: 100,
          shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,

elevation: 2,
        }}>
        <View>{children}</View>
      </Pressable>
      </View>

    );
  };
  return (
    <Tab.Navigator
 
      initialRouteName="Home"
      screenOptions={{
        headerShown:false,
        tabBarStyle: {
          paddingTop: pixelSizeVertical(20),
          height: pixelSizeVertical(84),

          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        style={styles.BottomTabBarItem}
        component={Home}
        options={{
          headerShown: false,

          tabBarIcon: ({color, size, focused}) => {
            return (
              <>
                <Image
                  style={[
                    styles.icon,
                    {tintColor: focused ? COLOR.purple : COLOR.darkGrey},
                  ]}
                  source={require('../assets/images/homeIcon.png')}
                />
              </>
            );
          },
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={[
                  styles.label,
                  {color: focused ? COLOR.purple : COLOR.darkGrey},
                ]}>
                Home
              </Text>
            );
          },
        }}></Tab.Screen>

      <Tab.Screen
        name="Finished"
        component={Finished}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Image
                style={[
                  styles.icon,
                  {
                    marginRight: -pixelSizeHorizontal(0),
                    tintColor: focused ? COLOR.purple : COLOR.darkGrey,
                  },
                ]}
                source={require('../assets/images/finishedIcon.png')}
              />
            );
          },
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={[
                  styles.label,
                  {
                    marginRight: -pixelSizeHorizontal(0),
                    color: focused ? COLOR.purple : COLOR.darkGrey,
                  },
                ]}>
                Finished
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
      
        name="EmptyScreen"
        component={EmptyScreen}
        options={{
          tabBarIcon: () => {
            return (
                
              <Image
                source={require('../assets/images/plus.png')}
                style={{width: widthPixel(21), height: widthPixel(21), resizeMode: 'contain'}}
              />
            );
          },
          tabBarLabel: () => null,
          tabBarButton: props => <AddButton  {...props} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Image
                style={[
                  styles.icon,
                  {
                    marginRight: -pixelSizeHorizontal(0),
                    tintColor: focused ? COLOR.purple : COLOR.darkGrey,
                  },
                ]}
                source={require('../assets/images/searchIcon.png')}
              />
            );
          },
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={[
                  styles.label,
                  {
                    marginRight: -pixelSizeHorizontal(0),
                    color: focused ? COLOR.purple : COLOR.darkGrey,
                  },
                ]}>
                Search
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Image
                style={[
                  styles.icon,
                  {
                    marginRight: -pixelSizeHorizontal(0),
                    tintColor: focused ? COLOR.purple : COLOR.darkGrey,
                  },
                ]}
                source={require('../assets/images/settingsIcon.png')}
              />
            );
          },
          tabBarLabel: ({focused}) => {
            return (
              <Text
                style={[
                  styles.label,
                  {
                    marginRight: -pixelSizeHorizontal(0),
                    color: focused ? COLOR.purple : COLOR.darkGrey,
                  },
                ]}>
                Settings
              </Text>
            );
          },
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  icon: {
    width: widthPixel(24),
    height: widthPixel(24),
    resizeMode: 'contain',
    marginBottom: pixelSizeVertical(2),
  },
  label: {
    fontSize: fontPixel(10),
  },
});
