import React from 'react';
import {View, Text, Button, TouchbleOpacity, StyleSheet} from 'react-native';

const ContactPage = ({navigation}) => {
  return (
    <View style={style.container}>
      <Text style={style.txtstyle}>Hello Techvoot Family</Text>
      <Button
        style={style.buttonpress}
        onpress={() => navigation.popToTop('HomePage')}
        title="Go TO Home Page"
      />
      <Button
        style={style.buttonpress}
        onpress={() => navigation.push('AboutPage')}
        title="Go TO About Page"
      />
      <Button
        style={style.buttonpress}
        onpress={() => navigation.goBack('ShopPage')}
        title="Go TO Shop Page"
      />
      <TouchbleOpacity onpress={() => navigation.goBack()}>
        <Text>"Go TO About Page"</Text>
      </TouchbleOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  txtstyle: {
    alignItem: 'center',
    fontSize: 25,
    color: '#cfcd',
  },
  buttonpress: {
    marginBottom: 5,
  },
});
export default ContactPage;
