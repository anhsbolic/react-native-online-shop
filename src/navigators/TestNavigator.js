import React from 'react';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/auth/LoginScreen';

const TestNavigator = createStackNavigator(
  {
    Test: LoginScreen
  },
  {
    initialRouteName: 'Test',
    headerMode: 'none'
  }
);

export default TestNavigator;