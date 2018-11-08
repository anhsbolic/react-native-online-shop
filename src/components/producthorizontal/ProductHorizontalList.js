import React from 'react';
import { 
  FlatList,
  Text,
  TouchableWithoutFeedback, 
  View, 
  StyleSheet
} from 'react-native';
import ProductHorizontalItem from './ProductHorizontalItem';

const navIcon = '>>';
const ProductHorizontalList = props =>{

  _renderItem = ({ item, index }) => {
    return (
      <ProductHorizontalItem
        item={item}
        onPress={()=>props.onItemPress(item.id)}
      />
    );
  };

  _keyExtractor = (item, index) => item.id.toString();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.txtTitle}>{props.title}</Text>
        <TouchableWithoutFeedback style={styles.txtNavTitleContainer} onPress={props.onNavPress}>
          <View>
            <Text style={styles.txtNavTitle}>{props.navigationTitle + ' ' + navIcon}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <FlatList
        data={props.data}
        style={{flex: 1}}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        horizontal={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  headerContainer: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 10
  },
  txtTitle: {
    width: '50%',
    textAlign: 'left',
    color: 'black',
    fontSize: 16,
    fontWeight: '500'
  },
  txtNavTitleContainer: {
    width: '50%',
  },
  txtNavTitle: {
    textAlign: 'right',
    color: 'blue',
    fontSize: 12,
    fontWeight: '400'
  }
});

export default ProductHorizontalList;