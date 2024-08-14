import { View, Text, TouchableOpacity, StatusBar, Image, TextInput, ScrollView, ImageBackground, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'


import { color } from '../../constantComponent/color';
import { useSelector } from 'react-redux';
import WebView from 'react-native-webview';
const { height, width } = Dimensions.get('window')
const Term_Condition = ({ navigation }) => {

  const datas = ["satta matka", "online matka", "online matka app", "satta matta matka", "matka satta", "matka app", "online satta app", "kalyan matka", "satta matka satta matka", "online matka play", "online matka play full rate app", "100 deposit matka app download", "satta king", "online satta play", "trusted online matka app", "kalyan online matka", "satta king gali", "fast withdrawal matka app", "satta company", "best site to play online matka"]

  const imagesData = [require('../../Images/rezeetImg/banner_bg.png'), require('../../Images/rezeetImg/banner_bg1.png'), require('../../Images/rezeetImg/banner_bg2.png'), require('../../Images/rezeetImg/banner_bg3.png'), require('../../Images/rezeetImg/banner_bg4.png'), require('../../Images/rezeetImg/banner_bg5.png')]

  const [number, setnumber] = useState(0);
  const [number1, setnumber1] = useState(0);
  const Color = useSelector(state => state.Theme.Color)



  useEffect(() => {
    const interval = setInterval(() => {
      const newRandomNumber = Math.floor(Math.random() * 21); // Generate random number between 0 and 20

      const newRandomNumberBann = Math.floor(Math.random() * 5); // Generate random number between 0 and 20
      // Generate random number between 0 and 20
      setnumber(newRandomNumber);
      setnumber1(newRandomNumberBann);

    }, 2000); // 2000 milliseconds = 2 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);


  const bannerChange = () => {
    Linking.openURL("https://development.smapidev.co.in/")
      .catch(() => {
        alert('Unable to redirect');
      });

  }

  return (
    <View style={{ flex: 1, backgroundColor: Color.tertiary }}>
      {/* <StatusBar barStyle="default" /> */}
      <View style={{ flexDirection: 'row', margin: 10 }}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Image source={require('../../Images/rezeetImg/left_arrow.png')} style={{ height: 40, width: 40, tintColor: '#000', }} />
        </TouchableOpacity>
        <Text style={{ marginLeft: 40, color: '#000', fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>Term &Condition</Text>
      </View>
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: 'https://development.smapidev.co.in/terms_and_conditions' }}
        // style={{ flex: 1 }}
        />
      </View>
      <TouchableOpacity onPress={() => bannerChange()} style={{marginTop:20}}>

<ImageBackground style={{ width: '96%', height: 60, alignSelf: 'center', justifyContent: 'center', position: 'relative', bottom: 20 }} resizeMode='stretch' source={imagesData[number1]}>
  <Text style={{ fontWeight: '700', color: '#FFF', marginLeft: 20, fontSize: 20 }}>{datas[number]}</Text>
</ImageBackground>
</TouchableOpacity>




    </View>
  )
}

export default Term_Condition


