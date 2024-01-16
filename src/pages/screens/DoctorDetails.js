//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Iconss from 'react-native-vector-icons/AntDesign';
import {assets} from '../../../assets';
import { primaryColor } from '../../constants/constant';
import Btn from '../../components/Btn';

// create a component
const DoctorDetails = () => {
  const navigation = useNavigation();
  const backPageNavigation = () => {
    navigation.goBack();
  };
  const goScheduleAppoinmentPage=()=>{
    navigation.navigate('ScheduleAppoinment')
  }
  return (
    <View  style={{backgroundColor:'white'}}>
      <View style={styles.navbar}>
        <TouchableOpacity></TouchableOpacity>
        <Icon
          name="left"
          size={18}
          color="black"
          onPress={backPageNavigation}
          style={{marginLeft:10}}
        />
        <Text style={{fontSize: 14, color: 'black', marginLeft: 28,fontWeight:'500'}}>
          Doctor Details
        </Text>
      </View>
      <View style={styles.cardContainer}>
        {/* Left Side */}
        <View style={styles.leftSide}>
          <Image source={assets.alina} style={styles.doctorImage} />
        </View>

        {/* Right Side */}
        <View style={styles.rightSide}>
          <View style={styles.title}>
            <Text style={styles.name}>Dr. Ashley Janelle</Text>
            <Text style={[styles.heartIcon, {color: 'blue'}]}>💙</Text>
          </View>
          <View>
            <Text style={styles.description}>Anthologist</Text>
            <Text>Available at Aga khan Hospital Gilgit</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{justifyContent: 'flex-start'}}>
              <Icons name="map-marker-alt" size={20} />   Gilgit Baltistan
             
            </Text>
            <Text>
              <Iconss name="star" size={20} color="#FFF44F" />{' '}
              <Text style={{marginLeft: 2}}>4.1</Text>
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text
          style={{
            marginLeft: 16,
            fontSize: 16,
            color: 'black',
            fontWeight: '500',
          }}>
          Biography
        </Text>
        <Text
          style={{
            marginLeft: 18,
            fontSize: 12,
            color: 'gray',
            fontWeight: '700',
          }}>
          Dr.Ashley is a Dentist in{'\n'} IGMS, she has 20 years of
          experience....
          <Text style={{color: '#2664EF', fontWeight: '700'}}>Read More</Text>
        </Text>
      </View>
      <View>
        <Text style={styles.title_name}>Specialities</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 8,
          }}>
          <TouchableOpacity>
            <Text style={styles.btn_style}>Dental Surgeon</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.btn_style}>Aesthetic Surgeon </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.btn_style}>General Surgeon </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 14,
            padding: 4,
          }}>
          <Text
            style={{
              marginLeft: 16,
              fontSize: 16,
              color: 'black',
              fontWeight: '500',
            }}>
            Available Date
          </Text>
          <Text style={{marginLeft: 190}}>July</Text>
          <Icon name="right" size={20} color="gray" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 8,
          }}>
          <TouchableOpacity>
            <Text style={styles.calender}>14{'\n'}Mon</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.calender}>15{'\n'}Tue</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                borderWidth: 0.2,
                marginTop: 10,
                borderColor: 'gray',
                borderRadius: 5,
                color: 'white',
                padding: 6,
                backgroundColor: '#0d6efd',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              16{'\n'}Wed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.calender}>17{'\n'}Thrus</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.calender}>18 {'\n'}Fri</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 14,
            padding: 4,
          }}>
          <Text
            style={{
              marginLeft: 16,
              fontSize: 16,
              color: 'black',
              fontWeight: '500',
            }}>
            Time
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 8,
          }}>
          <TouchableOpacity>
            <Text style={styles.time}>09:00AM</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                borderWidth: 0.2,
                marginTop: 10,
                borderColor: 'gray',
                borderRadius: 40,
                color: 'white',
                padding: 6,
                backgroundColor: '#0d6efd',
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight:20,
                paddingLeft:20,
              }}>
              11:00AM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.time}>03:00AM </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop:40}}>
        <Text style={styles.title_name}>Working Schedule</Text>
        <Text style={{marginLeft: 16}}>Monday-Friday 8:00AM- 05:00Am</Text>
      </View>
       <Text style={{alignSelf:'center',marginTop:16}} >
      <Btn
          textColor="white"
          bgColor={primaryColor}
          btnLabel=" Get Appoinment "
          Press={goScheduleAppoinmentPage}
         
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
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    margin: 12,
    elevation:2,
  },
  leftSide: {
    flex: 0.2,
    marginRight: 16,
  },
  rightSide: {
    flex: 0.8,
  },
  title: {
    flexDirection: 'row',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'space-between',
    marginRight: '50',
  },
  description: {
    fontSize: 12,
    color: 'black',
  },
  doctorImage: {
    width: 65,
    height: 80,
    borderRadius: 4,
  },
  heartIcon: {
    fontSize: 20,
    color: 'blue',
  },
  name: {
    color: 'black',
  },
  btn_style: {
    borderWidth: 0.3,
    borderColor: '#E9DBFB',
    borderRadius: 40,
    color: 'gray',
    padding: 8,
    fontSize:12,
    fontWeight:'400',
  },
  title_name: {
    marginTop: 25,
    marginLeft: 16,
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  calender: {
    marginTop: 10,
    borderWidth: 0.2,
    borderColor: 'gray',
    borderRadius: 5,
    color: 'black',
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  time:{
    marginTop: 10,
    borderWidth: 0.2,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight:20,
    paddingLeft:20,
    
  },
  footer_btn: {},
  footer_btn_text: {
    height: 25,
    alignItems: 'center',
    color: 'white',
    fontSize: 16,
    backgroundColor: '#2664EF',
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 16,
    alignItems: 'center',
  },
});

//make this component available to the app
export default DoctorDetails;
