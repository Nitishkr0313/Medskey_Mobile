// Import necessary modules
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


// Function to generate days of the month
const getDaysArray = (year, month) => {
  const date = new Date(year, month, 1);
  const daysArray = [];

  while (date.getMonth() === month) {
    daysArray.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return daysArray;
};

// Function to format the date as 'DD'
const formatDay = (date) => {
  return date.getDate().toString().padStart(2, '0');
};

// Calendar component
const Calender = () => {
  // Set the current year and month
  const year = new Date().getFullYear();
  const month = new Date().getMonth();

  // Get the array of days for the current month
  const daysArray = getDaysArray(year, month);

  return (
    <View style={styles.container}>
      <Text style={styles.monthHeader}>
        {daysArray[0].toLocaleString('default', { month: 'long', year: 'numeric' })}
      </Text>
      <View style={styles.daysContainer}>
        {daysArray.map((day, index) => (
          <View key={index} style={styles.dayItem}>
            <Text style={styles.dayText}>{formatDay(day)}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  monthHeader: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayItem: {
    width: '14.28%', 
    aspectRatio: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  dayText: {
    marginTop:12,
    fontSize: 12,
    color:'black'
  },
});

// Export the component
export default Calender;
