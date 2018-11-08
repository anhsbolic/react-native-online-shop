import React from 'react';
import { createStackNavigator } from 'react-navigation';

import ScanQrCodeScreen from '../screens/scanqrcode/ScanQrCodeScreen';

const TestNavigator = createStackNavigator(
  {
    Test: ScanQrCodeScreen
  },
  {
    initialRouteName: 'Test',
    headerMode: 'none'
  }
);

export default TestNavigator;