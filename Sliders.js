import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {assets} from '../../assets';
import Icon from 'react-native-vector-icons/Ionicons';
import Ion from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import Btn from '../components/Btn';
import {primaryColor} from '../constants/constant';
import { transparent } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const slides = [
  {
    key: '1',
    title: 'With your doctor',
    text: 'App That Connect You',
    image: assets.doctor,
    backgroundColor: 'red',
  },
  {
    key: '2',
    title: 'Companion',
    text: 'Your Trustworthy',
    image: assets.campaion,
    backgroundColor: 'yellow',
  },
  {
    key: '3',
    title: 'one Clicked',
    text: 'Booked Your Doctor in',
    image: assets.booked,
    backgroundColor: 'red',
  },
];

const Sliders = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  const navigation = useNavigation();
  const _renderItem = ({item}) => {
    //  console.log(item,"gsghg")
    return (
      <View style={{backgroundColor: 'white'}}>
        <Image style={styles.imageStyle} source={item.image} />
        <View></View>
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };
  _renderNextButton = () => {
    return (
      <View
        style={{
          backgroundColor: primaryColor,
          borderRadius: 100,
          alignItems: 'center',
          width: 350,
          paddingVertical: 10,
          marginVertical: 10,
        }}>
        <StatusBar barStyle = "dark-content" backgroundColor ='#fff'/>
        <Text style={{color: 'white', fontSize: 14}}>Next</Text>
      </View>
    );
  };

  const LoginNavigation = () => {
    navigation.navigate('Login');
  };
  _renderDoneButton = () => {
    return (
      <TouchableOpacity onPress={LoginNavigation}>
        <View
          style={{
            backgroundColor: primaryColor,
            borderRadius: 100,
            alignItems: 'center',
            width: 350,
            paddingVertical: 10,
            marginVertical: 10,
            
          }}>
          <Text style={{color: 'white', fontSize: 14}}>Next</Text>
        </View>
      </TouchableOpacity>
      // <View style={{backgroundColor: primaryColor,
      //   borderRadius: 100,
      //   alignItems: 'center',
      //   width: 350,
      //   paddingVertical: 5,
      //   marginVertical: 10}}>
      //    <Text style={{color:'white', fontSize: 14}}>Next</Text>

      //  </View>
    );
  };

  const _onDone = () => {
    setShowRealApp(true);
  };

  if (showRealApp) {
    return <Sliders />;
  } else {
    return (
      <AppIntroSlider
        renderItem={_renderItem}
        slides={slides}
        onDone={_onDone}
        dotStyle={{backgroundColor: 'grey', marginBottom: 80}}
        activeDotStyle={{backgroundColor: '#2664EF', marginBottom: 80}}
        renderDoneButton={_renderDoneButton}
        renderNextButton={_renderNextButton}
      />
    );
  }
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    color: 'black',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '800',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    color: '#5C5C5C',
    textAlign: 'center',
    fontWeight: '400',
  },
  nextButton: {
    color: 'blue',
  },
  imageStyle: {
    width: '99.9%',
    height: '80%',
  },
});

export default Sliders;
