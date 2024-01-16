//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import CustomHeader from '../components/CustomHeader';
import Btn from '../components/Btn';
import {primaryColor} from '../constants/constant';
import {useNavigation} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/AntDesign';
import OTPTextInput from 'react-native-otp-textinput';

// create a component
// ... (import statements)

// create a component
const VerificationPassword = ({navigation}) => {
  const [otp, setOtp] = useState('');

  const navigations = useNavigation();

  const resetNavigation = () => {
    navigations.navigate('ResetPassword');
  };

  const handleOTPChange = otp => {
    setOtp(otp);
    // You can perform additional logic here if needed
  };

  return (
    <View>
      <CustomHeader title="Forgot Password" navigation={navigation} />
      <View style={{}}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            marginTop: 50,
            paddingLeft: 10,
          }}>
          Verification
        </Text>
        <Text style={{paddingLeft: 10, marginTop: 20}}>
          Check your mail. we have sent you the pin at the mail
        </Text>
        <View style={styles.input}>
          <OTPTextInput
          secureTextEntry
            value={otp}
            handleTextChange={handleOTPChange}
            containerStyle={{marginVertical: 10, borderColor: 'blue'}}
            textInputStyle={{
              borderWidth: 0, 
              borderBottomWidth: 1, 
              borderColor: 'black',
              padding: 8,
              color: 'black',
            }}
            inputCount={6}
          />
        </View>
      </View>
      <Text style={{marginTop: 40, marginLeft: 200}}>
        {' '}
        Did not receive an email{' '}
        <Icons name="question" size={15} color="black" />
      </Text>
      <View style={styles.btn}>
        <Btn
          textColor="white"
          bgColor={primaryColor}
          btnLabel="Verify"
          Press={resetNavigation}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  // ... (existing styles)
  input: {
    height: 40,
    width: '90%',
    marginBottom: 12,
    paddingLeft: 20,
    marginTop: 10,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});

// make this component available to the app
export default VerificationPassword;
