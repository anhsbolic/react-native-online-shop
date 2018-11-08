import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import AuthStackNavigator from './AuthStackNavigator';
import SplashScreen from '../screens/splash/SplashScreen';
import HomeScreen from '../screens/home/HomeScreen';

const Navigator = createSwitchNavigator(
  {
    Splash: SplashScreen,
    Auth: AuthStackNavigator,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none'
  }
);

export default Navigator;