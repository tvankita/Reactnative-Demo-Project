import React from 'react';
import {Text, View, SafeAreaView, Button, StyleSheet} from 'react-native';

export const Demo = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        height: 50,
        padding: 10,
      }}>
      <View style={{backgroundColor: 'green', flex: 0.1}} />
      <Text style={{backgroundColor: 'blue', flex: 0.1}}>demo</Text>
      <View style={{backgroundColor: 'yellow', flex: 0.1}} />
      <Text style={{backgroundColor: 'red', flex: 0.1}}>demo</Text>
    </View>
  );
};
