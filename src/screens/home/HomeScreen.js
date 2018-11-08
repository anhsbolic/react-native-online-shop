import React from 'react';
import {
  Dimensions, 
  Image,
  ScrollView,
  StyleSheet, 
  Text,
  TouchableWithoutFeedback, 
  View 
} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import MenuCategory from '../../components/menu/MenuCategory';
import ProductHorizontalList from '../../components/producthorizontal/ProductHorizontalList';
import ProductGridList from '../../components/productgrid/ProductGridList';

import imgSearch from '../../assets/icons/search.png';
import imgScanBarcode from '../../assets/icons/scan_barcode.png';
import imgMenu from '../../assets/icons/menu.png';
import imgBanner from '../../assets/images/placeholder_banner.png';
import imgProduct from '../../assets/images/product.jpg';

import { colorPrimary } from '../../utils/Color';

var {height, width} = Dimensions.get('window');
const itemWidth = 170;
const numColumns = Math.floor(width/itemWidth);

const products = [
  {
    id: 1,
    image: imgProduct,
    name: 'Xiaomy Smartphone Canggih Sekali',
    discount: '-99%',
    dp: 'Rp700.000',
    dp_after_discount: 'Rp437.000'
  },
  {
    id: 2,
    image: imgProduct,
    name: 'Xiaomy Smartphone Canggih Sekali',
    discount: '-99%',
    dp: 'Rp700.000',
    dp_after_discount: 'Rp437.000'
  },
  {
    id: 3,
    image: imgProduct,
    name: 'Xiaomy Smartphone Canggih Sekali',
    discount: '-99%',
    dp: 'Rp700.000',
    dp_after_discount: 'Rp437.000'
  },
  {
    id: 4,
    image: imgProduct,
    name: 'Xiaomy Smartphone Canggih Sekali',
    discount: '-99%',
    dp: 'Rp700.000',
    dp_after_discount: 'Rp437.000'
  },
  {
    id: 5,
    image: imgProduct,
    name: 'Xiaomy Smartphone Canggih Sekali',
    discount: '-99%',
    dp: 'Rp700.000',
    dp_after_discount: 'Rp437.000'
  },
  {
    id: 6,
    image: imgProduct,
    name: 'Xiaomy Smartphone Canggih Sekali',
    discount: '-99%',
    dp: 'Rp700.000',
    dp_after_discount: 'Rp437.000'
  },
  {
    id: 7,
    image: imgProduct,
    name: 'Xiaomy Smartphone Canggih Sekali',
    discount: '-99%',
    dp: 'Rp700.000',
    dp_after_discount: 'Rp437.000'
  },
];

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [],
      productsPopular: [],
      productsRekomendasiList: [],
      productsRekomendasiGrid: [],
    };
  }

  unmounted = false;
  componentDidMount() {
    this.loadBanners();
    setTimeout(()=>{
      this.loadProductsPopular();
    }, 500);
    setTimeout(()=>{
      this.loadProductsRekomendasiList();
    }, 900);
    setTimeout(()=>{
      this.loadProductsRekomendasiGrid();
    }, 1200);
  }

  loadBanners = async() => {
    if (!this.unmounted) {
      this.setState({
        banners: [imgBanner, imgBanner, imgBanner, imgBanner, imgBanner],
      });
    }
  }

  loadProductsPopular = async() => {
    if (!this.unmounted) {
      this.setState({
        productsPopular: products,
      });
    }
  }

  loadProductsRekomendasiList = async() => {
    if (!this.unmounted) {
      this.setState({
        productsRekomendasiList: products,
      });
    }
  }

  loadProductsRekomendasiGrid = async() => {
    if (!this.unmounted) {
      this.setState({
        productsRekomendasiGrid: products,
      });
    }
  }

  goToProductDetails = (id) => {
    this.props.navigation.navigate('Product');
  }

  goToScanQrCode = () => {
    this.props.navigation.navigate('ScanQrCode');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbarContainer}>
          <View style={styles.searchContainer}>
            <TouchableWithoutFeedback onPress={()=>alert('cari produk')}>
              <View style={styles.touchSearchContainer}>
                <View style={styles.imgSearchContainer}>
                  <Image source={imgSearch} style={styles.imgSearch}/>
                </View>
                <Text style={styles.txtSearch}>Cari Produk</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.scanBarcodeContainer}>
            <TouchableWithoutFeedback onPress={this.goToScanQrCode}>
              <Image source={imgScanBarcode} style={styles.imgScanBarcode}/>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
          <ImageSlider
            autoPlayWithInterval={3000}
            images={this.state.banners}
            customSlide={({ index, item, style, width }) => (
              <View key={index} style={[style, styles.sliderContainer]}>
                <Image source={item} style={styles.sliderImg} />
              </View>
            )}
            customButtons={(position, move) => (
              <View style={styles.sliderIndicatorContainer}>
                {this.state.banners.map((image, index) => {
                  return (
                    <View
                      key={index}
                      style={position === index ? styles.sliderIndicatorActived : styles.sliderIndicatorInactived}>
                    </View>
                  );
                })}
              </View>
            )}
          />
          <View style={styles.menuContainer1}>
            <MenuCategory
              width={70}
              icon={imgMenu}
              iconBgColor='#fbc02d'
              title='Ini Menu'
              titleColor='grey'
              onPress={()=>alert('ini menu saja')}
            />
            <MenuCategory
              width={70}
              icon={imgMenu}
              iconBgColor='#1e88e5'
              title='Ini Menu'
              titleColor='grey'
              onPress={()=>alert('ini menu')}
            />
            <MenuCategory
              width={70}
              icon={imgMenu}
              iconBgColor='#43a047'
              title='Ini Menu'
              titleColor='grey'
              onPress={()=>alert('ini menu menu')}
            />
            <MenuCategory
              width={70}
              icon={imgMenu}
              iconBgColor='#c2185b'
              title='Ini Menu'
              titleColor='grey'
              onPress={()=>alert('ini menu')}
            />
          </View>
          <View style={styles.menuContainer2}>
            <MenuCategory
              width={70}
              icon={imgMenu}
              iconBgColor='#512da8'
              title='Ini Menu'
              titleColor='grey'
              onPress={()=>alert('ini menu')}
            />
            <MenuCategory
              width={70}
              icon={imgMenu}
              iconBgColor='#aed581'
              title='Ini Menu'
              titleColor='grey'
              onPress={()=>alert('ini menu')}
            />
            <MenuCategory
              width={70}
              icon={imgMenu}
              iconBgColor='#ffd740'
              title='Ini Menu'
              titleColor='grey'
              onPress={()=>alert('ini menu')}
            />
            <MenuCategory
              width={70}
              icon={imgMenu}
              iconBgColor='grey'
              title='Ini Menu'
              titleColor='grey'
              onPress={()=>alert('ini menu')}
            />
          </View>
          <View style={styles.productListHorizontalContainer}>
            <ProductHorizontalList 
              title='Popular'
              navigationTitle='Berikutnya'
              data={this.state.productsPopular}
              onItemPress={(id)=>this.goToProductDetails(id)}
              onNavPress={()=> alert('berikutnya')}/>
          </View>
          <View style={styles.productListHorizontalContainer}>
            <ProductHorizontalList 
              title='Rekomendasi'
              navigationTitle='Berikutnya'
              data={this.state.productsRekomendasiList}
              onItemPress={(id)=>this.goToProductDetails(id)}
              onNavPress={()=> alert('berikutnya')}/>
          </View>
          <Text style={styles.txtProductListGridTitle}>- REKOMENDASI -</Text>
          <View style={styles.productListGridContainer}>
            <ProductGridList 
              data={this.state.productsRekomendasiGrid}
              numColumns={numColumns}
              onItemPress={(id)=>this.goToProductDetails(id)}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  scrollContainer: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#f5f5f5'
  },
  toolbarContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 56,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingStart: 16,
    backgroundColor: colorPrimary,
    elevation: 4
  },
  searchContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 100
  },
  touchSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  imgSearchContainer: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  imgSearch:{
    width: 12,
    height: 12,
    resizeMode: 'contain'
  },
  txtSearch:{
    fontSize: 12,
    textAlign: 'left',
    color: 'grey',
    marginLeft: 10
  },
  scanBarcodeContainer: {
    width: '20%',
    height: '100%',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgScanBarcode: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  sliderContainer: {
    width: width,
    height: width/2,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderImage: {
    width: "100%",
    height: "100%",
    resizeMode: 'contain'
  },
  sliderIndicatorContainer: {
    zIndex: 5,
    height: 10,
    marginTop: -25,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sliderIndicatorInactived: {
    margin: 3,
    width: 7,
    height: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderIndicatorActived: {
    margin: 3,
    width: 10,
    height: 10,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 100,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'white',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    marginTop: 10,
  },
  menuContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'white',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10
  },
  productListHorizontalContainer: {
    minHeight: 280,
    backgroundColor: 'white',
    marginTop: 10
  },
  txtProductListGridTitle: {
    width: '100%',
    backgroundColor: 'white',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  productListGridContainer: {
    backgroundColor: 'white'
  }
});

export default HomeScreen;