import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import axios from 'axios';

const AxiosGetApi = () => {
  const requestOptions = {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'token',
    },
  };
    const getDataGetCall = () => {
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .then(function (response) {
            alert(JSON.stringify(response.data));
        })
    };
const getDataUsingAsyncAwait = async () => {
      try {
        const response = await 
        axios.get('https://jsonplaceholder.typicode.com/posts/1',);
        alert(JSON.stringify(response.data));
      } catch (error) {
        alert(error.message);
      }
    };

    
    return (
        <View style={styles.container}>
      <Text style={styles.header}>
        Example of Axios Networking in React Native
      </Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataGetCall}>
        <Text>Simple Get Call</Text>
      </TouchableOpacity>
      </View>     
    );    
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
  
export default DeleteMethod;