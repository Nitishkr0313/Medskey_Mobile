// Import necessary React Native components
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { assets } from '../../assets';
import { useNavigation } from '@react-navigation/native'; 


// Create your custom card component
const HomeCard = () => {
    const navigation=useNavigation();

    const doctorListNaigation=()=>{
        navigation.navigate("FavoriteDoctorList")
    }
  return (
    <View style={styles.cardContainer}>
      {/* Left Side */}
      <View style={styles.leftSide}>
        <Text style={styles.title}>Medical Checks!</Text>
        <Text style={styles.description}>Check Your health regularly {'\n'}to minimize the incidence of {'\n'}disease in future.</Text>
        <TouchableOpacity style={styles.checkNowButton} onPress={doctorListNaigation}>
          <Text style={styles.buttonText}>Check Now</Text>
        </TouchableOpacity>
      </View>

      {/* Right Side */}
      <View style={styles.rightSide}>
      <Image
        source={assets.doc}
        style={styles.doctorImage}
      />
    </View>
      
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#2664EF',
    padding: 16,
    borderRadius: 8,
    margin: 16,
  },
  leftSide: {
    flex: 0.7,
    marginRight: 16,
  },
  rightSide: {
    flex: 0.3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 12,
    color: 'white',
    marginTop: 8,
  },
  checkNowButton: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 15,
    marginTop: 16,
  },
  buttonText: {
    fontSize: 14,
    color: '#0d6efd',
    textAlign: 'center',
    fontWeight:"700",
   
  },
  doctorImage: {
    width: 100,
    height: 143,
    borderRadius: 4,
  },
 
});

// Export the component for use in your application
export default HomeCard;
