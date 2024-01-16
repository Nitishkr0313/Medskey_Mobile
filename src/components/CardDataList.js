import Data, { doctordetails } from '../constants/Data';
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


// create a component
const CardDataList = () => {
    console.log(doctordetails,"CardDataList");
    return (
        <View style={styles.container}>
           {
            
           }
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default CardDataList;
