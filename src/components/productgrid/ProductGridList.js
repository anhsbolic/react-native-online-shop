import React from 'react';
import { 
  FlatList,
  View, 
  StyleSheet
} from 'react-native';
import ProductGridItem from './ProductGridItem';

const ProductGridList = props =>{

  _renderItem = ({ item, index }) => {
    return (
      <ProductGridItem
        item={item}
        onPress={()=>props.onItemPress(item.id)}
      />
    );
  };

  _keyExtractor = (item, index) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        style={{flex: 1}}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        horizontal={false}
        numColumns={props.numColumns}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'space-evenly'
  }
});

export default ProductGridList;