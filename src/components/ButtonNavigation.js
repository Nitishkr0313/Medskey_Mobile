// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // You can choose other icons as well

//Importing Five main Pages
import HomeScreen from '../pages/screens/HomeScreen';
import ChatScreen from '../pages/screens/ChatScreen';
import AppointmentScreen from '../pages/screens/AppointmentScreen';
import ProfileScreen from '../pages/screens/ProfileScreen';
import NotificationScreen from '../pages/screens/NotificationScreen';



const Tab = createBottomTabNavigator();

const ButtonNavigation = () => {
  return (
    
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#2664EF',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: 'white', 
            borderTopWidth: 1, 
            borderTopColor: 'gray',
          },
          labelStyle: {
            fontSize: 12,
            marginBottom: 5,
          },
          iconStyle: {
            marginBottom: -5,
          },
        }}
        screenOptions={{headerShown:false}}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color, size }) => (
              <Icon name="chatbubbles" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Appointment"
          component={AppointmentScreen}
          options={{
            tabBarLabel: 'Appointment',
            tabBarIcon: ({ color, size }) => (
              <Icon name="calendar" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarLabel: 'Notification',
            tabBarIcon: ({ color, size }) => (
              <Icon name="notifications" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
      </Tab.Navigator>
    
  );
};

export default ButtonNavigation;
