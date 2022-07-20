import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import axios from 'axios'; 
// const url :'https://backend.livingsisu.com/api/en/login';

const PostMethod = () => {
    const getDataUsingPost = () => {
        axios.post('https://backend.livingsisu.com/api/en/login', {
            'email':'test1@gmail.com',
            'password':'Test@123',
            'type':'3',
            'redeem_code':'SISU50'
        })
          .then(function (response) {
            alert(JSON.stringify(response.data));
            // console.log(response.data)
          })
      };
    return (
        <View style={styles.container}>
        <Text style={styles.header}>
          Example of Axios Networking in React Native
        </Text>
           <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingPost}>
        <Text>Post Data Using POST</Text>
      </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1,
      padding: 16,
    },
    header: {
      fontSize: 30, 
      textAlign: 'center',
    },
    buttonStyle: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width: '100%',
      marginTop: 16,
    },
  });
  
export default PostMethod;