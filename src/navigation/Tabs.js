import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from '../config/colors';

import TodayScreen from '../screens/TodayScreen';
import AllScreen from '../screens/AllScreen';

const Tabs = createMaterialTopTabNavigator();
const TabNavigator = () => {
  return (
    <Tabs.Navigator
    tabBarPosition={'bottom'} 
    tabBarOptions={{
      activeTintColor: colors.white,
      inactiveTintColor: colors.blue,
      labelStyle: styles.label,
      style: styles.tabs,
      indicatorStyle: styles.indicator
    }}>
      <Tabs.Screen name="Today" component={TodayScreen} />
      <Tabs.Screen name="All" component={AllScreen} />
    </Tabs.Navigator>
  )
}

const styles = StyleSheet.create({
    tabs: {
      backgroundColor: colors.navy_blue,
      height: 70
    },
    label: {
      fontFamily: 'SFCompactRounded-Medium',
      fontSize: 16,
      paddingTop: 10
    },
    indicator: {
      backgroundColor: colors.navy_blue
    }
  })

export default TabNavigator;