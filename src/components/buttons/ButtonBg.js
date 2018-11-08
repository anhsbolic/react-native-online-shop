import React from 'react';
import { 
  TouchableOpacity, 
  TouchableNativeFeedback, 
  Text,
  View, 
  StyleSheet, 
  Platform 
} from 'react-native';

const ButtonBg = props =>{
  const content = (
    <View style={[
        styles.button, 
        { 
          width: props.width,
          height: props.height,
          marginTop: props.marginTop,
          marginBottom: props.marginBottom,
          marginLeft: props.marginLeft,
          marginRight: props.marginRight,
          backgroundColor: props.backgroundColor,
          borderColor: props.borderColor,
          borderRadius: props.borderRadius,
          borderWidth: props.borderWidth,
          elevation: props.elevation,
        }
      ]}>
      <Text style={[
        styles.text,
        {
          color: props.fontColor,
          fontSize: props.fontSize,
          fontWeight: props.fontWeight
        }
      ]}>{props.title}</Text>
    </View>
  );

  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback onPress={props.onPress}>
        {content}      
      </TouchableNativeFeedback>
    );
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      {content}      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    borderWidth: 2,
    shadowOpacity : 0.2,
    shadowRadius : 5,
    shadowOffset : {
      width : 5,
      height: 3,
    },
    elevation: 3
  },
  text: {
    textAlign: 'center'
  }
});

export default ButtonBg;