import React, {Component} from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

import { connect } from 'react-redux';
import { updateText } from '../store/actions/index';

type Props = {};
class InputScreen extends Component<Props> {
  state = {
    placeholder: 'this is placeholder'
  }

  onChangeText = (text) => {
    this.props.onUpdateText(text);
  }

  navToTextScreen = () => {
    this.props.navigation.navigate('Text');
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style = {{
            width: '80%',
          }}
          underlineColorAndroid = 'blue'
          placeholder = {this.state.placeholder}
          value = {this.props.text}
          onChangeText = { (text) => this.onChangeText(text) }
        />
        <Button
          onPress={this.navToTextScreen}
          color='blue'
          title='TO TEXT SCREEN'
        />
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
  }
});

const mapStateToProps = state => {
  return {
    text: state.text.text
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateText: (text) => dispatch(updateText(text))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(InputScreen);

