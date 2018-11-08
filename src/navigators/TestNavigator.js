import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/home/HomeScreen';

const TestNavigator = createStackNavigator(
  {
    Test: HomeScreen
  },
  {
    initialRouteName: 'Test',
    headerMode: 'none'
  }
);

export default TestNavigator;