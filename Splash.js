//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useState,useEffect,useNavigation } from 'react';
import ConnectDoctor from './ConnectDoctor';
import {primaryColor} from '../constants/constant';



// const navigate=useNavigation();
// create a component
const Splash = (props) => {
    useEffect(() => {
       
        const redirectTimeout = setTimeout(() => {
            
            props.navigation.navigate('Sliders'); 
        }, 3000); 

       
        return () => clearTimeout(redirectTimeout);
    }, [props.navigation]);

    return (
        <View style={styles.container}>
        <View style={styles.icon_container}>
         <Icon name="map-marker-alt" size={80} color={primaryColor} />
         <Text style={{color:"#2664EF",fontSize:18,fontWeight:'500'}}> DoctOnTime</Text>
         </View>
            
            <View style={styles.child_container}>
                <Text>Designed And Branded By</Text>
                <Text style={styles.textColor}>Source Dot Com</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end', 
        backgroundColor: '#FFFFF',
    },
    icon_container:{
       flex:5,
       justifyContent:"center",
       alignItems:'center',
    },
    child_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end', 
        marginBottom: 20, 
    },
    textColor: {
        color: '#2664EF',
        marginLeft: 18,
    },
});

//make this component available to the app
export default Splash;
