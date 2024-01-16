import React from 'react';
import { View, StyleSheet } from 'react-native';
import WelcomeHeader from '../components/WelcomeHeader';
import ButtonNavigation from '../components/ButtonNavigation';

const TopDoctor = () => {
  return (
    <View style={styles.container}>
    

    
      <View style={styles.bottomSection}>
      <ButtonNavigation />
        {/* Add any other content for the bottom section here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
//   topSection: {
//     flex: 0.1,
//     justifyContent: 'flex-start', 
//   },
  bottomSection: {
    flex:1,
    justifyContent: 'flex-end',
   
  },
});

export default TopDoctor;
