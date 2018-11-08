import React from 'react';
import { 
  Image,
  Text,
  TouchableWithoutFeedback, 
  View, 
  StyleSheet
} from 'react-native';

const ProductGridItem = props =>{
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={props.item.image}/>
          <Text style={styles.txtDisc}>{props.item.discount}</Text>
        </View>
        <Text style={styles.txtName} numberOfLines={1}>{props.item.name}</Text>
        <Text style={styles.txtDpTitle}>Uang Muka</Text>
        <Text style={styles.txtDpAfterDisc}>{props.item.dp_after_discount}</Text>
        <Text style={styles.txtDpLineThrough}>{props.item.dp}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 240,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 8,
    paddingRight: 8,
    margin: 5,
    backgroundColor: 'white',
  },
  imgContainer: {
    width: 130,
    height: 130
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  txtDisc: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    padding: 5,
    backgroundColor: 'orange',
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  txtName: {
    color: '#757575',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 10
  },
  txtDpTitle: {
    color: '#494949',
    fontSize: 11,
    fontWeight: '400',
    marginTop: 10
  },
  txtDpAfterDisc: {
    color: '#d50000',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2
  },
  txtDp: {
    color: '#494949',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2
  },
  txtDpLineThrough: {
    color: '#494949',
    fontSize: 11,
    fontWeight: '300',
    marginTop: 2,
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid'
  }
});

export default ProductGridItem;