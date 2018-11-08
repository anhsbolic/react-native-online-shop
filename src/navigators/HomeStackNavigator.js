import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeBottomNavigator from './HomeBottomNavigator';
import ProductScreen from '../screens/product/ProductScreen';
import ScanQrCodeScreen from '../screens/scanqrcode/ScanQrCodeScreen';

const HomeStackNavigator = createStackNavigator(
  {
    Home: HomeBottomNavigator,
    Product: ProductScreen,
    ScanQrCode: ScanQrCodeScreen
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

export default HomeStackNavigator;