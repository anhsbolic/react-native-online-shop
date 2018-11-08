import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import SplashScreen from '../screens/splash/SplashScreen';
import HomeStackNavigator from './HomeStackNavigator';
import WalktroughSwitchNavigator from './WalktroughSwitchNavigator';

const Navigator = createSwitchNavigator(
  {
    Splash: SplashScreen,
    Walktrough: WalktroughSwitchNavigator,
    Home: HomeStackNavigator,
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none'
  }
);

export default Navigator;