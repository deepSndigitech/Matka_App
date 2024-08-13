import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, ActivityIndicator, Modal, StatusBar } from 'react-native'
import React, { useState, useRef } from 'react'
import Toast from 'react-native-toast-message'
import { color } from '../../constantComponent/color';
// import { CountryPicker } from "react-native-country-codes-picker";
import { useSelector } from 'react-redux';
import VarifyOptions from '../../constantComponent/VarifyOptions';
// import VarifyNumber from '../../constantComponent/VarifyNumber';
import { APIRequestWithFile, apiMethod, apiRoutes, apimethods } from '../../apiConfig/apiurl';
import VarifyNumber from '../../constantComponent/VarifyNumber';
// import VarifyEmail from '../../constantComponent/VarifyEmail';
// import StatusBarApp from '../../constantComponent/StatusBar';

const SignUp = ({ navigation }) => {
  const Color = useSelector(state => state.Theme.Color)

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);


  const [countryCode, setCountryCode] = useState('+91');
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")
  const [pinError, setpinError] = useState("")
  const [pin, setpin] = useState("")
  const [passworderror, setPassworderror] = useState("")

  const [emailError, setemailError] = useState("")
  const [firstName, setfirstName] = useState("")
  const [firstNameError, setfirstNameError] = useState("")
  const [lastName, setlastName] = useState("")
  const [lastNameError, setlastNameError] = useState("")
  const [contact, setContact] = useState("");
  const [contacterror, setContacterror] = useState("");
  const [hide, sethide] = useState(true);

  const [emailVerified, setEmailVerified] = useState(false)
  const [contactVerified, setContactVerified] = useState(false)
  const [varifyContect, setvarifyContect] = useState(false);
  const [varifyemail, setvarifyemail] = useState(false);



  const isMobileValid = (password) => {
    return password.length > 9;
  };
  const ispinVerify = (password) => {
    return password.length > 3;
  };
  const isPasswordValid = (password) => {
    return password.length > 5;
  };
  const handleRegistration = () => {
    setContacterror("")
    setfirstNameError("")
    setPassworderror("")
    let isValid = true;




    if (!isMobileValid(contact)) {
      setContacterror("Please Enter Valid Phone Number .");
      isValid = false;
    }

    if (!isPasswordValid(password)) {
      setPassworderror("Please Enter Valid Password !");
      isValid = false;
    }
    if (firstName === "") {
      setfirstNameError("Please Enter First Name.");
      isValid = false;
    }


    if (isValid) {

      const registrationResult = { success: true };
      return registrationResult;
    } else {

      return { success: false };
    }
  };


  const submitSignUp = () => {
    const registrationResult = handleRegistration();
    if (registrationResult.success) {
      console.log("i am enter");

      const fd = new FormData();
      fd.append('full_name', firstName);
      fd.append('mobile', contact);
      fd.append('pin', 1234);
      fd.append('password', password);
      let config = {
        url: apiRoutes.register,
        method: 'post',
        body: fd
      };
      setLoading(true)
      APIRequestWithFile(
        config,
        res => {
          console.log(res, '---res');
          if (res?.status === "success") {
            setvarifyContect(true)
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


      <View style={{ marginHorizontal: 20, marginTop: 10 }}>

        <TouchableOpacity style={{ flexDirection: 'row', width: 35 }} onPress={() => navigation.pop()}>
          <Image style={{ height: 35, width: 35, marginRight: 10, tintColor: Color.onSecondary, resizeMode: 'contain' }} source={require('../../Images/rezeetImg/left_arrow.png')} />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, marginHorizontal: 20, }}>

        <Image source={require('../../Images/rezeetImg/matka2.png')} style={{ height: 120, width: 120, resizeMode: 'contain', marginVertical: 10, alignSelf: 'center' }} />

        <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: '900', color: Color.primaryButt }}>Register</Text>

        <View style={{ flex: 1, marginTop: 20 }}>
          <Text style={{ marginVertical: 5, marginHorizontal: 10, color: Color.onSecondary, fontSize: 14 }}>Full  Name</Text>
          <View style={{ width: '90%', height: 40, borderWidth: 0.5, borderRadius: 7, backgroundColor: '#EEEEEE', alignSelf: 'center', justifyContent: 'center' }}>

            <TextInput style={{ padding: 0, paddingHorizontal: 10, color: Color.primary }} placeholder="Enter your first name" placeholderTextColor={Color.primary}
              keyboardType='ascii-capable'
              onChangeText={(text) => { setfirstName(text), setfirstNameError("") }}
              value={firstName}
            />
          </View>
          {firstNameError !== "" && <Text style={{ color: 'red', marginHorizontal: 20 }}>{firstNameError}</Text>}



          <View style={{ marginTop: 5 }} />

          <Text style={{ marginVertical: 5, marginHorizontal: 10, color: Color.onSecondary, fontSize: 14 }}>Mobile no.</Text>
          <View style={{ width: '90%', height: 40, borderWidth: 0.5, borderRadius: 7, backgroundColor: '#EEEEEE', alignSelf: 'center', justifyContent: 'center' }}>

            <TextInput
              placeholder=' Mobile Number'
              placeholderTextColor={Color.primary}
              keyboardType='number-pad'
              maxLength={10}
              onChangeText={(text) => { setContact(text), setContacterror(""), setContactVerified(false) }}
              value={contact}
              style={{ padding: 0, paddingHorizontal: 10, color: Color.primary }} />


          </View>
          {contacterror && <Text style={{ color: 'red', marginHorizontal: 20 }}>{contacterror}</Text>
          }


          <View style={{ marginTop: 5 }} />
          <Text style={{ marginVertical: 5, marginHorizontal: 10, color: Color.onSecondary, fontSize: 14 }}>Password</Text>

          <View style={{ width: '90%', height: 40, borderWidth: 0.5, borderRadius: 7, backgroundColor: '#EEEEEE', alignSelf: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <TextInput style={{ padding: 0, width: '80%', color: Color.primary }} placeholder="Enter your password" placeholderTextColor={Color.primary} secureTextEntry={hide}
              onChangeText={(text) => { setPassword(text), setPassworderror("") }}
              value={password} />
            <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => sethide(!hide)} >
              <Image style={{ height: 25, width: 25, resizeMode: 'contain' }} source={hide ?
                require('../../Images/rezeetImg/hide.png') :
                require('../../Images/rezeetImg/show.png')
              } /></TouchableOpacity>
          </View>
          {passworderror !== "" && <Text style={{ color: 'red', marginHorizontal: 20 }}>{passworderror}</Text>}









          <TouchableOpacity style={{ alignSelf: 'center', marginTop: 100, marginHorizontal: 20, borderRadius: 10, padding: 6, width: '50%', borderWidth: 1, borderColor: Color.primaryButt, justifyContent: 'center', backgroundColor: Color.primaryButt }} onPress={() => submitSignUp()}>
            {loading ?
              <View><ActivityIndicator size="small" color="#FFF" /></View> :
              <Text style={{ color: Color.tertiary, textAlign: 'center', fontSize: 20, fontWeight: '700' }}>Create Account</Text>
            }
          </TouchableOpacity>

          <View style={{ marginTop: 30, alignSelf: 'center', flexDirection: 'row' }}>
            <Text style={{ color: Color.onSecondary }}>Already have an Account? ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{ fontWeight: '700', color: Color.onSecondary, textDecorationLine: 'underline' }}> Login Here</Text>
            </TouchableOpacity>
          </View>




          <VarifyNumber visible={varifyContect} onClose={() => setvarifyContect(!varifyContect)} countryCode={countryCode} contect={contact} setContactVerified={setContactVerified} navigation={navigation} />

        </View>
      </View>


    </ScrollView >
  )
}

export default SignUp