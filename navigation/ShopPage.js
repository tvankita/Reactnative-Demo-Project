import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ShopPage = ({navigation}) => {
  return (
    <View style={style.container}>
      <Text style={style.txtstyle}>Wellcome in Our Shop</Text>
      <Button
        style={style.buttonpress}
        onPress={() => navigation.replace('HomePage')}
        title="Go TO Home Page"
      />
      <Button
        style={style.buttonpress}
        onPress={() => navigation.navigate('ContactPage')}
        title="Go TO Contact Page"
      />
      <Button
        style={style.buttonpress}
        onPress={() => navigation.push('AboutPage')}
        title="Go TO About Page"
      />
      <Button
        title="Go Back"
        style={style.buttonpress}
        onPress={() => navigation.goBack()}
      />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>"Go TO About Page"</Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  txtstyle: {
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
  },
  buttonpress: {
    marginBottom: 5,
  },
});

export default ShopPage;
