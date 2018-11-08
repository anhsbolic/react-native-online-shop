import React from 'react';
import { createStackNavigator } from 'react-navigation';

import SplashScreen from '../screens/splash/SplashScreen';

const TestNavigator = createStackNavigator(
  {
    Test: SplashScreen
  },
  {
    initialRouteName: 'Test',
    headerMode: 'none'
  }
);

export default TestNavigator;