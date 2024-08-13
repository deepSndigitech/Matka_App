import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setLogin } from '../reduxToolkit/LoginSlice';

const MyDrawer = ({ navigation }) => {


  // const dispatch = useDispatch()
  const Color = useSelector(state => state.Theme.Color)
  const isDarkMode = useSelector(state => state.Theme.isDarkMode)
  console.log("isDarkMode", isDarkMode, Color);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false)

  const logoutScreen = async () => {
    await AsyncStorage.removeItem('token');
    dispatch(setLogin(false))

    navigation.navigate('Welcome')

  }


  return (
    <View style={{ flex: 1, backgroundColor: Color.primary }}>
      <View style={{ marginTop: 30, marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 30 }}>
          <TouchableOpacity style={{ height: 40, width: 50, justifyContent: 'center', alignItems: 'center', }} activeOpacity={0.6} onPress={() => navigation.toggleDrawer()}>
            <Image source={require('../Images/close4.png')} style={{ height: 20, width: 20, tintColor: '#FFF' }} />

          </TouchableOpacity>

        </View>

        <View style={{ marginHorizontal: 10 }}>
          <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }} onPress={() => navigation.navigate('Profile')}>
            <Image style={{ resizeMode: 'contain', height: 30, width: 30, tintColor: '#FFF' }} source={require('../Images/rezeetImg/profile.png')} />
            <Text style={{ marginLeft: 15, fontSize: 18, fontWeight: '700', color: '#FFF' }}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }} onPress={() => navigation.navigate('Support')}>
            <Image style={{ resizeMode: 'contain', height: 30, width: 30, tintColor: '#FFF' }} source={require('../Images/rezeetImg/customer-support.png')} />
            <Text style={{ marginLeft: 15, fontSize: 18, fontWeight: '700', color: '#FFF' }}>Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }} onPress={() => navigation.navigate('Term_Condition')}>
            <Image style={{ resizeMode: 'contain', height: 30, width: 30, tintColor: '#FFF' }} source={require('../Images/rezeetImg/term.png')} />
            <Text style={{ marginLeft: 15, fontSize: 18, fontWeight: '700', color: '#FFF' }}>Terms & Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }} onPress={() => navigation.navigate('Privacy_Policy')}>
            <Image style={{ resizeMode: 'contain', height: 30, width: 30, tintColor: '#FFF' }} source={require('../Images/rezeetImg/term.png')} />
            <Text style={{ marginLeft: 15, fontSize: 18, fontWeight: '700', color: '#FFF' }}>Privacy Policy</Text>
          </TouchableOpacity>







          <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }} onPress={() => logoutScreen()}>
            <Image style={{ resizeMode: 'contain', height: 30, width: 30, tintColor: '#FFF' }} source={require('../Images/rezeetImg/logout.png')} />
            <Text style={{ marginLeft: 15, fontSize: 18, fontWeight: '700', color: '#FFF' }}>Logout</Text>
          </TouchableOpacity>

        </View>



      </View>

    </View>
  );
};


export default MyDrawer