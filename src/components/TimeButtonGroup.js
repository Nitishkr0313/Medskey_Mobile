import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TimeButtonGroup = () => {
  const buttons = [
    { text: 'Button 1', id: 1 },
    { text: 'Button 2', id: 2 },
    { text: 'Button 3', id: 3 },
    { text: 'Button 4', id: 4 },
    { text: 'Button 5', id: 5 },
    { text: 'Button 6', id: 6 },
    { text: 'Button 7', id: 7 },
    { text: 'Button 8', id: 8 },
    { text: 'Button 9', id: 9 },
    { text: 'Button 10', id: 10 },
    { text: 'Button 11', id: 11 },
    { text: 'Button 12', id: 12 },
  ];

  return (
    <View style={styles.card}>
      <View style={styles.buttonRow}>
        {buttons.map((button) => (
          <TouchableOpacity
            key={button.id}
            style={styles.button}
            onPress={() => {
              // Handle button press
            }}
          >
            <Text>{button.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'primary', 
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'primary', 
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TimeButtonGroup;
