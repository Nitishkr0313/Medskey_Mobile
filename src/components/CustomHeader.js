import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ions from 'react-native-vector-icons/Ionicons';


const CustomHeader = ({ title, navigation }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ions name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: 'bold',color:"black" }}>{title}</Text>
      <TouchableOpacity onPress={() => {}}>
        <Ions name="menu" size={24} color="#7DA2F5" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;
