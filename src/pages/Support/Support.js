import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Dimensions, ScrollView, Linking, ImageBackground } from 'react-native'
import React, { useEffect, useState, version } from 'react'
import ProfileEdit from '../../constantComponent/ProfileEdit';
import Language from '../../constantComponent/Language';
import VarifyOtp from '../../constantComponent/VarifyOtp';
import Term_Condition from '../../constantComponent/Term_Condition';
import { useSelector } from 'react-redux';
import { apiMethod, apiRoutes, apimethods } from '../../apiConfig/apiurl';
// import { useTranslation } from 'react-i18next';


const { height, width } = Dimensions.get('screen');

const Support = (props) => {
  // const { i18n, t } = useTranslation();

  const datas = ["satta matka", "online matka", "online matka app", "satta matta matka", "matka satta", "matka app", "online satta app", "kalyan matka", "satta matka satta matka", "online matka play", "online matka play full rate app", "100 deposit matka app download", "satta king", "online satta play", "trusted online matka app", "kalyan online matka", "satta king gali", "fast withdrawal matka app", "satta company", "best site to play online matka"]

  const imagesData = [require('../../Images/rezeetImg/banner_bg.png'), require('../../Images/rezeetImg/banner_bg1.png'), require('../../Images/rezeetImg/banner_bg2.png'), require('../../Images/rezeetImg/banner_bg3.png')]

  const [visible, setvisible] = useState(false);
  const Color = useSelector(state => state.Theme.Color)


  const [language, setLanguage] = useState(false);
  const [data, setdata] = useState([]);

  const [number, setnumber] = useState(0);
  const [number1, setnumber1] = useState(0);


  useEffect(() => {

    getProfile()


  }, [])

  const getProfile = async () => {
    let body = {
      method: apimethods.G,
      url: apiRoutes.appDetails,
    };
    try {
      const data = await apiMethod(body)
      console.log("data?.registerData?.messag", data?.registerData?.data);
      // console.log("data?.registerData?.message",);
      setdata(data?.registerData?.data)


    } catch (error) {
      console.log('error', error);

    }
  }


  const makePhoneCall = (phoneNumber) => {
    const phoneNumberToCall = `tel:${phoneNumber}`;
    Linking.openURL(phoneNumberToCall)
      .catch((error) => {
        console.error(`Failed to open phone dialer: ${error}`);
      });
  };

  const openWhatsApp = (phoneNumber) => {
    const url = `whatsapp://send?phone=${phoneNumber}`;
    Linking.openURL(url)
      .catch(() => {
        alert('Make sure WhatsApp is installed on your device');
      });
  };

  const sendEmail = (emailAddress) => {
    const url = `mailto:${emailAddress}`;
    Linking.openURL(url)
      .catch(() => {
        alert('Unable to open email client.');
      });
  };

  console.log('====================================')
  console.log("data", data)
  console.log('====================================')


  useEffect(() => {
    const interval = setInterval(() => {
      const newRandomNumber = Math.floor(Math.random() * 21); // Generate random number between 0 and 20

      const newRandomNumberBann = Math.floor(Math.random() * 4); // Generate random number between 0 and 20
      // Generate random number between 0 and 20
      setnumber(newRandomNumber);
      setnumber1(newRandomNumberBann);

    }, 20000); // 2000 milliseconds = 2 seconds

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
              <Image source={require('../../Images/rezeetImg/left_arrow.png')} style={{ height: 40, width: 40, tintColor: '#FFF', elevation: 5 }} />
            </TouchableOpacity>
            <Text style={{ marginLeft: 30, color: '#FFF', fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>Support</Text>
            <Text>{"\t\t\t\t\t\t"}</Text>
          </View>

          <View style={{ marginVertical: 20, justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ borderWidth: 2, borderRadius: 100, borderColor: '#FFF' }}>

              <Image source={data?.image ? { uri: data?.image } : require('../../Images/rezeetImg/matka.png')} style={{ height: 120, width: 120, borderRadius: 100 }} />
            </View>

          </View>
        </View>

        <ScrollView style={{ marginHorizontal: 10, marginTop: 20, bottom: 10 }} showsVerticalScrollIndicator={false}>




          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 0.5, borderRadius: 10, backgroundColor: Color.onPrimary, elevation: 1, marginTop: 20, marginHorizontal: 10, borderColor: Color.onSecondary }} activeOpacity={0.5} onPress={() => makePhoneCall(data?.contact_details?.mobile_no_1)}>
            <View style={{ width: '20%', alignItems: 'center', paddingVertical: 7, borderRightWidth: 0.5, justifyContent: 'center', borderColor: Color.onSecondary }}>
              <Image source={require('../../Images/rezeetImg/call.png')} style={{ height: 25, width: 25, resizeMode: 'contain', tintColor: Color.onSecondary }} />
            </View>
            <View style={{ width: '75%', justifyContent: 'center', paddingVertical: 7 }}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: Color.onSecondary }}>{data?.contact_details?.mobile_no_1}</Text>
            </View>
          </TouchableOpacity>
         
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 0.5, borderRadius: 10, backgroundColor: Color.onPrimary, elevation: 1, marginTop: 20, marginHorizontal: 10, borderColor: Color.onSecondary }} activeOpacity={0.5} onPress={() => openWhatsApp(`+91${data?.contact_details?.whatsapp_no}`)}>
            <View style={{ width: '20%', alignItems: 'center', paddingVertical: 7, borderRightWidth: 0.5, justifyContent: 'center', borderColor: Color.onSecondary }}>
              <Image source={require('../../Images/rezeetImg/whatsapp.png')} style={{ height: 25, width: 25, resizeMode: 'contain', }} />
            </View>
            <View style={{ width: '75%', justifyContent: 'center', paddingVertical: 7 }}>

              <Text style={{ fontSize: 18, fontWeight: 'bold', color: Color.onSecondary }}>{data?.contact_details?.whatsapp_no}</Text>
            </View>
          </TouchableOpacity>
         





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

export default Support