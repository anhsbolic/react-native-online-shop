import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { connect } from 'react-redux';

type Props = {};
class TextScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.text}</Text>
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

const mapStateToProps = state => {
  return {
    text: state.text.text
  };
};

export default connect(mapStateToProps, null)(TextScreen);

