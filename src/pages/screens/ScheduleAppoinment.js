//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Calender from '../../components/Calender';
import Btn from '../../components/Btn';
import {primaryColor} from '../../constants/constant';
import TimeButtonGroup from '../../components/TimeButtonGroup';

// create a component
const ScheduleAppoinment = () => {
  const navigation = useNavigation();
  const backPageNavigation = () => {
    navigation.goBack();
  };
  const buttons = [
    {text: ' 09:00AM', id: 1},
    {text: ' 09:30AM', id: 2},
    {text: ' 09:45AM', id: 3},
    {text: ' 10:00AM', id: 4},
    {text: ' 10:30AM', id: 5},
    {text: ' 10:45AM', id: 6},
    {text: ' 11:00AM', id: 7},
    {text: ' 11:30AM', id: 8},
    {text: ' 11:45AM', id: 9},
    {text: ' 12:00AM', id: 10},
    {text: ' 12:30AM', id: 11},
    {text: ' 12:45AM', id: 12},
  ];
  return (
    <View style={{backgroundColor:'white'}}>
      <View style={styles.navbar}>
        <Icon
          name="left"
          size={18}
          color="black"
          onPress={backPageNavigation}
        />
        <Text
          style={{
            fontSize: 14,
            color: 'black',
            marginLeft: 28,
            fontWeight: '500',
          }}>
          Schedule an Appointment
        </Text>
      </View>
      <View>
        <Text style={{margin: 20, color: 'black', fontWeight: '700'}}>
          Select date
        </Text>
        <View style={styles.calender_card}>
          <Calender />
        </View>
      </View>
      <View>
        <Text style={{margin: 10,paddingBottom:12,paddingLeft:8, color: 'black', fontWeight: '700'}}>
          Select time
        </Text>
        <View style={styles.card}>
          <View style={styles.buttonRow}>
            {buttons.map(button => (
              <TouchableOpacity
                key={button.id}
                style={styles.button}
                onPress={() => {
                  // Handle button press
                }}>
                <Text style={{color: '#2664EF',fontWeight:'500'}}>{button.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <Text style={{alignSelf: 'center', marginTop:20}}>
        {' '}
        <Btn
          textColor="white"
          bgColor={primaryColor}
          btnLabel=" Get Appoinment "
          Press={backPageNavigation}
        />
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  navbar: {
    flexDirection: 'row',
    marginTop: 10,
  },
  calender_card: {
    width: '90%',
    height: 270,
    backgroundColor: '#D4E0FC',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btngrupcontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom:14,
  },
  card: {
    
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  button: {
    margin: 4,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: '#2664EF',
    borderWidth: 0.5,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

//make this component available to the app
export default ScheduleAppoinment;
