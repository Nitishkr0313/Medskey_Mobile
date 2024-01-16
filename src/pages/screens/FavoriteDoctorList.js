//import liraries
import React, {Component, useState} from 'react';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {assets} from '../../../assets';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  LogBox,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/AntDesign';
import {doctordetails} from '../../constants/Data';
import Ions from 'react-native-vector-icons/Ionicons';
// import {BlurView} from '@react-native-community/blur';

// create a component
const FavoriteDoctorList = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  //const navigation=useNavigation();
  //   const homeNavigation = () => {
  //       navigation.navigate('HomeScreen');
  //     };

  const renderModalContent = () => {
    console.log('happening');

    if (!selectedItem) {
      return null;
    }

    // Add JSX content for modal here based on selectedItem
    return (
      <View>
        <Text>{selectedItem.name}</Text>
        {/* Add more details as needed */}
      </View>
    );
  };

  const renderCard = item => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.leftSide}>
          <Image source={item.images} style={styles.doctorImage} />
        </View>

        <View style={styles.rightSide}>
          <View style={styles.title}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={[styles.heartIcon, {color: 'blue'}]}>💙</Text>
          </View>
          <View>
            <Text style={styles.description}>{item.department}</Text>
            <Text>{item.hospitalName}</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{justifyContent: 'flex-start'}}>
              <Icon name="map-marker-alt" size={20} /> {item.location}
            </Text>
            <Text>
              <Icons name="star" size={20} color="#FFF44F" />{' '}
              <Text style={{marginLeft: 2}}>{item.rating}</Text>
            </Text>
          </View>
        </View>
        
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          height: 24,
          marginTop: 6,
          marginBottom:6,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ions name="chevron-back-outline" size={20} color="#474747" style={{marginRight:70}} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#474747',
            marginRight: 130,
          }}>
          Favroite Doctors
        </Text>
        <TouchableOpacity>
          <Ions name="search" size={20} color="#474747" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={doctordetails}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedItem(item);
              setModalVisible(true);
            }}>
            {renderCard(item)}
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />

      <Modal visible={isModalVisible} transparent={true} animationType="fade">
      
        <View
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center',backgroundColor: 'rgba(0, 0, 0, 0.7)', }}>
          <View style={styles.modalContainer}>
            {renderModalContent}
            <TouchableOpacity
              // onPress={() => setModalVisible(false)}
              style={styles.modalTitle}>
              <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
                Remove from Favorite?
              </Text>
              <View style={styles.hrLine} />
              <View style={styles.cardContainer}>
                <View style={styles.leftSide}>
                  <Image source={assets.anil} style={styles.doctorImage} />
                </View>

                <View style={styles.rightSide}>
                  <View style={styles.title}>
                    <Text style={styles.name}> Dr.Khadim Khan</Text>
                    <Text style={[styles.heartIcon, {color: 'blue'}]}>💙</Text>
                  </View>
                  <View>
                    <Text style={styles.description}>Dentist</Text>
                    <Text>Available at Aga khan Hospital Gilgit</Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{justifyContent: 'flex-start'}}>
                      <Icon name="map-marker-alt" size={20} /> Gilgit Baltistan
                    </Text>
                    <Text>
                      <Icons name="star" size={20} color="#FFF44F" />{' '}
                      <Text style={{marginLeft: 2}}>4.2</Text>
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <TouchableOpacity
                      style={{backgroundColor: 'white', color: 'black'}}
                      onPress={() => {
                        // Handle Cancel button press
                        setModalVisible(false); // Close the modal
                      }}>
                      <Text
                        style={{
                          marginLeft: 2,
                          fontSize: 12,
                          marginTop: 6,
                          backgroundColor: '#A8C1FA',
                          borderRadius: 30,
                          padding: 6,
                          paddingLeft: 18,
                          paddingRight: 18,
                          color: '#2664EF',
                        }}>
                        Cancel
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        backgroundColor: 'primary',
                        color: 'white',
                        marginLeft: 10,
                      }}
                      onPress={() => {
                        // Handle Confirm,Remove button press
                      }}>
                      <Text
                        style={{
                          marginLeft: 10,
                          fontSize: 12,
                          marginTop: 6,
                          backgroundColor: '#2664EF',
                          color: 'white',
                          borderRadius: 30,
                          padding: 6,
                          paddingLeft: 17,
                          paddingRight: 17,
                        }}>
                        Confirm,Remove
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
      </Modal>
      
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    margin: 10,
    elevation:2
  },
  container: {
    backgroundColor: 'white',
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
    marginRight: 4,
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
    color: '#333333',
    fontWeight: '600',
  },
  headers: {
    justifyContent: 'space-evenly',
  },
  modalTitle: {
    marginTop: 2,
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 16,
    width: '100%',
    height: '30%',
    borderTopEndRadius: 70,
    borderTopLeftRadius: 70,

    // borderTopColor: 'gray',
  },
  hrLine: {
    marginTop: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    height: 0.5,
    width: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

//make this component available to the app
export default FavoriteDoctorList;
