import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';

export default function AboutScreen  ({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={style.container}>
        <Text style={style.txt}>Welcome in My page</Text>
        <TouchableOpacity style={style.touch} onPress={() => navigation.navigate('ContactScreen')}>
            <Text>
            Go To ContactScreen
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
        backgroundColor: '#AF6D88',
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

