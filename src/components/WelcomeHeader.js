import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {assets} from '../../assets';
import { useNavigation } from '@react-navigation/native'; 

const WelcomeHeader = () => {
  const navigation=useNavigation();
  const doctorListNaigation=()=>{
    navigation.navigate("FavoriteDoctorList")
}
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={assets.profile} style={styles.profileImage} />
        <Text style={styles.title}>
          Welcome <Text>🎉</Text> {'\n'}
          <Text style={{fontWeight: '800', color: 'black', fontSize: 16}}>
            Astisham Niaz
          </Text>
        </Text>
        <TouchableOpacity onPress={doctorListNaigation}>
          {/* Use the Unicode for a blue heart emoji */}
          <Text style={[styles.heartIcon, {color: 'blue',paddingHorizontal:45}]}>💙</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white', // Change the background color as needed
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  heartIcon: {
    fontSize: 20,
    color: 'blue',
    marginLeft: 130,
  },
  sub_title: {
    fontSize: 25,
    color: 'black',
    marginLeft: 20,
  },
};

export default WelcomeHeader;
