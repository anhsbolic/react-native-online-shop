import React from 'react';
import { 
  TouchableWithoutFeedback, 
  Text,
  View, 
  StyleSheet, 
  Platform 
} from 'react-native';

class ButtonClick extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active,
      colorBg: this.props.color,
      txtColor: 'white',
    }
  }

  setActive = () => {
    if(this.state.active){
      this.setState({
        active: false,
        colorBg: this.props.color,
        txtColor: 'white'
      });
    }else{
      this.setState({
        active: true,
        colorBg: 'white',
        txtColor: this.props.color
      });
    }
  }

  render(){
    return(
      <TouchableWithoutFeedback 
        onPressIn={this.setActive}
        onPress={this.props.onPress}>
        <View
          style={[
            {
              borderWidth: 1, 
              borderRadius: 20,
              borderColor: this.props.color, 
              width: this.props.width,
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 10,
              paddingRight: 10,
              marginBottom: this.props.marginBottom,
              marginTop: this.props.marginTop,
              marginLeft: this.props.marginLeft,
              marginRight: this.props.marginRight,
              alignItems:'center',
              backgroundColor: this.state.colorBg 
            }]}>
          <Text
            style={[
              {
                color: this.state.txtColor,
                fontSize: this.props.fontSize,
                fontWeight: this.props.fontWeight
              }]}>
            {this.props.children}
          </Text>
       </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ButtonClick;