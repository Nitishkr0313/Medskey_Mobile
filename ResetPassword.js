//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Ion from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../components/CustomHeader';
import Btn from '../components/Btn';
import {primaryColor} from '../constants/constant';
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// create a component
const ResetPassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmpsw, setConfirmpsd] = useState('');


  // const navigation=useNavigation();
  // const loginNavigation=()=>{

  // }
  const navigations = useNavigation();
  const varifiyNavigation = () => {
    navigations.navigate('VerificationPassword');
  };
  return (
    <View>
      <View style={{marginTop:40}}>
        <Text
          style={{
            fontSize: 24,
            color: 'black',
            marginTop: 50,
            paddingLeft: 10,
          }}>
          Reset Your Password 
        </Text>
        <Text style={{paddingLeft: 10,marginTop:30}}>
          Reset your new password below. make sure both password match.
        </Text>
        <View style={styles.input}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
           
            <TextInput
              placeholder="password"
              keyboardType="Number"
              autoCapitalize="none"
              secureTextEntry
              value={password}
              onChangeText={text => setPassword(text)}
              style={{marginLeft: 5, flex: 1,fontSize:12}}
              placeholderTextColor="#0d6efd" 
            />
            <Icons name="eye" size={20} color="black" style={{marginRight:25}} />
          </View>
          
        </View>
        <View style={styles.input}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          
            <TextInput
              placeholder=" Confirm password"
              keyboardType="Number"
              autoCapitalize="none"
              secureTextEntry
              value={confirmpsw}
              onChangeText={text => setConfirmpsd(text)}
              style={{marginLeft: 5, flex: 1,fontSize:12}}
              placeholderTextColor="#0d6efd" 
            />
            <Icons name="eye" size={20} color="black" style={{marginRight:25}} />
          </View>
          
        </View>
      </View>
      <Text style={{marginTop: 10,marginLeft:250}}> Try another way</Text>
      <View style={styles.btn}>
      <Btn
        textColor="white"
        bgColor={primaryColor}
        btnLabel="Reset Password"
        Press={varifiyNavigation}
      />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignSelf:'center',
    backgroundColor: 'white',
    marginTop: '60%',
  },
  btn:{ 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:250
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
   
    marginBottom: 5,
    paddingLeft: 20,
    marginTop: 30,
  },
});

//make this component available to the app
export default ResetPassword;
