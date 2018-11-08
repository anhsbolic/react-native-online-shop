import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView, 
  Dimensions 
} from 'react-native';

import product1 from '../../assets/images/product1.jpeg';
import product2 from '../../assets/images/product2.jpeg';
import product3 from '../../assets/images/product3.jpeg';
import truck_icon from '../../assets/icons/truck_icon.png';
import star_icon from '../../assets/icons/star_icon.png';
import imgProduct from '../../assets/images/product.jpg';

import ButtonClick from '../../components/buttons/ButtonClick';
import ProductHorizontalList from '../../components/producthorizontal/ProductHorizontalList';
import { colorPrimary, colorPrimaryDark } from '../../utils/Color';
import ButtonBg from '../../components/buttons/ButtonBg';

const {width, height} = Dimensions.get('window');

const products = [
  {
    "imageUri"  : product1
  },
  {
    "imageUri"  : product2
  },
  {
    "imageUri"  : product3
  }
]

const itemInsurance = [
  {
    "image" : truck_icon,
    "title" : "Pengiriman dalam 48 jam"
  },
  {
    "image" : truck_icon,
    "title" : "Gratis Ongkir"
  },
  {
    "image" : truck_icon,
    "title" : "7 Hari Pengembalian"
  },
  {
    "image" : truck_icon,
    "title" : "Refund Cepat"
  }
]

const descButton = [
  {
    "title" : "Color",
    "item1" : "Blue",
    "item2" : "Red",
    "item3" : "Green"
  },
  {
    "title" : "Storage",
    "item1" : "32Gb",
    "item2" : null,
    "item3" : null
  },
  {
    "title" : "Ram",
    "item1" : "3Gb",
    "item2" : "4Gb",
    "item3" : null
  },
]

