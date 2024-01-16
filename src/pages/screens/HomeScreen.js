//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBarDoctor from '../../components/SearchBarDoctor';
import WelcomeHeader from '../../components/WelcomeHeader';
import HomeCard from '../../components/HomeCard';
import HomeButtonGroup from '../../components/HomeButtonGroup';
import CardDataList from '../../components/CardDataList';
import CardTitle from '../../components/CardTitle';


// create a component
const HomeScreen = () => {
  const handleSearch = searchText => {
    console.log('Searching for:', searchText);
  };
  return (
    
    <View style={styles.container}>
      <View style={styles.topSection}>
        <WelcomeHeader />
        <View style={{paddingHorizontal:10,marginTop:12}}>
        <SearchBarDoctor />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View>
        <HomeCard />
        </View>
        <View style={styles.symptomsStyle}><Text style={{fontSize:13,fontWeight:"500",marginLeft:20,color:"black"}}>Your Symptoms ?</Text><Text style={{color:"#2664EF",marginRight:20,fontSize:12,fontWeight:'600'}}>See all</Text></View>
        {/* Add any other content for the top section here */}
        <HomeButtonGroup />
        <View style={styles.symptomsStyle}><Text style={{fontSize:13,fontWeight:"500",marginLeft:20,color:"black",}}>Top Doctors</Text><Text style={{color:"#2664EF",marginRight:20,fontSize:12,fontWeight:'600'}}>See all</Text></View>

        <CardTitle />
        </ScrollView>
      </View>
     
    </View>
    
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent:"center",
    width: '100',
    backgroundColor:'white',
  },
  topSection: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  symptomsStyle:{
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:4,
    marginTop:6,
  }
});

//make this component available to the app
export default HomeScreen;
