import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet, 
  Text, 
  View
} from 'react-native';
import {colorPrimaryDark} from '../../utils/Color';
import imgOnlineStore from '../../assets/images/online-store.png';
import imgGroceries from '../../assets/images/groceries.png';
import imgCart from '../../assets/images/cart.png';
import imgNext from '../../assets/icons/next-round.png';
import ButtonBg from '../../components/buttons/ButtonBg';

const {width, height} = Dimensions.get('window');
const wpWidth = 0.8*width;

const pages = [
  {
    img: imgOnlineStore,
    title: "Toko Online Terpercaya"
  },
  {
    img: imgGroceries,
    title: "Lengkap"
  },
  {
    img: imgCart,
    title: "Yuk Belanja"
  }
];

class WalktroughScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      position: 0
    };
  }

  onScroll = (event) => {
    let position = event.nativeEvent.contentOffset.x/wpWidth;
    this.setState({ position: position });
  }

  handleNextBtn = () => {
    let { position } = this.state;
    if (position < pages.length-1) {
      position++;
      this.scroll.scrollTo({x: position * wpWidth});
    } else {
      this.navToAuth();
    }
  }

  navToAuth = () => {
    this.props.navigation.navigate("Home");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.indicatorContainer}>
          <View style={this.state.position === 0 ? styles.indicatorItemGreen : styles.indicatorItem}/>
          <View style={this.state.position === 1 ? styles.indicatorItemGreen : styles.indicatorItem}/>
          <View style={this.state.position === 2 ? styles.indicatorItemGreen : styles.indicatorItem}/>
        </View>
        <View style={styles.wpContainer}>
          <ScrollView
            style={{flex:1}}
            horizontal={true}
            pagingEnabled={true}
            directionalLockEnabled={true}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            onScroll={this.onScroll}
            ref={(node) => this.scroll = node}>
            {pages.map((item, key) => (
              <View key={key} style={styles.wpCardContainer}>
                <Image
                  source={item.img}
                  style={styles.wpImg}
                />
                <Text style={styles.wpTxtTitle}>{item.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonBg
            width="100%"
            height="100%"
            backgroundColor="green"
            borderRadius={3}
            fontSize={18}
            fontColor="white"
            fontWeight="500"
            onPress={this.handleNextBtn}
          />
          <Image
            source={imgNext}
            style={styles.imgNext}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorPrimaryDark,
  },
  indicatorContainer: {
    flexDirection: "row",
    width: wpWidth,
    height: 5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    borderRadius: 3,
  },
  indicatorItem: {
    width: wpWidth/pages.length,
    height: "100%",
    borderRadius: 3,
    backgroundColor: 'white',
  },
  indicatorItemGreen: {
    width: wpWidth/pages.length,
    height: "100%",
    borderRadius: 3,
    backgroundColor: 'green',
  },
  wpContainer: {
    width: wpWidth,
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 3,
    marginTop: 10
  },
  wpCardContainer: {
    width: wpWidth,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  wpImg: {
    width: 160,
    height: 160,
    resizeMode: "contain"
  },
  wpTxtTitle: {
    fontSize: 18,
    fontWeight: "400",
    marginTop: 30
  },
  buttonContainer: {
    width: "80%",
    height: 50,
    marginTop: 10
  },
  imgNext: {
    width:20,
    height:20,
    position: "absolute",
    right: 0,
    top: 15,
    marginEnd: 10
  },
});

export default WalktroughScreen;

