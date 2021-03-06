/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View, Image
} from 'react-native';

import GlobalStylesheet from '../globalstyle/GlobalStylesheet';
import PushNotification from "react-native-push-notification";




const Splash = ({navigation}) => {


  const createChannel = () => {
    PushNotification.createChannel(
        {
            channelId: "channel-id", // (required)
            channelName: "My channel", // (required)
        },
    );
}

  useEffect(()=>{
    createChannel()
    setTimeout(()=>{
      navigation.replace('HomeTabs')
    },2000);
  },[]);
  return (
    <View style={styles.parent}>
    <Text style={[GlobalStylesheet.CustomFontBig,styles.text]}>Todo List</Text>
      <Image style={styles.body}
      source={require('.././assets/splash.png')}
    />
    
    </View>

  );
};

// <Text style={GlobalStylesheet.CustomFontBig}>Test</Text>


const styles = StyleSheet.create({
 body:{
  width: '100%',
  height: undefined,
  aspectRatio: 1, 
  resizeMode: 'contain'

},
parent:{
  justifyContent: 'center',
  flex:1

},
text:{
fontSize:34,
textAlign: 'center', // <-- the magic

},
});

export default Splash;
