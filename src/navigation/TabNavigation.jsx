// import {StyleSheet, Text, View, Image} from 'react-native';
// import React ,{useState}from 'react';
// import HomeScreen from '../screens/homeScreen/HomeScreen';
// import ChatScreen from '../screens/chatScreen/ChatScreen';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {
//   fontPixel,
//   heightPixel,
//   pixelSizeHorizontal,
//   pixelSizeVertical,
//   widthPixel,
// } from '../utils/ResponsiveDesign';
// import { useRoute } from '@react-navigation/native';
// import LinearGradient from 'react-native-linear-gradient';
// import { useIsFocused } from '@react-navigation/native';
// const Tab = createBottomTabNavigator();
// const Meal = () => {
//   return <></>;
// };
// const Grocery = () => {
//   return <></>;
// };
// const Chat =(prop) => {

  
//   return <>
//   <ChatScreen/>
//   </>;
// };
// const Home = (prop) => {
//   const isFocused = useIsFocused();
// prop?.setState(isFocused&&'home')
//   return <>
//   <HomeScreen/>
//   </>
// };
// const TabNavigation = () => {
//   const [state,setState]=useState('')
//   const route = useRoute();
//   return (
//     <>


//            {
// state=='home'&&<LinearGradient colors={['rgba(255, 255, 255, 0)','#FFFFFF']}  
            
//              style={{ height: pixelSizeVertical(36),position:'absolute',bottom:pixelSizeVertical(45),
//            width: '100%', zIndex: 100 }}/>
//            }
//       <View style={{ flex: 1 }}>
//       <Tab.Navigator
//         activeColor=""
//         initialRouteName="Home"
//         screenOptions={{
          
          
//           tabBarStyle: {
//             paddingTop: pixelSizeVertical(7),
//             height: pixelSizeVertical(45),
//             flexDirection: 'row',
//             justifyContent:'space-between',
            
            
//             borderTopWidth: 0,
//           elevation:0
//           },

//           // tabBarItemStyle: {flex: 1, justifyContent: 'space-evenly',padding:0,margin:0, elevation:0},
//         }}>
//         <Tab.Screen
//           name="Home"
//          style={styles.BottomTabBarItem}
       
//           options={{
//             headerShown: false,
          
//             tabBarIcon: ({color, size, focused}) => {
           
//               return (
//                 <Image
//                 style={styles.icon}
//                   source={require('../assets/images/t.png')}
//                   />
//                 );
//             },
//             tabBarLabel: () => {
//               return <Text style={styles.label}>Today</Text>;
//             },
//           }}
//           >
//             {()=><Home setState={setState}/>}
//           </Tab.Screen>

//         <Tab.Screen
//           name="Meal"
//           component={Meal}
//           options={{
//             headerShown: false,
//             tabBarIcon: ({color, size, focused}) => {
           

//               return (
//                 <Image
//                 style={styles.icon}
//                 source={require('../assets/images/meal.png')}
//                 />
//                   );
//             },
//             tabBarLabel: () => {
//               return <Text style={styles.label}>Meal Plan</Text>;
//             },
//           }}
//         />
//         <Tab.Screen
//           name="Grocery"
//           component={Grocery}
//           options={{
//             headerShown: false,
//             tabBarIcon: ({color, size, focused}) => {
//               return (
//                 <Image
//                   style={[styles.icon,{marginRight:-pixelSizeHorizontal(20)}]}
//                   source={require('../assets/images/grocery.png')}
//                   />
//                 );
//             },
//             tabBarLabel: () => {
//               return <Text style={[styles.label,{marginRight:-pixelSizeHorizontal(20)}]}>Grocery List</Text>;
//             },
//           }}
//           />
//         <Tab.Screen
//           name="Chat"
       
//           options={{
//             headerShown: false,
//             tabBarIcon: ({color, size, focused}) => {

//               return (
//                 <>
//                   {focused && (
//                     <View
//                       style={{
//                         backgroundColor: 'rgba(255, 53, 56, 1)',
//                         marginRight: pixelSizeVertical(8),
//                         marginBottom: -2,
//                         borderRadius: 100,
//                         width: widthPixel(5.5),
//                         height: widthPixel(5.5),
//                       }}></View>
//                   )}
//                   <Image
//                     style={[styles.icon,{marginRight:-pixelSizeHorizontal(15)}]}
//                     source={require('../assets/images/chat.png')}
//                   />
//                 </>
//               );
//             },
//             tabBarLabel: () => {
//               return <Text style={[styles.label,{marginRight:-pixelSizeHorizontal(16)}]}>{`Chat`}</Text>;
//             },
//           }}
//           >
//             {()=><Chat setState={setState}/>}
//           </Tab.Screen>
//       </Tab.Navigator>
//     </View>
//               </>
//   );
// };

// export default TabNavigation;

// const styles = StyleSheet.create({
//   icon: {
//     width: widthPixel(16),
//     height: heightPixel(16),
//     resizeMode: 'contain',
//     marginBottom: pixelSizeVertical(2),
    
//   },
//   label: {
//     fontSize: fontPixel(9),
//     fontFamily: 'SF-Pro-Display-Medium',
//     color: 'black',
//   },
//   BottomTabBarItem:{
//     width:10  ,
//     backgroundColor:'green'
//   }
// });
