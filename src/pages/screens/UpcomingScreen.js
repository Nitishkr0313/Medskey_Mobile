//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet,FlatList,Image,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {doctordetails} from '../../constants/Data';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SearchBarDoctor from '../../components/SearchBarDoctor';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/AntDesign';


// create a component
const UpcomingScreen = () => {
    // const [selectedTab, setSelectedTab] = useState('Upcoming');
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
                  borderRadius: 20,
                  padding: 3,
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
                backgroundColor: '#2664EF',
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
    <View style={styles.container}>
      <FlatList
        data={doctordetails}
        renderItem={({item}) => renderCard(item)}
        keyExtractor={item => item.id.toString()}
      />
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
  appointment_header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 8,
    marginTop: 6,
    marginBottom: 4,
  },
  group_btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 2,
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
  btn: {
    flexDirection: 'row',
  },
  bottom_btn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

//make this component available to the app
export default UpcomingScreen;
