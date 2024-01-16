import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function btn({bgColor, btnLabel, textColor, Press}) {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 60,
        alignItems: 'center',
        width: 350,
        paddingVertical: 10,
        marginVertical: 30,
      }}>
      <Text style={{color: textColor, fontSize: 14,}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}