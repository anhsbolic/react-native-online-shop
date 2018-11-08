import React, { Component } from 'react';
import Navigator from './src/navigators/Navigator';
import TestNavigator from './src/navigators/TestNavigator';

import { Provider } from 'react-redux';
import configStore from './src/store/configStore';
const store = configStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <Navigator/> */}
        <TestNavigator/>
      </Provider>
    );
  }
}

export default App;