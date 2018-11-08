import React from 'react';
import { createStackNavigator } from 'react-navigation';

import WalktroughScreen from '../screens/walktrough/WalktroughScreen';

const TestNavigator = createStackNavigator(
  {
    Test: WalktroughScreen
  },
  {
    initialRouteName: 'Test',
    headerMode: 'none'
  }
);

export default TestNavigator;