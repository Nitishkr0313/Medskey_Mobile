//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { assets } from '../../../assets';

// create a component
const VideoCallscreen = ({ route }) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.call_header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icons name="chevron-back-sharp" size={20} color="white" />
        </TouchableOpacity>
        <Text style={{ justifyContent: 'center', color: 'white' }}>VideoCallProfile</Text>
      </View>
      <View style={{ flex: 1 }}>
        <ImageBackground source={assets.videoCall} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>Inside</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  call_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#333', // You can set your desired background color
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

// make this component available to the app
export default VideoCallscreen;
