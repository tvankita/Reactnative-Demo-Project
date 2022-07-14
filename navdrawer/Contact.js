import React from 'react';
import {Button, View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';

const Contact = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={style.container}>
        <Text style={style.txt}>Welcome in My page</Text>
        <Button
          onPress={() => navigation.navigate('About')}
          title="Go to About Page"
          style={style.button}
        />
        <TouchableOpacity style={style.touch} onPress={() => navigation.goBack()}>
            <Text>
            Go to Home Page
            </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create ({
    container: {
        flex: 1 ,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touch : {
        padding: 10,
        marginBottom: 3,
        backgroundColor: '#cdcdcd',
      },
    txt : {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 16
    },
});
export default Contact;
