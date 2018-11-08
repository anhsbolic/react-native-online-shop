import React, {Component} from 'react';
import {
  Image, 
  StyleSheet,
  View
} from 'react-native';
import {colorPrimaryDark} from '../../utils/Color';
import imgSplashIcon from '../../assets/icons/splash.png';

class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={imgSplashIcon}
          style={styles.imgSplashIcon}
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
    backgroundColor: colorPrimaryDark,
  },
  imgSplashIcon: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  }
});

export default SplashScreen;

