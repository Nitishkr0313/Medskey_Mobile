import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { assets } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/AntDesign';
import Data, { doctordetails } from '../constants/Data';

const CardTitle = () => {
  const navigation = useNavigation();

  const renderCard = (item) => {
    return (
      <View style={styles.cardContainer}>
        {/* Left Side */}
        <View style={styles.leftSide}>
          <Image source={item.images} style={styles.doctorImage} />
        </View>

        {/* Right Side */}
        <View style={styles.rightSide}>
          <View style={styles.title}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={[styles.heartIcon, { color: 'blue' }]}>💙</Text>
          </View>
          <View>
          <Text style={styles.description}>{item.department}</Text>
          <Text >
            {item.hospitalName}
          </Text>
          </View>

          <View style={{ flexDirection: 'row',justifyContent:"space-between" }}>
            <Text style={{ justifyContent: 'flex-start',marginTop:3}}>
              <Icon name="map-marker-alt" size={20}  />   {item.location}
             
            </Text>
            <Text >
              <Icons name="star" size={20} color="#FFF44F" /> <Text style={{marginLeft:2}}>{item.rating}</Text>
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={doctordetails}
      // horizontal
      // showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => renderCard(item)}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    margin: 12,
    elevation:2
  },
  leftSide: {
    flex: 0.2,
    marginRight: 16,
  },
  rightSide: {
    flex: 0.8,
  },
  title: {
    flexDirection: 'row',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    justifyContent:"space-between",
    marginRight:"50"
  },
  description: {
    fontSize: 12,
    color: 'black',
   
  },
  doctorImage: {
    width: 65,
    height: 80,
    borderRadius: 4,
  },
  heartIcon: {
    fontSize: 18,
    color: 'blue',
    
   
  },
  name:{
    color:"black",
   
  }
});

export default CardTitle;
