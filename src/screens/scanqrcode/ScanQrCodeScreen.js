import React, {Component} from 'react';
import {
  Animated,
  Dimensions, 
  Easing,
  Image,
  Modal,
  StyleSheet, 
  Text,
  TouchableOpacity,
  TouchableNativeFeedback, 
  View
} from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import ButttonBg from '../../components/buttons/ButtonBg';
import { colorPrimary } from '../../utils/Color';

const { width, height } = Dimensions.get('window');
let focusWidth = 0.8*width;
let leftWidth = (width - focusWidth)/2;
let rightWidth = leftWidth;
let focusHeight = focusWidth;
let topHeight = (height - focusHeight)/2;
let bottomHeight = topHeight;

class ScanQrCodeScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      showQrScreenModal: false
    };

    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
  }

  animate = () => {
    this.animatedValue.setValue(0);
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear()
      }
    ).start(() => this.animate())
  }

  authenticateWithQrCode = () => {
    if (this.state.showAuthenticateModal) {
      this.hideAuthenticateModal();
    }
    this.checkCameraPermissionThenOpenQrCodeScanner();
  }

  checkCameraPermissionThenOpenQrCodeScanner = async() => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    if (status === 'granted') {
      this.showQrScreenModal();
    } else {
      alert("You will not able to scan any barcode");
    }
  }

  showQrScreenModal = () => {
    this.setState({showQrScreenModal: true});
  }

  hideQrScreenModal = () => {
    this.setState({showQrScreenModal: false});
  }

  handleBarCodeScanned = ({ type, data }) => {
    setTimeout(()=>{
      this.hideQrScreenModal();
    },200);
    setTimeout(()=>{
      alert(data);
    },500);
  }

  render() {
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, focusHeight, 0]
    })

    return (
      <View style={styles.container}>
        <Modal
          animationType = 'slide'
          transparent = {true}
          visible = {this.state.showQrScreenModal}
          onRequestClose={this.hideQrScreenModal}>
          <View style={styles.containerModal}>
            <BarCodeScanner
              onBarCodeRead={this.handleBarCodeScanned}
              style={[StyleSheet.absoluteFill, styles.containerScanner]}>
              <View style={styles.layerTop}>
                <View style={{
                  width: (0.8*width)+24,
                  height: '100%'
                }}>
                  <View style={{
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    width: 20,
                    height: 2,
                    backgroundColor: 'white',
                    marginBottom: 10
                  }}/>
                  <View style={{
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    width: 2,
                    height: 10,
                    backgroundColor: 'white'
                  }}/>
                  <View style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: 20,
                    height: 2,
                    backgroundColor: 'white',
                    marginBottom: 10
                  }}/>
                  <View style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: 2,
                    height: 10,
                    backgroundColor: 'white'
                  }}/>
                </View>
              </View>
              <View style={styles.layerCenter}>
                <View style={styles.layerLeft}>
                  <View style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 2,
                    height: 8,
                    backgroundColor: 'white',
                    marginRight: 10
                  }}/>
                  <View style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: 2,
                    height: 8,
                    backgroundColor: 'white',
                    marginRight: 10
                  }}/>
                </View>
                <View style={styles.focused}>
                  <Animated.View style={{
                    marginTop: movingMargin,
                    width: '100%',
                    height: 0.75,
                    backgroundColor: 'green'
                  }}/>
                </View>
                <View style={styles.layerRight}>
                  <View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 2,
                    height: 8,
                    backgroundColor: 'white',
                    marginLeft: 10
                  }}/>
                  <View style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: 2,
                    height: 8,
                    backgroundColor: 'white',
                    marginLeft: 10
                  }}/>
                </View>
              </View>
              <View style={styles.layerBottom}>
              <View style={{
                  width: (0.8*width)+24,
                  height: '100%'
                }}>
                  <View style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: 20,
                    height: 2,
                    backgroundColor: 'white',
                    marginTop: 10
                  }}/>
                  <View style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: 2,
                    height: 10,
                    backgroundColor: 'white'
                  }}/>
                  <View style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: 20,
                    height: 2,
                    backgroundColor: 'white',
                    marginTop: 10
                  }}/>
                  <View style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: 2,
                    height: 10,
                    backgroundColor: 'white'
                  }}/>
                </View>
              </View>
            </BarCodeScanner>
          </View>
        </Modal>
        <ButttonBg
          title = "Scan QR Code"
          width = '70%'
          backgroundColor = {colorPrimary}
          fontColor = 'white'
          fontSize = {16}
          fontWeight = '500'
          onPress = {this.authenticateWithQrCode}/>
      </View>
    );
  }
}

const opacity = 'rgba(0, 0, 0, .6)';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  containerScanner: {
    flex: 1,
    flexDirection: 'column'
  },
  layerTop: {
    width: '100%',
    height: topHeight,
    backgroundColor: opacity,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  layerCenter: {
    width: '100%',
    height: focusHeight,
    flexDirection: 'row'
  },
  layerBottom: {
    width: '100%',
    height: bottomHeight,
    backgroundColor: opacity,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  layerLeft: {
    width: leftWidth,
    height: '100%',
    backgroundColor: opacity
  },
  focused: {
    width: focusWidth,
    height: '100%',
  },
  layerRight: {
    width: rightWidth,
    height: '100%',
    backgroundColor: opacity
  },
});

export default ScanQrCodeScreen;

