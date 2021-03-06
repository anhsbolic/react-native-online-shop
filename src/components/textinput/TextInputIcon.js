import React from 'react';
import { 
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View, 
  StyleSheet 
} from 'react-native';
import imgShowPass from './password_show.png';
import imgHidePass from './password_hide.png';

class TextInputIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: false
    }
  }

  componentWillMount() {
    if (this.props.togglePassword !== null) {
      this.setState({
        secureTextEntry: this.props.togglePassword
      });
    }
  }

  render() {
    return (
      <View style = {{
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        paddingTop: this.props.paddingTop,
        paddingBottom: this.props.paddingBottom,
        width: this.props.style.width,
        marginTop: this.props.marginTop,
        marginBottom: this.props.marginBottom,
        marginLeft: this.props.marginLeft,
        marginRight: this.props.marginRight,
      }}>
        <View style={{width: '100%'}}>
          <View style={styles.iconContainer}>
            <Image
              source={this.props.icon}
              style={styles.icon}/>
          </View>
          <TextInput
            style = {[
              styles.input,
              {
                textAlign: this.props.textAlign,
                fontSize: this.props.style.fontSize,
                color: this.props.style.fontColor
              }
            ]}
            keyboardType = {this.props.keyboardType}
            underlineColorAndroid = 'rgba(0,0,0,0)'
            placeholder = {this.props.placeholder}
            maxLength = {this.props.maxLength}
            multiline = {this.props.multiline}
            numberOfLines = {this.props.numberOfLines}
            secureTextEntry = {this.state.secureTextEntry}
            value = {this.props.value}
            returnKeyType = {this.props.returnKeyType}
            ref = {this.props.reference}
            blurOnSubmit = {this.props.blurOnSubmit}
            onChangeText = {this.props.onChangeText}
            onSubmitEditing = {this.props.onSubmitEditing}
          />
          {
            this.props.togglePassword ? 
            <TouchableOpacity
              style={styles.containerImgPass}
              onPress={()=>this.setState({secureTextEntry: !this.state.secureTextEntry})}
            >
              <Image
                style={styles.imgPass}
                source={this.state.secureTextEntry? imgShowPass : imgHidePass}
              />
            </TouchableOpacity>
            : null
          }
        </View>
        <View
          style={[
            styles.line,
            {
              backgroundColor: this.props.showError ? 'red' : this.props.style.lineColor
            }
            ]}
        />
        { 
          this.props.showError ?
          <Text style={styles.textError}>{this.props.errorMsg}</Text> : null
        }
      </View>
    );  
  }
  
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    paddingLeft: 30,
    paddingRight: 5,
  },
  line: {
    width: '100%',
    height: 1,
    marginTop: 3
  },
  textError: {
    width: '100%',
    textAlign: 'left',
    marginTop: 2,
    marginLeft: 10,
    marginRight: 10,
    color: 'red',
    fontSize: 12
  },
  containerImgPass: {
    width: 20,
    height: '100%',
    position: 'absolute',
    right: 0,
    zIndex: 5, 
    alignItems: 'center', 
    justifyContent:'center',
    marginRight: 5
  },
  imgPass: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  iconContainer: {
    width: 20,
    height: '100%',
    position: 'absolute',
    left: 0,
    zIndex: 5, 
    alignItems: 'center', 
    justifyContent:'center',
    marginRight: 5
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  }
});

export default TextInputIcon;