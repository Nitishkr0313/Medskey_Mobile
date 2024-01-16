//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconss from 'react-native-vector-icons/Ionicons';
import Payment from 'react-native-vector-icons/MaterialIcons';
import Term from 'react-native-vector-icons/Foundation';
import {assets} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import Iconsss from 'react-native-vector-icons/Feather';

// create a component
const ProfileScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigation = useNavigation();
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
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.profile_header}>
        <Text>
          <Icon name="map-marker-alt" size={20} color="#2664EF" />{' '}
        </Text>
        <Text
          style={{
            marginLeft: 6,
            color: 'black',
            fontSize: 14,
            fontWeight: '500',
          }}>
          Profile
        </Text>
      </View>
      <View style={styles.cardContainer}>
        <Image source={assets.nitin} style={styles.doctorImage} />
        <TouchableOpacity style={styles.iconContainer}>
          {/* Your icon components go here */}
          {/* Example: */}
          <Iconsss
            name="edit-2"
            size={16}
            color="#0d6efd"
           
            style={{backgroundColor:'white',borderRadius:3,borderWidth:0.1}}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Dr.Ahtisham Naiz Khan</Text>
        <Text style={styles.sub_title}>ahtishamniazkhan786@gmail.com</Text>
        <Text style={styles.sub_title}>+91 966273865</Text>
      </View>

      <View style={styles.profile_Container}>
        <TouchableOpacity style={styles.title_container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginLeft: 10,
            }}>
            <Text>
              <Icons name="clock-edit-outline" size={20} color="#2664EF" />
            </Text>
            <Text style={{marginLeft: 10, color: 'black'}}>Edit Profile</Text>
          </View>
          <View style={{justifyContent: 'flex-end', marginRight: 8}}>
            <Text>
              <Iconss name="chevron-forward-sharp" size={20} color="#858585" />
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.hrLine} />
        <TouchableOpacity style={styles.title_container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginLeft: 10,
            }}>
            <Text>
              <Iconss name="notifications-outline" size={20} color="#2664EF" />
            </Text>
            <Text style={{marginLeft: 10, color: 'black'}}>
              Notification Seating
            </Text>
          </View>
          <View style={{justifyContent: 'flex-end', marginRight: 8}}>
            <Text>
              <Iconss name="chevron-forward-sharp" size={20} color="#858585" />
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.hrLine} />
        <TouchableOpacity style={styles.title_container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginLeft: 10,
            }}>
            <Text>
              <Payment name="payments" size={20} color="#2664EF" />
            </Text>
            <Text style={{marginLeft: 10, color: 'black'}}>Payment</Text>
          </View>
          <View style={{justifyContent: 'flex-end', marginRight: 8}}>
            <Text>
              <Iconss name="chevron-forward-sharp" size={20} color="#858585" />
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.hrLine} />
        <TouchableOpacity style={styles.title_container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginLeft: 10,
            }}>
            <Text>
              <Payment name="security" size={20} color="#2664EF" />
            </Text>
            <Text style={{marginLeft: 10, color: 'black'}}>Security</Text>
          </View>
          <View style={{justifyContent: 'flex-end', marginRight: 8}}>
            <Text>
              <Iconss name="chevron-forward-sharp" size={20} color="#858585" />
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.hrLine} />
        <TouchableOpacity style={styles.title_container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginLeft: 10,
            }}>
            <Text>
              <Payment name="help-outline" size={20} color="#2664EF" />
            </Text>
            <Text style={{marginLeft: 10, color: 'black'}}>Help & Support</Text>
          </View>
          <View style={{justifyContent: 'flex-end', marginRight: 8}}>
            <Text>
              <Iconss name="chevron-forward-sharp" size={20} color="#858585" />
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.hrLine} />
        <TouchableOpacity style={styles.title_container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginLeft: 10,
            }}>
            <Text>
              <Term name="clipboard-notes" size={20} color="#2664EF" />
            </Text>
            <Text style={{marginLeft: 10, color: 'black'}}>
              Terms & Conditions{' '}
            </Text>
          </View>
          <View style={{justifyContent: 'flex-end', marginRight: 8}}>
            <Text>
              <Iconss name="chevron-forward-sharp" size={20} color="#858585" />
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.hrLine} />
        <TouchableOpacity
          style={styles.title_container}
          onPress={() => {
            setSelectedItem();
            setModalVisible(true);
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginLeft: 10,
            }}>
            <Text>
              <Payment name="logout" size={20} color="#bc131f" />
            </Text>
            <Text style={{marginLeft: 10, color: '#cb2c31', fontWeight: '500'}}>
              Logout
            </Text>
          </View>
          <View style={{justifyContent: 'flex-end', marginRight: 8}}>
            <Text>
              <Iconss name="chevron-forward-sharp" size={20} color="#858585" />
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          }}>
          <View style={styles.modalContainer}>
            {renderModalContent}
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.modalTitle}>
              <Text
                style={{
                  color: '#bc131f',
                  fontWeight: 12,
                  fontWeight: '700',
                  marginTop: 8,
                }}>
                Logout
              </Text>
              <View style={styles.hrLine} />
              <View>
                <View>
                  <Text
                    style={{marginTop: 30, color: 'black', fontWeight: '500'}}>
                    {' '}
                    Are you sure want to log out?
                  </Text>

                  <View style={{flexDirection: 'row', marginTop: 30}}>
                    <TouchableOpacity
                      style={{backgroundColor: 'white', color: 'black'}}
                      onPress={() => {
                        setModalVisible(false);
                      }}>
                      <Text
                        style={{
                          marginLeft: 4,
                          fontSize: 12,
                          marginTop: 6,
                          backgroundColor: '#A8C1FA',
                          borderRadius: 30,
                          paddingTop: 6,
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingBottom: 6,
                          color: '#2664EF',
                        }}>
                        Cancel
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        backgroundColor: 'primary',
                        color: 'white',
                      }}
                      onPress={() => {
                        navigation.navigate('Login');
                      }}>
                      <Text
                        style={{
                          marginLeft: 10,
                          fontWeight: 12,
                          fontSize: 14,
                          marginTop: 6,
                          backgroundColor: '#2664EF',
                          color: 'white',
                          borderRadius: 30,
                          paddingTop: 6,
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingBottom: 6,
                        }}>
                        Yes,Logout
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
  profile_Container: {
    margin: 5,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  profile_header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 8,
    marginTop: 6,
  },
  cardContainer: {
    position: 'relative',
    marginTop: 18,
    backgroundColor: '#2664EF',
    justifyContent: 'center',
    alignItems: 'center',
    width: '96%',
    borderRadius: 12,
    paddingBottom: 18,
    marginLeft: 7,
  },
  title_container: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'gray',
    marginBottom: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 16,
    color: 'white',
    marginTop: 8,
  },
  title: {
    color: 'white',
    fontSize: 15,
  },
  sub_title: {
    color: 'white',
    fontSize: 12,
  },
  doctorImage: {
    width: 100, // Set a proper width
    height: 100, // Set a proper height
    marginTop: 18,
    width: 65,
    height: 65,
    borderRadius: 50,
    justifyContent: 'center',
    marginBottom: 5,
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
  iconContainer: {
    position: 'absolute',
    bottom: 80,
    right: 153,
    backgroundColor: 'transparent', // Set a proper background color
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    // padding: 10,
  },
  modalTitle: {
    marginTop: 2,
    alignItems: 'center',
  },
  hrLine: {
    marginTop: 9,
    borderBottomColor: '#c5c7c5',
    borderBottomWidth: 0.2,
    height: 0.5,
    width: '90%',
    alignSelf: 'center',
  },
});

export default ProfileScreen;
