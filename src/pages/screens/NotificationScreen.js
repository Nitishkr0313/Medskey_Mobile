//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Entypo';
import Iconss from 'react-native-vector-icons/EvilIcons';

// create a component
const NotificationScreen = () => {
  return (
    <View style={{backgroundColor:'white'}}>
      <View style={styles.notification_header}>
        <Text>
          <Icon name="map-marker-alt" size={25} color="#2664EF" />{' '}
        </Text>
        <Text style={{marginLeft: 6, color: 'black', fontSize: 14,fontWeight:'500'}}>
          Notifications
        </Text>
      </View>
      <View style={styles.card_notification}>
      <View style={styles.card_container}>
        <View>
          <TouchableOpacity style={styles.card_notifivation1}>
            <Icons
              name="squared-cross"
              size={30}
              style={{
                color: '#ff4554',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{paddingRight: 70}}>
          <Text style={{paddingRight: 20, color: 'black', fontWeight: '600'}}>
            Appoinment Cancelled{'\n'}{'\n'}
            <Text style={{color: 'gray',fontSize:12}}>Today    |     12:00PM</Text>
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: '#2664EF',
              color: 'white',
              padding: 3,
              paddingLeft: 12,
              paddingRight: 12,
              borderRadius: 3,
              fontSize:12
            }}>
            New
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{margin: 6,fontSize:12,padding:4}}>
        You have successfully cancelled your appoinment with Dr.Khadim khan on
        july 31,2023,12:00pm 80% of the funds will be returened to your account,
      </Text>
      <View style={styles.card_container}>
        <View>
          <TouchableOpacity style={styles.card_notifivation2}>
            <Iconss
              name="calendar"
              size={30}
              style={{
                color: '#2664EF',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{paddingRight: 70}}>
          <Text style={{paddingRight: 20, color: 'black', fontWeight: '600'}}>
            Appoinment Success{'\n'}{'\n'}
            <Text style={{color: 'gray',fontSize:12}}>Today    |     12:00PM</Text>
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: '#2664EF',
              color: 'white',
              padding: 3,
              paddingLeft: 12,
              paddingRight: 12,
              borderRadius: 3,
              fontSize:12
            }}>
            New
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{margin: 6,fontSize:12,padding:4}}>
        You have successfully cancelled your appoinment with Dr.Khadim khan on
        july 31,2023,12:00pm 80% of the funds will be returened to your account,
      </Text>
      <View style={styles.card_container}>
        <View>
          <TouchableOpacity style={styles.card_notifivation3}>
            <Iconss
              name="calendar"
              size={30}
              style={{
                color: 'green',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{paddingRight: 70}}>
          <Text style={{paddingRight: 20, color: 'black', fontWeight: '600'}}>
            Schedule Changed{'\n'}{'\n'}
            <Text style={{color: 'gray',fontSize:12}}>Yesterday    |     9:00PM</Text>
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: '#2664EF',
              color: 'white',
              padding: 3,
              paddingLeft: 12,
              paddingRight: 12,
              borderRadius: 3,
              fontSize:12
            }}>
            New
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{margin: 6,fontSize:12,padding:4}}>
        You have successfully cancelled your appoinment with Dr.Khadim khan on
        july 31,2023,12:00pm 80% of the funds will be returened to your account,
      </Text>
      <View style={styles.card_container}>
        <View>
          <TouchableOpacity style={styles.card_notifivation4}>
            <Iconss
              name="credit-card"
              size={30}
              style={{
                color: '#2664EF',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{paddingRight: 70}}>
          <Text style={{paddingRight: 20, color: 'black', fontWeight: '600'}}>
            Credit Card Connected{'\n'}{'\n'}
            <Text style={{color: 'gray',fontSize:12}}>Yesterday    |     11:00PM</Text>
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: '#2664EF',
              color: 'white',
              padding: 3,
              paddingLeft: 12,
              paddingRight: 12,
              borderRadius: 3,
              fontSize:12
            }}>
            New
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{margin: 6,fontSize:12,padding:4}}>
        You have successfully cancelled your appoinment with Dr.Khadim khan on
        july 31,2023,12:00pm 80% of the funds will be returened to your account,
      </Text>
      <View style={styles.card_container}>
      <View>
        <TouchableOpacity style={styles.card_notifivation3}>
          <Iconss
            name="calendar"
            size={30}
            style={{
              color: 'green',
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{paddingRight: 70}}>
        <Text style={{paddingRight: 20, color: 'black', fontWeight: '600'}}>
          Schedule Changed{'\n'}{'\n'}
          <Text style={{color: 'gray', fontSize:12}}>Today    |     12:00PM</Text>
        </Text>
      </View>
      <TouchableOpacity>
        <Text
          style={{
            backgroundColor: '#2664EF',
            color: 'white',
            padding: 3,
            paddingLeft: 12,
            paddingRight: 12,
            borderRadius: 3,
            fontSize:12
          }}>
          New
        </Text>
      </TouchableOpacity>
    </View>
      <Text style={{margin: 6,fontSize:12,padding:4}}>
        You have successfully cancelled your appoinment with Dr.Khadim khan on
        july 31,2023,12:00pm 80% of the funds will be returened to your account,
      </Text>
     </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  card_notification:{
    margin:3
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  notification_header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 8,
    marginTop: 6,
    marginBottom: 6,
  },
  card_notifivation1: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0dad8',
  },
  card_notifivation2: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4E0FC',
  },
  card_notifivation3: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6ffe6',
  },
  card_notifivation4: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4E0FC',
  },
  card_container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // elevation:0.5,
    
  },
});

//make this component available to the app
export default NotificationScreen;
