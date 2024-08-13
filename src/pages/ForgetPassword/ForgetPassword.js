import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, ActivityIndicator, Modal } from 'react-native'
import React, { useState, useRef } from 'react'
import Toast from 'react-native-toast-message'

// import { color } from '../../constantComponent/color';
import VarifyOtp from '../../constantComponent/VarifyOtp';
import { useSelector } from 'react-redux';
import { APIRequestWithFile, apiMethod, apiRoutes, apimethods } from '../../apiConfig/apiurl';
import StatusBarApp from '../../constantComponent/StatusBar';


const ForgetPassword = ({ navigation }) => {



  const Color = useSelector(state => state.Theme.Color)
  const [loading, setLoading] = useState(false);


  const [email, setemail] = useState("")
  const [emailError, setEmailError] = useState("");


  const [hide, sethide] = useState(false);


  const isMobileValid = (password) => {
    return password.length > 9;
  };

  const handleRegistration = () => {
    setEmailError("");

    let isValid = true;



    if (!isMobileValid(email)) {
      setEmailError("Please enter a valid Mobile Number");
      isValid = false;
    }

    if (isValid) {

      const registrationResult = { success: true };
      return registrationResult;
    } else {

      return { success: false };
    }
  };


  const forgetPassword = async () => {
    const registrationResult = handleRegistration();
    if (registrationResult.success) {
      setLoading(true)


      const fd = new FormData();

      fd.append('mobile', email);

      let config = {
        url: apiRoutes.forgetPass,
        method: 'post',
        body: fd
      };
      setLoading(true)
      APIRequestWithFile(
        config,
        res => {
          console.log(res, '---res');
          if (res?.status === "success") {
            sethide(true)
            Toast.show({
              text1: res?.message,
              type: 'success'
            });
          }
          else {
            Toast.show({
              text1: res?.message,
              type: 'error'
            });
          }
          // SetSendMessage(mess = res?.data, type = audioFile ? 'audio' : 'image')
          setLoading(false);
        },
        err => {
          console.log(err?.message, '---err');
          setLoading(false)
          // if (err?.message) {

          // }
        }
      );

    }


  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: Color.onPrimary, }}>
      {/* <StatusBarApp /> */}

      <View style={{ marginHorizontal: 20, marginTop: 20 }}>

        <TouchableOpacity style={{ flexDirection: 'row', width: 35 }} onPress={() => props.navigation.pop()}>
          <Image style={{ height: 35, width: 35, marginRight: 10, tintColor: Color.onSecondary, resizeMode: 'contain' }} source={require('../../Images/rezeetImg/left_arrow.png')} />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, marginHorizontal: 20 }}>

        <Image source={require('../../Images/rezeetImg/matka2.png')} style={{ height: 120, width: 120, resizeMode: 'contain', marginVertical: 10, alignSelf: 'center' }} />

        <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 30, fontWeight: '700', color: Color.primaryButt }}>Forgot Password</Text>
        <Text style={{ fontSize: 12, textAlign: 'center', color: Color.onSecondary, marginHorizontal: 20 }}>No worries! Enter your email address below and we will send you a code to reset password.</Text>
        <View style={{ flex: 1, marginTop: 50 }}>
          <Text style={{ marginVertical: 5, marginHorizontal: 10, color: Color.onSecondary, fontSize: 14 }}>Mobile Number</Text>

          <View style={{ width: '90%', height: 40, borderWidth: 0.5, borderRadius: 7, backgroundColor: '#EEEEEE', alignSelf: 'center', justifyContent: 'center' }}>

            <TextInput style={{ padding: 0, paddingHorizontal: 10, color: Color.primary }} placeholder="Enter your Mobile Number" placeholderTextColor={Color.primary}
              keyboardType='number-pad'
              maxLength={10}
              onChangeText={(text) => { setemail(text), setEmailError("") }}
              value={email}
            />
          </View>
          {emailError !== "" && <Text style={{ color: 'red', marginHorizontal: 20 }}>{emailError}</Text>}

          <TouchableOpacity style={{ alignSelf: 'center', marginTop: 80, marginHorizontal: 20, borderRadius: 10, padding: 8, width: '75%', borderWidth: 1, borderColor: Color.primary, justifyContent: 'center', backgroundColor: Color.primaryButt }} onPress={() => forgetPassword()}>
            {loading ?
              <View><ActivityIndicator size="large" color={Color.onPrimary} /></View> :
              <Text style={{ color: Color.onPrimary, textAlign: 'center', fontSize: 20, fontWeight: '500' }}>Send code</Text>
            }
          </TouchableOpacity>


        </View>
      </View>
      <VarifyOtp visible={hide} onClose={() => sethide(!hide)} navigation={navigation} email={email} />


    </ScrollView>
  )
}
export default ForgetPassword
