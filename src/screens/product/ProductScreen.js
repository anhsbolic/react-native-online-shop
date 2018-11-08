import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class ProductScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ProductScreen</Text>
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

export default ProductScreen;

