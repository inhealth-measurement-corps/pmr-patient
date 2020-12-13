import 'react-native-gesture-handler';
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import colors from '../config/colors';

import TabNavigator from './Tabs';
import Graphs from './Graphs';
import GraphScreen from '../screens/GraphScreens/Landing';
import LoginScreen from '../screens/LoginScreen';

import DrawerContent from '../navigation/DrawerContent';
import DrawerToggle from '../components/DrawerToggle';

const Drawer = createDrawerNavigator();
const NavigationDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      drawerContentOptions={{
        activeBackgroundColor: colors.gray,
      }}
      drawerStyle={{
        width: '60%'
      }}
      screenOptions={({navigation}) => ({
        headerTitleStyle: { display: 'none' },
        headerStyle: {
          backgroundColor: colors.white,
          shadowOpacity: 0,
          elevation: 0,
        },
        headerLeft: () => <DrawerToggle navigation={navigation}/>
      })}
      >
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Graphs" component={Graphs} />
      <Drawer.Screen name="GraphLanding" component={GraphScreen} />
      <Drawer.Screen name="Logout" component={LoginScreen} />
    </Drawer.Navigator>
  )
}

export default NavigationDrawer;