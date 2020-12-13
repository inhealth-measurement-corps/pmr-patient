import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import colors from './src/config/colors';
import AuthNavigator from './src/navigation/Auth';

export default class App extends Component {
  render () {
    return <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
  };
}