import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, ActivityIndicator, Modal } from 'react-native'
import React, { useState, useRef } from 'react'
import Toast from 'react-native-toast-message'
import { color } from '../../constantComponent/color';
import VarifyOtp from '../../constantComponent/VarifyOtp';
import { useSelector } from 'react-redux';
import { apiMethod, apiRoutes, apimethods } from '../../apiConfig/apiurl';
import StatusBarApp from '../../constantComponent/StatusBar';
import axios from 'axios';


const ConfirmePassword = ({ navigation,route }) => {




  const [email, setemail] = useState(route?.params?.email)
  const [otp, setotp] = useState(route?.params?.token)
  const [hide, sethide] = useState(true);
  const [hide1, sethide1] = useState(true);
  const Color = useSelector(state => state.Theme.Color)
  const [password, setPassword] = useState("");
  const [passworderror, setPassworderror] = useState("");
  const [ConfirmePassword, setConfirmePassword] = useState("");
  const [ConfirmePassworderror, setConfirmePassworderror] = useState("");
  const [loading, setLoading] = useState(false);

  console.log("otp, emial", otp, email);



  const handleRegistration = () => {
    setConfirmePassworderror("");
    setPassworderror("");
    let isValid = true;



    if (password === "") {
      setPassworderror("Please Enter Strong Password !");
      isValid = false;
    }
    if (password != ConfirmePassword) {
      setConfirmePassworderror("Password Did Not Match !");
      isValid = false;
    }

    if (isValid) {

      const registrationResult = { success: true };
      return registrationResult;
    } else {

      return { success: false };
    }
  };



  const resetPassword = async () => {
    // props.navigation.navigate('Login')
    const registrationResult = handleRegistration();
    if (registrationResult.success) {
      setLoading(true)

      const fd = new FormData();

      fd.append('mobile', email);
      fd.append('password', password);

      data = {
        method: 'post',
        url: apiRoutes.forgetPassupdate,
        data: fd,
        headers: {
          // Accept: 'multipart/form-data',
          'Content-Type': 'multipart/form-data',
          token: otp
        },
      };
      console.log("sadas", data);

      axios(data)
        .then(res => {
          console.log("res@@@@@@@", res?.data);
          if (res?.data?.status === "success") {
            Toast.show({
              text1: res?.data?.message,
              type: 'success'
            });
            navigation.navigate('Login');

            // dispatch(setLogin(true))
            // AsyncStorage.setItem('token', res?.data?.data?.token).catch(err => console.log(err));
            // navigation.navigate('Sidebar');

          }

        })
        .catch(err => {
          console.log("sadasd", err);

        });

    }
  }




  return (
    <ScrollView style={{ flex: 1, backgroundColor: Color.onPrimary, }}>
      {/* <StatusBarApp /> */}


      <View style={{ marginHorizontal: 20, marginTop: 20 }}>

        <TouchableOpacity style={{ flexDirection: 'row', width: 35 }} onPress={() => navigation.pop()}>
          <Image style={{ height: 35, width: 35, marginRight: 10, tintColor: Color.onSecondary, resizeMode: 'contain' }} source={require('../../Images/rezeetImg/left_arrow.png')} />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, marginHorizontal: 20 }}>

        <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 30, fontWeight: '700', color: Color.primaryButt }}>Create Password</Text>
        <Text style={{ fontSize: 12, textAlign: 'center', color: Color.primaryButt, marginHorizontal: 20 }}>Please enter and confirm your new password.
          You will need to login after you reset.</Text>
        <View style={{ flex: 1, marginTop: 50 }}>
          <Text style={{ marginVertical: 5, marginHorizontal: 10, color: Color.primaryButt, fontSize: 14 }}>Password</Text>

          <View style={{ width: '90%', height: 40, borderWidth: 0.5, borderRadius: 7, backgroundColor: '#EEEEEE', alignSelf: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <TextInput style={{ padding: 0, width: '80%' }}
              placeholder="Enter your password" placeholderTextColor="#000" secureTextEntry={hide}
              onChangeText={(text) => { setPassword(text), setPassworderror("") }}
              value={password} />
            <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => sethide(!hide)}>
              <Image style={{ height: 25, width: 25, resizeMode: 'contain' }} source={hide ?
                require('../../Images/rezeetImg/hide.png') :
                require('../../Images/rezeetImg/show.png')
              } /></TouchableOpacity>
          </View>
          {passworderror !== "" && <Text style={{ color: 'red', marginHorizontal: 20 }}>{passworderror}</Text>}

          <View style={{ marginTop: 20 }} />
          <Text style={{ marginVertical: 5, marginHorizontal: 10, color: Color.primaryButt, fontSize: 14 }}>Confirm Password</Text>

          <View style={{ width: '90%', height: 40, borderWidth: 0.5, borderRadius: 7, backgroundColor: '#EEEEEE', alignSelf: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <TextInput style={{ padding: 0, width: '80%' }} placeholder="Confirme your password" placeholderTextColor="#000" secureTextEntry={hide1}
              onChangeText={(text) => { setConfirmePassword(text), setConfirmePassworderror("") }}
              value={ConfirmePassword} />
            <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => sethide1(!hide1)}>
              <Image style={{ height: 25, width: 25, resizeMode: 'contain' }} source={hide1 ?
                require('../../Images/rezeetImg/hide.png') :
                require('../../Images/rezeetImg/show.png')
              } /></TouchableOpacity>
          </View>
          {ConfirmePassworderror !== "" && <Text style={{ color: 'red', marginHorizontal: 20 }}>{ConfirmePassworderror}</Text>}

          <TouchableOpacity style={{ alignSelf: 'center', marginTop: 150, marginHorizontal: 20, borderRadius: 10, padding: 8, width: '75%', borderWidth: 1, borderColor: Color.onSecondary, justifyContent: 'center', backgroundColor: Color.primaryButt }} onPress={() => resetPassword()}>
            {loading ?
              <View><ActivityIndicator size="large" color={Color.onPrimary} /></View> :
              <Text style={{ color: Color.onPrimary, textAlign: 'center', fontSize: 20, fontWeight: '500' }}>Reset Password</Text>
            }

          </TouchableOpacity>


        </View>
      </View>


    </ScrollView>
  )
}
export default ConfirmePassword
