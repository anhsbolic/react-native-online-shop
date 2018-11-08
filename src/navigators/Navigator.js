import React from 'react';
import { createStackNavigator } from 'react-navigation';

import InputScreen from '../screens/InputScreen';
import TextScreen from '../screens/TextScreen';

const Navigator = createStackNavigator(
  {
    Input: InputScreen,
    Text: TextScreen
  },
  {
    initialRouteName: 'Input',
    headerMode: 'none'
  }
);

export default Navigator;