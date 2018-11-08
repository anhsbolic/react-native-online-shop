import React, {Component} from 'react';
import {
  Dimensions,
  Image, 
  Keyboard,
  ScrollView,
  StyleSheet, 
  Text, 
  TouchableOpacity,
  View,
} from 'react-native';
import imgAppIcon from '../../assets/icons/app-icon.png';
import { colorPrimary } from '../../utils/Color';
import TextInputRound from '../../components/textinput/TextInputRound';
import ButtonBg from '../../components/buttons/ButtonBg';
import ButtonNoBg from '../../components/buttons/ButtonNoBg';
import { FontAwesome } from '@expo/vector-icons';

const {width, height} = Dimensions.get('window');

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showErrorEmail: false,
      showErrorPassword: false,
    }

    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  focusNextField = (id) => {
    this.inputs[id].focus();
  }

  handleLogin = () => {
    alert('login')
  }

  handleRegister = () => {
    alert('register')
  }

  handleForgotPassword = () => {
    alert('forgot password')
  }

  handleGoogleLogin = () => {
    alert('google login')
  }

  handleFacebookLogin = () => {
    alert('facebook login')
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={imgAppIcon}
          style={styles.imgAppIcon}
        />
        <TextInputRound
          style= {{
            width: '80%',
            fontSize: 14,
            fontColor: 'black',
            marginTop: 40,
            borderColor: colorPrimary,
            borderRadius: 10,
            borderWidth: 1.2,
          }}
          showError = {this.state.showErrorEmail}
          errorMsg = "mohon isi dengan email akun Anda"
          onChangeText = { (email) => this.setState({email: email})}
          keyboardType = 'default'
          placeholder = 'email'
          placeholderTextColor = 'gray'
          returnKeyType = 'next'
          reference = { input => this.inputs['email'] = input}
          blurOnSubmit = {false}
          onSubmitEditing = {() => this.focusNextField('password')}
        />
        <TextInputRound
          style= {{
            width: '80%',
            fontSize: 14,
            fontColor: 'black',
            marginTop: 20,
            borderColor: colorPrimary,
            borderRadius: 10,
            borderWidth: 1.2,
          }}
          showError = {this.state.showErrorEmail}
          errorMsg = "mohon isi dengan password akun Anda"
          onChangeText = { (password) => this.setState({password: password})}
          keyboardType = 'default'
          placeholder = 'password'
          placeholderTextColor = 'gray'
          returnKeyType = 'done'
          reference = { input => this.inputs['password'] = input}
          togglePassword = {true}
          secureTextEntry = {true}
          blurOnSubmit = {false}
          onSubmitEditing = {Keyboard.dismiss}
        />
        <ButtonBg
          title="Masuk"
          width="80%"
          height={50}
          marginTop={30}
          backgroundColor={colorPrimary}
          borderRadius={10}
          fontSize={14}
          fontColor="white"
          fontWeight="500"
          onPress={this.handleLogin}
        />
        <View style={styles.optionsContainer}>
          <ButtonNoBg
            title="Daftar disini"
            padding={5}
            fontSize={14}
            fontColor={colorPrimary}
            fontWeight="400"
            onPress={this.handleRegister}
          />
          <ButtonNoBg
            title="lupa password?"
            padding={5}
            fontSize={14}
            fontColor={colorPrimary}
            fontWeight="400"
            onPress={this.handleForgotPassword}
          />
        </View>
        <View style={styles.socmedLoginTitleContainer}>
          <View style={styles.socmedLoginLine}/>
          <View style={styles.socmedLoginTxtContainer}>
            <Text style={styles.socmedLoginTxt}>Masuk Dengan</Text>
          </View>
        </View>
        <View style={styles.socmedLoginContainer}>
          <TouchableOpacity style={styles.socmedLoginBtn} onPress={this.handleGoogleLogin}>
            <FontAwesome
              name='google'
              color='white'
              size={28}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socmedLoginBtn} onPress={this.handleFacebookLogin}>
            <FontAwesome
              name='facebook'
              color='white'
              size={28}/>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: height-24,
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  imgAppIcon: {
    width: 60,
    height: 60
  },
  optionsContainer: {
    width: '80%',
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  socmedLoginTitleContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  socmedLoginLine: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray'
  },
  socmedLoginTxtContainer: {
    position: 'absolute',
    padding: 5,
    backgroundColor: 'white',
  },
  socmedLoginTxt: {
    color: 'gray',
    fontSize: 14
  },
  socmedLoginContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 30
  },
  socmedLoginBtn: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: colorPrimary,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default LoginScreen;

