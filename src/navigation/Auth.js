import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import NavigationDrawer from './Drawer';

const AuthStack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator 
      initialRouteName='Login'
      screenOptions={{ animationEnabled: false }}
      >
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="App"
        component={NavigationDrawer}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
)}

export default AuthNavigator;