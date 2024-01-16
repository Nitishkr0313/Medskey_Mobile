//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Btn from '../components/Btn'
import {primaryColor} from '../constants/constant'

// create a component
const Companion = ({props,navigation}) => {
    const goNextPage=(screen)=>{
           navigation.navigate(screen); 
         
        } 
    return (
        <View style={styles.container}>
           
            <View style={styles.child_container}>
            <Text style={{fontSize:20}}>Your Trustworthyhjgfjghjhkjhg</Text>
            <Text style={styles.textColor}>Companion </Text>
            <Btn textColor='white' bgColor={primaryColor} btnLabel="Next" Press={()=>goNextPage("BookedDoctor")}  />
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
    },
    child_container: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'flex-end', 
        marginBottom: 90, 
    },
    textColor: {
        color: 'Black',
        marginLeft: 17,
        fontSize:20
    },
});


//make this component available to the app
export default Companion;
