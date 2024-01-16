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
const ForgetPassword = ({navigation}) => {
  const [mobile, setMobile] = useState('');

  // const navigation=useNavigation();
  // const loginNavigation=()=>{

  // }
  const navigations = useNavigation();
  const varifiyNavigation = () => {
    navigations.navigate('VerificationPassword');
  };
  return (
    <View>
      <CustomHeader title="Forgot Password" navigation={navigation}  />
      <View style={{}}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            marginTop: 50,
            paddingLeft: 10,
          }}>
          Forgot Password <Icons name="question" size={20} color="black" />
        </Text>
        <Text style={{paddingLeft: 10,marginTop:30,fontSize:14}}>
          Provide your mobile number and we will send you a verification code.
        </Text>
        <View style={styles.input}>
        <Text style={{color:'#7DA2F5'}}>Mobile</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            
            <TextInput
              // placeholder="Mobile"
              // placeholderTextColor="#7DA2F5"
              keyboardType="numeric"
              autoCapitalize="none"
              value={mobile}
              onChangeText={text => setMobile(text)}
              style={{marginLeft: 5, flex: 1,marginBottom:4,fontSize:12}}
            />
            
          </View>
          
        </View>
      </View>
      <Text style={{marginTop: 10,marginLeft:285,fontSize:12}}> Try another way</Text>
      <View style={styles.btn}>
      <Btn
        textColor="white"
        bgColor={primaryColor}
        btnLabel="Send Verification Code"
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: '60%',
  },
  btn:{
   
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:50
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderBottomWidth: 0.5,
    marginBottom: 15,
    paddingLeft: 20,
    marginTop: 40,
    marginLeft:16
  },
});

//make this component available to the app
export default ForgetPassword;
