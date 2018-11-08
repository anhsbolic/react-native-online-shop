import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class MenuScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MenuScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default MenuScreen;

