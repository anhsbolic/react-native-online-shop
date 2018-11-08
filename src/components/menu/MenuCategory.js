import React from 'react';
import { 
  Image,
  TouchableWithoutFeedback, 
  Text,
  View, 
  StyleSheet
} from 'react-native';

const MenuCategory = props =>{
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={[styles.container, {width: props.width}]}>
        <View style={[styles.iconContainer,{
          width: props.width-20,
          height: props.width-20,
          backgroundColor: props.iconBgColor
        }]}>
          <Image style={styles.icon} source={props.icon}/>
        </View>      
        <Text style={[styles.text, {
          color: props.titleColor
        }]}
        numberOfLines={2}>{props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  iconContainer:{
    borderRadius: 100,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  text: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
  }
});

export default MenuCategory;