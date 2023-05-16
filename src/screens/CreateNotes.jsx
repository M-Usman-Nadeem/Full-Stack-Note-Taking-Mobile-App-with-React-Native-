import {StyleSheet, Text, View, Image, Pressable, FlatList} from 'react-native';
import React from 'react';
import {COLOR} from '../constants/Colors';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../utils/ResponsiveDesign';
import { useNavigation } from '@react-navigation/native';

import {Fonts} from '../constants/Fonts';

const Item = ({data}) => {
  const navigation=useNavigation()
  console.log(data);
  return (
    <Pressable onPress={()=>navigation.navigate(data.item.navigation)}
      style={[
        styles[data.item.heading.split(' ')[0]],
        styles.listItemContainer,
      ]}>
      <View
        style={[
          styles.IconCont,
          styles[data.item.heading.split(' ')[0] + 'IconCont'],
        ]}>
        <Image source={data.item.icon} style={styles.listIcon} />
      </View>
      <View>
        <Text style={styles.flatListHeading}>{data.item?.heading}</Text>
     <View style={{marginRight:16}}>

        <Text
          style={[
            styles[data.item.heading.split(' ')[0] + 'Txt'],
            styles.listItemTxt,
          ]}
          // numberOfLines={2} // Set the desired number of lines
          >
          {data.item?.description}
        </Text>
            </View>
      
      </View>
    </Pressable>
  );
};

const CreateNotes = ({navigation}) => {
  const DATA = [
    {
      id: 1,
      heading: 'Interesting Idea',
      navigation:'InterestingIdeas',
      description: 'Use free text area, feel free to write it all',
      icon: require('../assets/images/ideaIcon.png'),
    },
    {
      id: 2,
      navigation:'BuyingSth',
      heading: 'Buying Something',
      description: 'Use checklist, so you won’t miss anything',
      icon: require('../assets/images/buyIcon.png'),
    },
    {

      id: 3,
      navigation:'Goals',
      heading: 'Goals',
      description: 'Near/future goals, notes and keep focus',
      icon: require('../assets/images/starIcon.png'),
    },
    {
      id: 4,
      navigation:'Guidance',
      heading: 'Guidance',
      description: 'Create guidance for routine activities',
      icon: require('../assets/images/guidanceIcon.png'),
    },
    {
      id: 5,
      navigation:'RoutineTasks',
      heading: 'Routine Tasks',
      description: 'Checklist with sub-checklist',
      icon: require('../assets/images/tasksIcon.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable
          onPress={() => navigation.navigate('TabNavigation')}
          style={styles.backBtn}>
          <Image
            source={require('../assets/images/Icon.png')}
            style={styles.backArrow}></Image>
          <Text style={styles.backTxt}>Back</Text>
        </Pressable>
        <Text style={styles.headerNotes}>New Notes</Text>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.Notestxt}>{` What Do You Want to\n Notes?`}</Text>

        <FlatList
          data={DATA}
          renderItem={item => <Item data={item} />}
          keyExtractor={item => item.id}
          style={styles.flatList}
        />
      </View>
    </View>
  );
};

export default CreateNotes;

const styles = StyleSheet.create({
  listIcon: {
    width: 16.5,
    resizeMode: 'contain',

    height: 16.5,
  },
  listItemTxt: {
   paddingRight:40
  },
  flatList: {
    marginTop: pixelSizeVertical(32),
  },
  listItemContainer: {
    flexDirection: 'row',
    paddingHorizontal: pixelSizeHorizontal(16),
    paddingVertical: pixelSizeVertical(16),
    gap: pixelSizeHorizontal(14),
    borderRadius: 8,
    marginBottom: pixelSizeVertical(24),
  },
  flatListHeading: {
    fontFamily: Fonts.Weight700,
    fontSize: fontPixel(16),
    color: COLOR.white,
  },
  Interesting: {
    backgroundColor: COLOR.purple,
  },
  InterestingIconCont: {
    backgroundColor: COLOR.dardPurple,
  },
  InterestingTxt: {
    color: COLOR.dotlightColor,
  },
  IconCont: {
    borderRadius: 100,
    paddingHorizontal: pixelSizeHorizontal(16),
    paddingVertical: pixelSizeVertical(16),
  },

  Goals: {
    backgroundColor: COLOR.yellow,
  },
  GoalsTxt: {
    color: COLOR.darkYellow,
  },
  GoalsIconCont: {
    backgroundColor: COLOR.darkYellow,
  },
  Routine: {
    backgroundColor: COLOR.lightYellow,
  },
  RoutineTxt: {
    color: COLOR.darkSec,
  },
  RoutineIconCont: {
    backgroundColor: COLOR.darkSec,
  },
  Guidance: {
    backgroundColor: COLOR.red,
  },
  GuidanceTxt: {
    color: COLOR.Errlight,
  },
  GuidanceIconCont: {
    backgroundColor: COLOR.darkRed,
  },

  Buying: {
    backgroundColor: COLOR.green,
  },
  BuyingTxt: {
    color: COLOR.darkGreen,
  },
  BuyingIconCont: {
    backgroundColor: COLOR.darkGreen,
  },
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: pixelSizeHorizontal(23),

    paddingVertical: pixelSizeVertical(16),
    borderBottomColor: COLOR.lightGrey,
    borderBottomWidth: 1,
  },
  backTxt: {
    color: COLOR.purple,
    fontSize: fontPixel(16),
    fontFamily: Fonts.Weight500,
  },
  headerNotes: {
    flex: 0.8,
    textAlign: 'center',

    color: COLOR.black,

    fontSize: fontPixel(16),
    fontFamily: Fonts.Weight500,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixelSizeHorizontal(15),
  },
  backArrow: {
    width: 6,
    height: 10,
  },
  listContainer: {
    paddingHorizontal: pixelSizeHorizontal(16),
  },
  Notestxt: {
    fontFamily: Fonts.Weight700,
    fontSize: fontPixel(24),
    color: COLOR.black,
    paddingTop: pixelSizeVertical(24),
    lineHeight: fontPixel(29),
  },
});
