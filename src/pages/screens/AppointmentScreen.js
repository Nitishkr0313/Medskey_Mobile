//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchBarDoctor from '../../components/SearchBarDoctor';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/AntDesign';
import {doctordetails} from '../../constants/Data';
import {useNavigation} from '@react-navigation/native';
import ButtonTopNavigation from '../../components/ButtonTopNavigation';


// create a component
const AppointmentScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Upcoming');
  const navigation=useNavigation();

  const moveDoctordetails=()=>{
    navigation.navigate('DoctorDetails')
  }

  const renderCard = item => {
    return (
      <View>
        <View style={styles.cardContainer}>
          {/* Left Side */}
          <View style={styles.leftSide}>
            <Image source={item.images} style={styles.doctorImage} />
          </View>

          {/* Right Side */}
          <View style={styles.rightSide}>
            <View style={styles.title}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={[styles.heartIcon, {color: 'blue'}]}>💙</Text>
            </View>
            <Text style={styles.description}>{item.department}</Text>

            <TouchableOpacity style={styles.btn}>
              <Text style={{paddingRight: 10}}>{item.contactType}</Text>
              <Text
                style={{
                  color: '#2664EF',
                  borderColor: '#2664EF',
                  borderWidth: 1,
                  borderRadius: 6,
                  padding: 3,
                  fontSize:12,
                }}>
                {' '}
                Upcoming
              </Text>
            </TouchableOpacity>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{justifyContent: 'flex-start'}}>
                {item.day} | {item.time}
              </Text>
              <Text>
                <Icons name="star" size={20} color="#FFF44F" />
                <Text style={{marginLeft: 2}}>{item.rating}</Text>
              </Text>
            </View>
          </View>
        </View>
       
        <TouchableOpacity style={styles.bottom_btn}>
        <TouchableOpacity>
          <Text
            style={{
              paddingLeft: 6,
              paddingRight: 6,
              color: '#2664EF',
              borderColor: '#2664EF',
              borderWidth: 1,
              borderRadius: 20,
              padding: 3,
            }}>
            cancel Appointment
          </Text> 
          </TouchableOpacity>
          <TouchableOpacity onPress={moveDoctordetails}>
          <Text
            style={{
              paddingLeft: 50,
              paddingRight: 50,
              color: 'white',
              borderColor: '#2664EF',
              borderWidth: 1,
              borderRadius: 20,
              backgroundColor:'#2664EF',
              padding: 3,
            }}>
           Reshedule
          </Text> 
          </TouchableOpacity>
          
        </TouchableOpacity>
       
      </View>
    );
  };

  return (
    <View style={{backgroundColor:'white'}}>
      <View style={styles.appointment_header}>
        <Text>
          <Icon name="map-marker-alt" size={25} color="#2664EF" />{' '}
        </Text>
        <Text style={{marginLeft: 10, color: 'black', fontSize: 14,fontWeight:'600'}}>
          Appointments
        </Text>
      </View>
      <View style={{paddingHorizontal:10,marginTop:12}}>
      <SearchBarDoctor />
      </View>
      <View style={styles.group_btn}>
      <TouchableOpacity
        style={[
          styles.button,
          selectedTab === 'Upcoming' 
        ]}
        onPress={() => setSelectedTab('Upcoming')}>
        <Text style={selectedTab === 'Upcoming' ? styles.primaryText && styles.activeText : styles.defaultText}>
          Upcoming
        </Text>
      </TouchableOpacity>
    
      <TouchableOpacity
        style={[
          styles.button,
          selectedTab === 'Completed' 
        ]}
        onPress={() => setSelectedTab('Completed')}>
        <Text style={selectedTab === 'Completed' ? styles.primaryText && styles.activeText : styles.defaultText}>
          Completed
        </Text>
      </TouchableOpacity>
    
      <TouchableOpacity
        style={[
          styles.button,
          selectedTab === 'Cancel' 
        ]}
        onPress={() => setSelectedTab('Cancel')}>
        <Text style={[styles.text_Color, selectedTab === 'Cancel' && styles.primaryText && styles.activeText]}>
          Cancelled
        </Text>
      </TouchableOpacity>
    </View>
    
    
      <FlatList
      showsVerticalScrollIndicator={false}
        data={doctordetails}
        renderItem={({item}) => renderCard(item)}
        keyExtractor={item => item.id.toString()}
        style={{elevation:2}}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,

    backgroundColor: '#fff',
    paddingHorizontal:10
  },
  appointment_header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 8,
    marginTop: 6,
    marginBottom: 4,
    paddingHorizontal:10
  },
  group_btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    paddingLeft:6,
    paddingRight:6,
  },
  button: {
    padding: 5,
    marginRight: 5,
    color: 'white',
  },
  primaryButton: {
    marginTop: 2,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    borderRadius: 50,
  },
  text_Color: {
    text_Color: 'white',
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
    fontSize: 16,
    color: 'blue',
  },
  name: {
    color: 'black',
  },
  btn: {
    flexDirection: 'row',
  },
  bottom_btn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  primaryText:{
  color:'#2664EF',
  },
  defaultText:{
    color:'gray',
  },
  activeText: {
    fontWeight:'600',
    textDecorationLine: 'underline',
    color:'#2664EF',
  },
});

export default AppointmentScreen;
