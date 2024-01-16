//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importing the All pages here
import Splash from './src/pages/Splash';
import ForgetPassword from './src/pages/ForgetPassword';
import VerificationPassword from './src/pages/VerificationPassword';
import ConnectDoctor from './src/pages/ConnectDoctor';
import Companion from './src/pages/Companion';
import Sliders from './src/pages/Sliders';
import Login from './src/pages/Login';
import Signup from './src/pages/SignUp';
import ResetPassword from './src/pages/ResetPassword';
import TopDoctor from './src/pages/TopDoctor';
import ButtonNavigation from './src/components/ButtonNavigation';
import FavoriteDoctorList from './src/pages/screens/FavoriteDoctorList'
import MassageSrceen from './src/pages/screens/MassageSrceen';
import VideoCallscreen from './src/pages/screens/VideoCallscreen';
import DoctorDetails from './src/pages/screens/DoctorDetails';
import ScheduleAppoinment from './src/pages/screens/ScheduleAppoinment';

const Stack = createNativeStackNavigator();
// create a component
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>

      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Sliders" component={Sliders} />
      <Stack.Screen name="ConnectDoctor" component={ConnectDoctor} />
      <Stack.Screen name="Companion" component={Companion} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="VerificationPassword" component={VerificationPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="TopDoctor" component={TopDoctor} />
      <Stack.Screen name="FavoriteDoctorList" component={FavoriteDoctorList} />
      <Stack.Screen name="MassageSrceen" component={MassageSrceen} />
      <Stack.Screen name="VideoCallscreen" component={VideoCallscreen} />
      <Stack.Screen name="DoctorDetails" component={DoctorDetails} />
      <Stack.Screen name="ScheduleAppoinment" component={ScheduleAppoinment} />


     
     
      <Stack.Screen
          name="ButtonNavigation"
          component={ButtonNavigation}
          options={{ headerShown: false }}
        />
      


    </Stack.Navigator>
  </NavigationContainer>
  );
};

//make this component available to the app
export default App;

