//import liraries
import React, {Component, useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Icos from 'react-native-vector-icons/Feather';
import Ico from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
// import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ChitChat from '../../components/ChitChat';
import {GiftedChat} from 'react-native-gifted-chat';
import initialMessages from '../../components/messages';

// create a component
const MassageSrceen = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  const navigateVideoCall = () => {
    navigation.navigate('VideoCallscreen');
  };
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(initialMessages.reverse());
  }, []);

  const onSend = (newMessages = []) => {
    setMessages(prevMessages => GiftedChat.append(prevMessages, newMessages));
  };

  return (
 
    <View style={styles.container}>
     
        <View style={styles.massageHeader}>
          {/* Left side */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={handleGoBack}>
              <Icons name="chevron-back-sharp" size={20} color="black" />
            </TouchableOpacity>
            <Text style={{color: 'black', fontWeight: '900', paddingLeft: 8}}>
              {item.name}
            </Text>
          </View>

          {/* Right side */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              flex: 1,
            }}>
            <TouchableOpacity
              onPress={navigateVideoCall}
              style={{marginRight: 6}}>
              <Icos name="video" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icos name="phone" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.subTitle}>
          <Ico name="dot-single" size={24} color="green" />
          <Text>Online</Text>
        </View>

      
      <ChitChat  headers={{
          handleGoBack: handleGoBack,
          navigateVideoCall: navigateVideoCall,
          item: item,
        }}/>
      
    </View>

    //  <ChitChat  headers={{
    //   handleGoBack: handleGoBack,
    //   navigateVideoCall: navigateVideoCall,
    //   item: item,
    // }}/>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'


  },
  massageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:10,
   

  },
  subTitle: {
    flexDirection: 'row',
    justifyContent:'flex-start',
    paddingHorizontal:40

    
  },
});

//make this component available to the app
export default MassageSrceen;
