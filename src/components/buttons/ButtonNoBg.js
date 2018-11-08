import React from 'react';
import { 
  TouchableOpacity, 
  TouchableNativeFeedback, 
  Text,
  View, 
  StyleSheet, 
  Platform 
} from 'react-native';

const ButtonNoBg = props =>{
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
          padding: props.padding
        }
      ]}>
      <Text style={[
        styles.text,
        {
          textDecorationLine: props.textDecorationLine,
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
  },
  text: {
    textAlign: 'center'
  }
});

export default ButtonNoBg;