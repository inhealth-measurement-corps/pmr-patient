import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DailyAmbulationsGraph from '../screens/GraphScreens/DailyAmbulationsGraph';
import DailyDistanceGraph from '../screens/GraphScreens/DailyDistanceGraph';
import DailySpeedGraph from '../screens/GraphScreens/DailySpeedGraph';
import TotalAmbulationsGraph from '../screens/GraphScreens/TotalAmbulationsGraph';
import TotalDistanceGraph from '../screens/GraphScreens/TotalDistanceGraph';
import TotalSpeedGraph from '../screens/GraphScreens/TotalSpeedGraph';

const GraphStack = createStackNavigator();
const Graphs = () => {
  return (
    <GraphStack.Navigator 
      screenOptions={{ headerShown: false, animationEnabled: false }}>
      <GraphStack.Screen name="Daily Ambulations" component={DailyAmbulationsGraph} />
      <GraphStack.Screen name="Daily Distance" component={DailyDistanceGraph} />
      <GraphStack.Screen name="Daily Speed" component={DailySpeedGraph} />
      <GraphStack.Screen name="Total Ambulations" component={TotalAmbulationsGraph} />
      <GraphStack.Screen name="Total Distance" component={TotalDistanceGraph} />
      <GraphStack.Screen name="Total Speed" component={TotalSpeedGraph} />
    </GraphStack.Navigator>
  )
}

export default Graphs;