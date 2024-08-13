import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import MainStack from './MainStack';
import AuthStack from './AuthStack';
import Splash from './Splash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from 'react-native';
import { setLogin } from '../reduxToolkit/LoginSlice';
import { useDispatch, useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const Route = ({navigation}) => {

    // const [isLogIn, setisLogIn] = useState(false)
    const [loarding, setloarding] = useState(true)
    const [token, setToken] = useState("")
    const dispatch = useDispatch()
    const isLogIn = useSelector(state => state.isLogin?.isLogin)




    // console.log("asdsdsad");

    useEffect(() => {
        GetToken()

        setTimeout(() => {
            setloarding(false)
        }, 2000);

    }, []);

    const GetToken = async () => {
        const token = await AsyncStorage.getItem('token').catch(err => console.log(err, '----- token err'));
        console.log("token@",token);
        if (token) {
            dispatch(setLogin(true))
        }
    }

    // console.log("token", token);


    return (

        <>
            {/* <StatusBarApp /> */}
            {loarding ?
                <>
                    <Splash />
                </>
                :

                <NavigationContainer fallback={<Text>Loading...</Text>}>
                    <Stack.Navigator >

                        {isLogIn ? MainStack(Stack) : AuthStack(Stack)}
                    </Stack.Navigator>
                </NavigationContainer>
            }

        </>
    )
}

export default Route
