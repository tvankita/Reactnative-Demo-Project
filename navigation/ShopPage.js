import React from 'react';
import {View, Text, Button, TouchbleOpacity, StyleSheet} from 'react-native';

const ShopPage = ({navigation}) => {
  return (
    <View style={style.container}>
      <Text style={style.txtstyle}>Wellcome in Our Shop</Text>
      <Button
        style={style.buttonpress}
        onpress={() => navigation.replace('HomePage')}
        title="Go TO Home Page"
      />
      <Button
        style={style.buttonpress}
        onpress={() => navigation.push('AboutPage')}
        title="Go TO About Page"
      />
      <Button
        style={style.buttonpress}
        onpress={() => navigation.goBack('HomePage')}
        title="Go TO Home Page"
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
export default ShopPage;