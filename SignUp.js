//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Btn from '../components/Btn';
import {primaryColor} from '../constants/constant';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ion from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';

// create a component
const Signup = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmpassword] = useState('');
  const [nameEroor, setNameError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [matchedPasswordError,setMatchedPasswordError]=useState('');

  const navigation = useNavigation();
  const SignInNavigation = () => {
    navigation.navigate('Login');
  };
  const handleSignUp = () => {
   
    if (!name) {
      setNameError('Please enter your name.');
    } else {
      setNameError('');
    }
    if (!email) {
      setEmailError('Please enter your email.');
    } else {
      setEmailError('');
    }
    
    if (!mobile) {
      setMobileError('Please enter your Mobile Number.');
    } else {
      setMobileError('');
    }

    if (!password) {
      setPasswordError('Please enter your password.');
    } else {
      setPasswordError('');
    }
    
    if (!confirmPassword) {
      setConfirmPasswordError('Please enter your Confirm password.');
    } else {
      setConfirmPasswordError('');
    }
    if(password !== confirmPassword ){
      setMatchedPasswordError('password Not matched')
    }else {
      setMatchedPasswordError('');
    }

    if (!name ||!mobile || !email || !password ||!confirmPassword) {
    
      return;
    }
    
    SignInNavigation();
    console.warn('Form Data:', {
      email,
      password,
    });

  };

  return (
    <View style={styles.container}>
      <Text
        style={{marginRight: 340, marginBottom: 35}}
        onPress={SignInNavigation}>
        <Ion name="arrowleft" size={18} color="black" />
      </Text>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.sub_title}>
        Please complete your details to Sign In
      </Text>

      <View style={styles.input}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="user" size={15} color="#7DA2F5" />
          <TextInput
            placeholder="ahtishan Naiz Khan"
            keyboardType="name"
            autoCapitalize="none"
            value={name}
            onChangeText={text => setName(text)}
            style={{marginLeft: 10, flex: 1,fontSize: 12}}
            placeholderTextColor="#A9A9A9" 
           
          />
          <Text style={{ color: 'red', fontSize: 12 }}>{nameEroor}</Text>
        </View>
      </View>
      <View style={styles.input}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icons name="call-outline" size={15} color="#7DA2F5" />
          <TextInput
            placeholder="Your Phone Number"
            keyboardType="name"
            autoCapitalize="none"
            value={mobile}
            onChangeText={text => setMobile(text)}
            style={{marginLeft: 10, flex: 1,fontSize: 12}}
            placeholderTextColor="#A9A9A9" 

          />
          <Text style={{ color: 'red', fontSize: 12 }}>{mobileError}</Text>
        </View>
      </View>

      <View style={styles.input}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ion name="mail" size={15} color="#7DA2F5" />
          <TextInput
            placeholder="Your Email Address"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={text => setEmail(text)}
            style={{marginLeft: 10, flex: 1,fontSize: 12}}
            placeholderTextColor="#A9A9A9" 
           
          />
          <Text style={{ color: 'red', fontSize: 12 }}>{emailError}</Text>
        </View>
      </View>

      <View style={styles.input}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icons name="lock-closed-outline" size={15} color="#7DA2F5" />
          <TextInput
            placeholder="Your Password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
            style={{marginLeft: 10, flex: 1,fontSize: 12}}
            placeholderTextColor="#A9A9A9" 
            
          />
          <Text style={{ color: 'red', fontSize: 12 }}>{passwordError}</Text>
        </View>
      </View>
      <View style={styles.input}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icons name="lock-closed-outline" size={15} color="#7DA2F5"  />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={text => setConfirmpassword(text)}
            style={{marginLeft: 8, flex: 1,fontSize: 12}}
            placeholderTextColor="#A9A9A9" 
          
          />
          <Text style={{ color: 'red', fontSize: 12 }}>{confirmPasswordError}</Text>
          <Text style={{ color: 'red', fontSize: 12 }}>{matchedPasswordError}</Text>
        </View>
      </View>

      <Btn
        textColor="white"
        bgColor={primaryColor}
        btnLabel="Sign Up"
        Press={handleSignUp}
        // onPress={handleLogin}
      />
      <View style={{paddingTop: 15, paddingRight: 195}}>
        <Text style={{color:'#A9A9A9',fontSize:12}}>Already Have an Account ?</Text>
        <TouchableOpacity style={{color:'#0d6efd'}} onPress={SignInNavigation}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex:0.8,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
    paddingRight: 290,
    fontWeight: '500',
  },
  input: {
    height: 40,
    width: '90%',
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
    marginBottom: 15,
    color: '#5C5C5C',
    paddingRight: 140,
    fontSize:12,
  },
  buttonText: {
    color: '#2664EF',
    fontSize: 13,
  },
});

//make this component available to the app
export default Signup;
