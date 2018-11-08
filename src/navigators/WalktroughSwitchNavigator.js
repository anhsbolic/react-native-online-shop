import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import WalktroughScreen from '../screens/walktrough/WalktroughScreen';
import HomeBottomNavigator from './HomeBottomNavigator';
import AuthStackNavigator from './AuthStackNavigator';

const WalktroughSwitchNavigator = createSwitchNavigator(
  {
    Walktrough: WalktroughScreen,
    Home: HomeBottomNavigator,
    Auth: AuthStackNavigator
  },
  {
    initialRouteName: 'Walktrough'
  }
);

export default WalktroughSwitchNavigator;