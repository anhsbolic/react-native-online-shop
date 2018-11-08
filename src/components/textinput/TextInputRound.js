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

class TextInputRound extends React.Component {
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
        backgroundColor: this.props.style.backgroundColor,
        width: this.props.style.width,
        marginTop: this.props.style.marginTop,
        marginBottom: this.props.style.marginBottom,
        marginLeft: this.props.style.marginLeft,
        marginRight: this.props.style.marginRight
      }}>
        <View style={{
          width: '100%',
          borderRadius: this.props.style.borderRadius,
          borderWidth: this.props.style.borderWidth,
          borderColor:  this.props.showError ? 'red' : this.props.style.borderColor
          }}>
          <TextInput
            style = {[
              styles.input,
              {
                fontSize: this.props.style.fontSize,
                color: this.props.style.fontColor
              }
            ]}
            keyboardType = {this.props.keyboardType}
            underlineColorAndroid = 'rgba(0,0,0,0)'
            placeholder = {this.props.placeholder}
            placeholderTextColor = {this.props.placeholderTextColor}
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
    paddingHorizontal: 10,
    paddingVertical: 10
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
    marginRight: 8
  },
  imgPass: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  }
});

export default TextInputRound;