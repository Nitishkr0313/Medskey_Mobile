import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {primaryColor} from '../constants/constant';
import {homeButtonName} from '../constants/Data';

const HomeButtonGroup = () => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonPress = () => {
    setIsActive(!isActive);
  };

  const renderCard = (item, index) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 4,
          paddingHorizontal: 8,
        }}>
        <TouchableOpacity
          onPress={handleButtonPress}
          style={{
            backgroundColor: isActive ? '#0d6efd' : 'white',
            padding: 3,
            fontWeight: '400',
            fontSize: 14,
            color: '#C9D8FB',
            borderWidth: 0.5,
            borderRadius: 10,
          }}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <FlatList
      data={homeButtonName}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => renderCard(item)}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default HomeButtonGroup;
