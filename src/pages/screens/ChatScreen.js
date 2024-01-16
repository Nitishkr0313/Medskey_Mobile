//import liraries
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, FlatList,TouchableOpacity} from 'react-native';
import SearchBarDoctor from '../../components/SearchBarDoctor';
import {assets} from '../../../assets';
import {doctordetails} from '../../constants/Data';
import {useNavigation} from '@react-navigation/native';

// create a component
const ChatScreen = ({navigation}) => {
  //   const navigation=useNavigation();
  //   const navigateMassageScreen=()=>{
  //     navigation.navigate("MassageSrceen");
  // }
  const handleSearch = searchText => {
    console.log('Searching for:', searchText);
  };
  return (
    <View style={styles.modal_Container}>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image source={assets.mahima} style={styles.profileImage} />
          <View style={styles.title}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              My Messages {'\n'}{' '}
              <Text style={{fontWeight: 'bold', color: 'gray', fontSize: 12}}>
                3 new messages
              </Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={{paddingHorizontal:4,marginTop:12}}>
      <SearchBarDoctor onSearch={handleSearch} />
      </View>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={doctordetails}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('MassageSrceen', {item})}>
            <View style={styles.user_info}>
              <View style={styles.img_wrapper}>
                <Image source={item.images} style={styles.user_img} />
              </View>
              <View style={styles.text_section}>
                <View style={styles.user_info_text}>
                  <Text style={styles.doctor_name}>{item.name}</Text>
                  <Text style={styles.post_time}>{item.messageTime}</Text>
                </View>
                <View style={styles.massagetext}>
                  <Text>{item.messageText}</Text>
                </View>
              </View>
            </View>
            <View style={{height:0.5,backgroundColor:'grey',marginHorizontal:10}}>
            </View>
          </TouchableOpacity>
 
        )}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
    backgroundColor: 'white',
    width: '100%',
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom:8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    marginLeft: 10,
  },
  sub_title: {
    fontSize: 25,
    color: 'black',
    marginLeft: 20,
  },
  modal_Container: {
    flex: 1,

    backgroundColor: '#fff',
    paddingHorizontal:10
  },
  card: {
    width: '100%',
     elevation:2,
  },
  user_info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img_wrapper: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  user_img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text_section: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: 300,
    // borderBottomWidth: 1,
    // borderBottomColor: '#cccccc',
  },
  user_info_text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  doctor_name: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    color: 'black',
  },
  post_time: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Lato-Regular',
  },
  massagetext: {
    fontSize: 14,
    color: '#333333',
  },
});
//make this component available to the app
export default ChatScreen;

// export const Container = styled.View`
//   flex: 1;
//   padding-left: 20px;
//   padding-right: 20px;
//   align-items: center;
//   background-color: #ffffff;
// `;

// export const Card = styled.TouchableOpacity`
//   width: 100%;
// `;

// export const UserInfo = styled.View`
//   flex-direction: row;
//   justify-content: space-between;
// `;

// export const UserImgWrapper = styled.View`
//   padding-top: 15px;
//   padding-bottom: 15px;
// `;

// export const UserImg = styled.Image`
//   width: 50px;
//   height: 50px;
//   border-radius: 25px;
// `;

// export const TextSection = styled.View`
//   flex-direction: column;
//   justify-content: center;
//   padding: 15px;
//   padding-left: 0;
//   margin-left: 10px;
//   width: 300px;
//   border-bottom-width: 1px;
//   border-bottom-color: #cccccc;
// `;

// export const UserInfoText = styled.View`
//   flex-direction: row;
//   justify-content: space-between;
//   margin-bottom: 5px;
// `;

// export const UserName = styled.Text`
//   font-size: 14px;
//   font-weight: bold;
//   font-family: 'Lato-Regular';
// `;

// export const PostTime = styled.Text`
//   font-size: 12px;
//   color: #666;
//   font-family: 'Lato-Regular';
// `;

// export const MessageText = styled.Text`
//   font-size: 14px;
//   color: #333333;
// `;
