import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, SafeAreaView} from 'react-native';

export const Demo = () => {
  const [userName, setUserName] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={Styles.container}>
        <Text> Hello World </Text>
        <TextInput
          value={userName}
          onChangeText={userName => setUserName(userName)}
          placeholder={'userName'}
          style={Styles.input}
        />
      </View>
      <View style={Styles.container}>
        <View style={{backgroundColor: 'green', flex: 0.1}} />
        <Text style={{backgroundColor: 'blue', flex: 0.1}}>demo</Text>
        <View style={{backgroundColor: 'yellow', flex: 0.1}} />
        <Text style={{backgroundColor: 'red', flex: 0.1}}>demo</Text>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    align: 'center',
    height: 10,
  },
  input: {
    margin: 5,
    padding: 15,
    width: 500,
    backgroundColor: 'yellow',
  },
});
