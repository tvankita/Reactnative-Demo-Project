import React from 'react';
import {Button, View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';

export default function HomeScreen ({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={style.container}>
        <Text style={style.txt}>Welcome in My page</Text>
        <Button
          onPress={() => navigation.navigate('AboutScreen')}
          title="Go to About Page"
          style={style.button}
        />
        <TouchableOpacity style={style.touch} onPress={() => navigation.navigate('ContactScreen')}>
            <Text>
            Go to Contact Page
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
        backgroundColor: '#6D98AF',
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

