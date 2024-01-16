import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importing the All pages here
import Splash from './pages/Splash';
import BookedDoctor from './pages/BookedDoctor';
import ConnectDoctor from './pages/ConnectDoctor';
import Companion from './pages/Companion';


const Stack = createNativeStackNavigator();
const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="BookedDoctor" component={BookedDoctor} />
        <Stack.Screen name="ConnectDoctor" component={ConnectDoctor} />
        <Stack.Screen name="Companion" component={Companion} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route