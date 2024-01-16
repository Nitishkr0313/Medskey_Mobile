// CustomSearchBar.js
import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CustomSearchBar = ({onSearch, isLoading}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => {
    setSearchText(text);
  };

  const handleSearchSubmit = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.searchBarContainer}>
      <TouchableOpacity
        onPress={handleSearchSubmit}
        style={styles.searchButton}>
        <Icon name="search" size={20} color="#A9A9A9" />
      </TouchableOpacity>
      <TextInput
        placeholder="Search Doctor..."
        onChangeText={handleSearch}
        onSubmitEditing={handleSearchSubmit}
        value={searchText}
        placeholderTextColor="#A9A9A9"
        style={styles.inputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: '#E9DBFB',
    borderWidth: 0.5,
    width: '100%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingHorizontal: 20,
    height: 40,
  },
  inputStyle: {
    flex: 1,
    fontSize: 13,
    color: 'black',
  },
  searchButton: {
    padding: 10,
  },
});

export default CustomSearchBar;