const data = [
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

class ProductScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props)
    this.state = {
      index : 0,
      productGaleries: [],
      itemInsurance: [],
      productsRecomendation: [],
      productsBestSeller: [],
    }
  }

  viewDestroyed = false;
  componentDidMount() {
    setTimeout(()=>{
      this.loadProductGaleries();
    }, 500)
    setTimeout(()=>{
      this.loadItemInsurance();
    }, 800);
    setTimeout(()=>{
      this.loadProductsRecomendation();
    }, 1000);
    setTimeout(()=>{
      this.loadProductsBestSeller();
    }, 1200);
  }

  loadItemInsurance = async() => {
    if (!this.viewDestroyed) {
      this.setState({
        itemInsurance: itemInsurance,
      });
    }
  }

  loadProductGaleries = async() => {
    if (!this.viewDestroyed) {
      this.setState({
        productGaleries: products,
      });
    }
  }

  loadProductsRecomendation = async() => {
    if (!this.viewDestroyed) {
      this.setState({
        productsRecomendation: data,
      });
    }
  }

  loadProductsBestSeller = async() => {
    if (!this.viewDestroyed) {
      this.setState({
        productsBestSeller: data,
      });
    }
  }

  onScroll = (event) => {
    let position = event.nativeEvent.contentOffset.x/360;

    this.setState({
      index: Math.round(position)
    });
  }

  indicatorPage = () => {
    const ActiveDot = <View style={[styles.dot,styles.activeDot]}/>,
          Dot = <View style={styles.dot}/>;
    let dots=[];

    for (let key = 0; key < products.length; key++) {
      dots.push(key === this.state.index
        ? React.cloneElement(ActiveDot, { key })
        : React.cloneElement(Dot, { key })
      );
    }

    return(
      <View style={styles.indicatorContainer}>
        {dots}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{marginBottom: 50}}>
          <View style={styles.carouselContainer}>
            <View style={styles.productContainer}>
              <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={this.onScroll}>
                {this.state.productGaleries.map((item, key) => (
                  <Image
                    key={key}
                    style={styles.image}
                    source={item.imageUri}/>
                ))}
              </ScrollView>
            </View>
            {this.indicatorPage()}
          </View>
          <View style={styles.titleContainer}>  
            <Text>Oppo F1S, Ram 2GB, Storage 16GB</Text>
            <Text>Price Rp. 20.000,-</Text>
          </View>
          <View style={styles.insuranceContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {this.state.itemInsurance.map((item, key) => (
                <View
                  key={key} 
                  style={styles.itemInsurance}>
                  <Image
                    source={item.image}/>
                  <Text style={{
                    fontSize:13, 
                    color:'black', 
                    marginLeft:10}}>
                    {item.title}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={styles.descContainer}>
            {descButton.map((item, key) => (
              <View
                key={key} 
                style={styles.itemDesContainer}>
                <Text
                  style={{
                    paddingBottom: 10,
                    paddingTop: 10, 
                    fontSize: 16, 
                    fontWeight:'700', 
                    alignItems: 'flex-start',
                    textAlign: 'left',
                    justifyContent: 'flex-start'
                  }}>
                  {item.title}
                </Text>
                <ButtonClick
                  active = {false}
                  color = {colorPrimary}
                  width = {80}
                  fontSize = {16}
                  fontWeight = "400">
                  {item.item1}
                </ButtonClick>
              </View>
            ))}
          </View>

          <View style={styles.sellerContainer}>
            <View style={styles.descCompanyContainer}>
              <Text style={{fontSize:12}}>DIJUAL OLEH</Text>
              <Text>REACT NATIVE STORE</Text>
              <View style={styles.ratingContainer}>
                <Image
                  style={styles.imageRating}
                  source={star_icon}/>
                <Image
                  style={styles.imageRating}
                  source={star_icon}/>
                <Image
                  style={styles.imageRating}
                  source={star_icon}/>
                <Image
                  style={styles.imageRating}
                  source={star_icon}/>
                <Image
                  style={styles.imageRating}
                  source={star_icon}/>
                <Text style={{marginLeft: 5, fontSize: 11, color:'#d67900'}}>5.0</Text>
              </View>
            </View>
            <View style={styles.logoCompanyContainer}>
              <Image
                style={styles.logoCompany}
                source={require('../../assets/icons/react.png')}/>
            </View>
          </View>

          <View style={styles.benefitContainer}>
            <View style={styles.itemBenefitContainer}>
              <Image
                style={styles.logoCompany}
                source={require('../../assets/icons/retur_money.png')}/>
              <Text style={{marginTop:10, fontSize:11}}>Retur Mudah</Text> 
            </View>
            <View style={styles.itemBenefitContainer}>
              <Image
                style={styles.logoCompany}
                source={require('../../assets/icons/wallet.png')}/>
              <Text style={{marginTop:10, fontSize:11, textAlign:'center'}}>Pembayaran dijamin 100% Aman</Text> 
            </View>
            <View style={styles.itemBenefitContainer}>
              <Image
                style={styles.logoCompany}
                source={require('../../assets/icons/shield.png')}/>
              <Text style={{marginTop:10, fontSize:11}}>Kualitas Terjamin</Text> 
            </View>
          </View>
          <View style={styles.containerFlatList}>
            <ProductHorizontalList 
              title='Rekomendasi'
              navigationTitle='Berikutnya'
              data={this.state.productsRecomendation}
              onItemPress={(id)=>alert(id)}
              onNavPress={()=> alert('berikutnya')}/>
            <ProductHorizontalList 
              title='Terlaris'
              navigationTitle='Berikutnya'
              data={this.state.productsBestSeller}
              onItemPress={(id)=>alert(id)}
              onNavPress={()=> alert('berikutnya')}/>
          </View>
        </ScrollView>
        <View style={{
          width:'100%', 
          backgroundColor:'#fff', 
          height:50, 
          position:'absolute', 
          bottom:0,
          flexDirection : 'row',
          shadowColor: '#000',
          shadowRadius : 2,
          shadowOffset:{  width: 0,  height: -4,  },
          shadowColor: 'black',
          shadowOpacity: 1.0,
          elevation: 2}}>

          <View style={{width: '70%', backgroundColor:'white', flexDirection:'row', elevation: 3}}>
            <View style={{
              width: '80%',
              height: '100%',
              paddingLeft: 20,
              flexDirection:'column',
              justifyContent: 'center',
              alignItems: 'flex-start',}}>
              <Text style={{
                color:colorPrimary, 
                fontWeight:"700",
                fontSize: 16}}>
                Rp.20.000,-
              </Text>
              <Text style={{
                fontSize: 13,
                color: 'grey'}}>
                Pembayaran Bulanan dari
              </Text>
            </View>
            <View style={{
              alignItems:'flex-end',
              width: '20%',
              justifyContent:'center',
              alignItems: 'center',
              height: '100%',}}>
              <Image
                style={{
                width:25, 
                height: 25,
                justifyContent:'center',
                alignItems: 'center',}}
                source={require('../../assets/icons/heart.png')}/>
            </View>
          </View>
          <ButtonBg
            title="BELI"
            width = "30%"
            fontSize = {14}
            fontWeight = "600"
            fontColor = "white"
            onPress = {() => {alert('BELI')}}
            backgroundColor = {colorPrimary}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6d6d6'
  },
  carouselContainer:{
    width: '100%',
    height: 330,
    
  },
  productContainer: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: width,
    height: '100%',
    resizeMode: 'cover',
    paddingTop: 20
  },
  dot:{
    backgroundColor: 'rgba(153,153,153,.40)',
      width: 8,
      height: 8,
      borderRadius: 10,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3
  },
  activeDot: {
    backgroundColor: 'rgba(153,153,153,1)'
  },
  indicatorContainer:{
    position: 'absolute',
    bottom: 20,
    zIndex: 10,
    width: '100%', 
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  titleContainer:{
    height: 90, 
    padding: 20,
    backgroundColor:'#fff',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  txtTitle: {
    fontWeight:'bold', 
    fontSize: 16, 
    marginBottom:5
  },
  txtPrice: {
    fontSize:14
  },
  insuranceContainer: {
    width:'100%',
    height:30, 
    backgroundColor:'#e8e8e8',
  },
  itemInsurance: {
    height:'100%', 
    justifyContent:'space-between', 
    marginLeft:10, 
    flexDirection:'row', 
    alignItems:'center'
  },
  descContainer: {
    backgroundColor:'white', 
    marginBottom: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  itemDesContainer: {
    width: '100%', 
    flexDirection:'column',
  },
  sellerContainer: {
    paddingTop: 20,
    paddingBottom: 20, 
    flexDirection: 'row',
    width: '100%',
    backgroundColor:'white',
    marginBottom: 10,
    paddingLeft:20,
    paddingRight: 20,
  },
  descCompanyContainer: {
    width: '65%', 
    height:'100%',
    alignItems: 'flex-start', 
    flexDirection:'column', 
  },
  logoCompanyContainer: {
    width: '35%', 
    alignItems:'flex-end', 
    justifyContent:'center'
  },
  logoCompany: {
    width:50, 
    height:50, 
    resizeMode:'contain'
  },
  ratingContainer: {
    marginTop:10, 
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  imageRating: {
    width: 11,
    height: 11,
    marginRight: 5
  },
  benefitContainer: {
    width: '100%',
    justifyContent: 'center', 
    backgroundColor:'white',
    flexDirection: 'row',
    marginBottom: 10
  },
  itemBenefitContainer: {
    width: '33.3%',
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection:'column', 
    alignItems:'center', 
    justifyContent:'flex-start'
  },
  containerFlatList:{
    width:'100%',
    backgroundColor:'white',
  }
});

export default ProductScreen;
