import React from 'react';
import Home from '../pages/Home/Home';
import Sidebar from './Sidebar';
import Profile from '../pages/Profile/Profile';
import Welcome from './Welcome';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import ForgetPassword from '../pages/ForgetPassword/ForgetPassword';
import ConfirmePassword from '../pages/ForgetPassword/ConfirmePassword';

export default function (Stack) {
  return (
    <>

      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConfirmePassword"
        component={ConfirmePassword}
        options={{ headerShown: false }}
      />
    </>
  )
}