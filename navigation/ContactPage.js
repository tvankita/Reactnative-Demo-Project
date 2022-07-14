import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ContactPage = ({navigation}) => {
  return (
    <View style={style.container}>
      <Text style={style.txtstyle}>Hello Techvoot Family</Text>
      <Button
        style={style.buttonpress}
        onPress={() => navigation.popToTop('HomePage')}
        title="Go TO Home Page"
      />
      <Button
        style={style.buttonpress}
        onPress={() => navigation.navigate('AboutPage')}
        title="Go TO About Page"
      />
      <Button
        style={style.buttonpress}
        onPress={() => navigation.goBack()}
        title="Go TO Home Page"
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  txtstyle: {
    textAlign: 'center',
    fontSize: 25,
    color: '#000',
  },
  buttonpress: {
    marginBottom: 5,
  },
});
export default ContactPage;
