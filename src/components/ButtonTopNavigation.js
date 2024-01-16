import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AppointmentScreen from '../pages/screens/AppointmentScreen';
import CmpltAppoinment from '../pages/screens/AppointmentScreen';
import CancelAppoinment from '../pages/screens/CancelAppoinment';
import UpcomingScreen from '../pages/screens/UpcomingScreen';

const Tab = createMaterialTopTabNavigator();

const  ButtonTopNavigation=()=>{
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="UpcomingScreen"
        component={UpcomingScreen}
        options={{ tabBarLabel: 'Upcoming' }}
      />
      <Tab.Screen
        name="CmpltAppoinment"
        component={CmpltAppoinment}
        options={{ tabBarLabel: 'Completed' }}
      />
      <Tab.Screen
        name="CancelAppoinment"
        component={CancelAppoinment}
        options={{ tabBarLabel: 'Cancel' }}
      />
    </Tab.Navigator>
  );
}

export default ButtonTopNavigation;