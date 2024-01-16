//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Btn from '../components/Btn'
import {primaryColor} from '../constants/constant'

// create a component
const  ConnectDoctor= ({props,navigation}) => {
    const goNextPage=(screen)=>{
    
        console.log("function is workingsgshg");
          // Simulate a login process (you can replace this with your actual login logic)
         
            
            // Redirect to another page after the loading is complete
           navigation.navigate(screen); // Replace "AnotherPage" with the actual route name
         
        } 
    return (
        <View style={styles.container}>
           
            <View style={styles.child_container}>
            <Text style={{fontSize:20}}>App That Connect You</Text>
            <Text style={styles.textColor}> With Your Doctor</Text>
            <Btn textColor='white' bgColor={primaryColor} btnLabel="Next" Press={()=>goNextPage("Companion")}  />
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
export default ConnectDoctor;
