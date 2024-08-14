import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Dimensions, ScrollView, ImageBackground } from 'react-native'
import React, { useEffect, useState, version } from 'react'
import ProfileEdit from '../../constantComponent/ProfileEdit';
import Language from '../../constantComponent/Language';
import VarifyOtp from '../../constantComponent/VarifyOtp';
import Term_Condition from '../../constantComponent/Term_Condition';
import { useSelector } from 'react-redux';
import { apiMethod, apiRoutes, apimethods } from '../../apiConfig/apiurl';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useTranslation } from 'react-i18next';


const { height, width } = Dimensions.get('screen');

const Profile = (props) => {
  // const { i18n, t } = useTranslation();

  const datas = ["satta matka", "online matka", "online matka app", "satta matta matka", "matka satta", "matka app", "online satta app", "kalyan matka", "satta matka satta matka", "online matka play", "online matka play full rate app", "100 deposit matka app download", "satta king", "online satta play", "trusted online matka app", "kalyan online matka", "satta king gali", "fast withdrawal matka app", "satta company", "best site to play online matka"]

  const imagesData = [require('../../Images/rezeetImg/banner_bg.png'), require('../../Images/rezeetImg/banner_bg1.png'), require('../../Images/rezeetImg/banner_bg2.png'), require('../../Images/rezeetImg/banner_bg3.png'), require('../../Images/rezeetImg/banner_bg4.png'), require('../../Images/rezeetImg/banner_bg5.png')]

  const [visible, setvisible] = useState(false);
  const Color = useSelector(state => state.Theme.Color)


  const [language, setLanguage] = useState(false);
  const [data, setdata] = useState([]);
  const [term, setTerm] = useState(false);
  const [number, setnumber] = useState(0);
  const [number1, setnumber1] = useState(0);



  useEffect(() => {

    getProfile()


  }, [])

  const getProfile = async () => {
    console.log("sadasas");

    const token = await AsyncStorage.getItem('token');

    console.log("sadasas", token);
    let data = {
      method: 'post',
      url: apiRoutes.profiledata,
      headers: {
        'Content-Type': 'application/json',
        token: token
      },
    };
    console.log("sadas", data);
    axios(data)
      .then(res => {
        console.log("res@@@@@@@", res?.data);
        if (res?.data?.status === "success") {

          setdata(res?.data?.data)

        }

      })
      .catch(err => {
        console.log("sadasd", err);

      });
  }



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
    <SafeAreaView>
      <View style={{ height: '100%', backgroundColor: Color.onPrimary }}>
        <View style={{ paddingTop: 10, backgroundColor: Color.primary, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, paddingBottom: 10 }}>
          {/* Header */}
          <View style={{ flexDirection: 'row', marginTop: 0, justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')} >
              <Image source={require('../../Images/rezeetImg/left_arrow.png')} style={{ height: 40, width: 40, tintColor: '#FFF', }} />
            </TouchableOpacity>
            <Text style={{ marginLeft: 30, color: '#FFF', fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>Profile</Text>
            <Text>{"\t\t\t\t\t\t\t"}</Text>
          </View>

          <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ borderWidth: 2, borderRadius: 100, borderColor: '#FFF' }}>

              <Image source={data?.image ? { uri: data?.image } : require('../../Images/rezeetImg/matka.png')} style={{ height: 120, width: 120, borderRadius: 100 }} />
            </View>



          </View>
        </View>

        <ScrollView style={{ marginHorizontal: 10, marginTop: 20, bottom: 10 }} showsVerticalScrollIndicator={false}>


          <Text style={{ marginTop: 20, marginBottom: 10, marginHorizontal: 20, color: '#111111', fontWeight: '700' }}>User Name</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 0.5, borderRadius: 10, backgroundColor: Color.onPrimary, elevation: 5, marginHorizontal: 20, borderColor: Color.onSecondary }} >

            <View style={{ width: '75%', justifyContent: 'center', paddingVertical: 7 }}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: Color.onSecondary }}>{data?.username}</Text>
            </View>
          </View>
          <Text style={{ marginTop: 20, marginBottom: 10, marginHorizontal: 20, color: '#111111', fontWeight: '700' }}>Mobile</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 0.5, borderRadius: 10, backgroundColor: Color.onPrimary, elevation: 5, marginHorizontal: 20, borderColor: Color.onSecondary,marginBottom:20 }} >

            <View style={{ width: '75%', justifyContent: 'center', paddingVertical: 7 }}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: Color.onSecondary }}>{data?.mobile}</Text>
            </View>
          </View>
          





        </ScrollView>
        <TouchableOpacity onPress={() => bannerChange()}>

          <ImageBackground style={{ width: '96%', height: 80, alignSelf: 'center', justifyContent: 'center', position: 'relative', bottom: 20 }} resizeMode='stretch' source={imagesData[number1]}>
            <Text style={{ fontWeight: '700', color: '#FFF', marginLeft: 20, fontSize: 20 }}>{datas[number]}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Profile