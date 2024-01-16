//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Linking,
  StatusBar,
} from 'react-native';
import Btn from '../components/Btn';
import {primaryColor} from '../constants/constant';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ion from 'react-native-vector-icons/Entypo';
import Ions from 'react-native-vector-icons/AntDesign';
import IonsEmail from 'react-native-vector-icons/AntDesign';
import Iconss from 'react-native-vector-icons/Ionicons';

import {useState} from 'react';

// create a component
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigation = useNavigation();
  const SignInNavigation = () => {
    navigation.navigate('Signup');
  };
  const TopDoctorNavigation = () => {
    navigation.navigate('TopDoctor');
  };
  const forgetPasswordNavigation = () => {
    navigation.navigate('ForgetPassword');
  };

  // const handleLogin = () => {
  //   // Perform login logic here
  //   console.log('Email:', email);
  //   console.log('Password:', password);
    
  // };
  
  const handleLogin = () => {
   
    if (!email) {
      setEmailError('Please enter your email.');
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Please enter your password.');
    } else {
      setPasswordError('');
    }

    if (!email || !password) {
    
      return;
    }
    
    TopDoctorNavigation();
    console.warn('Form Data:', {
      email,
      password,
    });

  };
  const openFacebookPage = () => {
    
    Linking.openURL('https://www.facebook.com/your-facebook-page-url');
  };

  const openGooglePage = () => {
    
    Linking.openURL('https://www.google.com/your-google-page-url');
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Icon
        name="map-marker-alt"
        size={50}
        color="#2664EF"
        style={{marginBottom: 50}}
      />
      <Text style={styles.title}>Login</Text>
      <Text style={styles.sub_title}>Please Sign in to Continue</Text>

      <View style={styles.input}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IonsEmail name="mail" size={15} color="#7DA2F5" />
          <TextInput
            placeholder="ahtishamniakhan55@gmail.com"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={text => setEmail(text)}
            style={{marginLeft: 10, flex: 1, fontSize: 12}}
            placeholderTextColor="#A9A9A9"
          />
          <Text style={{ color: 'red', fontSize: 12 }}>{emailError}</Text>
        </View>
      </View>

      <View style={styles.input}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Iconss name="lock-closed-outline" size={15} color="#7DA2F5" />
          <TextInput
            placeholder=" Your Password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
            style={{marginLeft: 10, flex: 1, fontSize: 12}}
            placeholderTextColor="#A9A9A9"
          />
         
        <Text style={{ color: 'red', fontSize: 12 }}>{passwordError}</Text>
     
        </View>
      </View>
      <TouchableOpacity onPress={forgetPasswordNavigation}>
        <Text
          style={{
            color: '#2664EF',
            marginLeft: 240,
            marginBottom: 10,
            alignItems: 'flex-end',
            fontSize: 14,
          }}>
          Forgot Password <Icon name="question" color={primaryColor} />
        </Text>
      </TouchableOpacity>

      <Btn
        textColor="white"
        bgColor={primaryColor}
        btnLabel="Sign Up"
        // Press={TopDoctorNavigation}
        Press={handleLogin}
      />
      <View style={{marginTop: 15, fontSize: 24}}>
        <Text style={{color: 'black', fontSize: 18, paddingRight: 240}}>
          Or Login with
        </Text>
        <View style={{flexDirection: 'row', marginTop: 10, gap: 20}}>
          <TouchableOpacity onPress={openFacebookPage}>
            <Ion name="facebook-with-circle" size={30} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity onPress={openGooglePage}>
            <Ions name="google" size={30} color="#34A853" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingTop: 90, paddingRight: 175}}>
        <Text>Don't Have an Account ?</Text>
        <TouchableOpacity style={styles.button} onPress={SignInNavigation}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    color: 'black',
    paddingRight: 310,
    fontWeight: '600',
  },
  input: {
    height: 40,
    width: '100%',
    marginBottom: 20,

    borderBottomWidth: 0.5,
    borderBottomColor: '#c7c3c3',
  },
  child_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sub_title: {
    marginBottom: 25,
    color: '#5C5C5C',
    paddingRight: 190,
  },
  buttonText: {
    color: '#2664EF',
    fontSize: 14,
  },
});

//make this component available to the app
export default Login;
