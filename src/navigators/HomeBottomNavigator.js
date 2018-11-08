import React from 'react';
import { 
  createBottomTabNavigator
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/home/HomeScreen';
import MenuScreen from '../screens/menu/MenuScreen';
import LoginScreen from '../screens/auth/LoginScreen';

import { colorPrimary } from '../utils/Color';

const HomeBottomNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Ionicons
            name="ios-cart"
            color={tintColor}
            size={28}/>
        )
      })
    },
    Menu1: {
      screen: MenuScreen,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Ionicons
            name="ios-list"
            color={tintColor}
            size={28}/>
        )
      })
    },
    Menu2: {
      screen: MenuScreen,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Ionicons
            name="ios-list"
            color={tintColor}
            size={28}/>
        )
      })
    },
    Profile: {
      screen: LoginScreen,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Ionicons
            name="ios-contact"
            color={tintColor}
            size={28}/>
        )
      })
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    tabBarOptions: {
      activeTintColor: colorPrimary,
      labelStyle: {
        fontSize: 14
      },
      style: {
        backgroundColor: 'white',
        height: 56,
      }
    },
  }
);

export default HomeBottomNavigator;