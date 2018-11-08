import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeBottomNavigator from './HomeBottomNavigator';
import ProductScreen from '../screens/product/ProductScreen';

const HomeStackNavigator = createStackNavigator(
  {
    Home: HomeBottomNavigator,
    Product: ProductScreen
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

export default HomeStackNavigator;