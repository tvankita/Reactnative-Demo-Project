import React from 'react';
import {View, Text, Image, Button, StyleSheet, TextInput} from 'react-native';

const UseDemoofUi = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image source={require('./MyAssets/Group.png')} style={styles.image} />
      </View>
      <Image
        source={require('./MyAssets/Maskgroup.png')}
        style={styles.imagemask}
      />
      <View style={styles.view2}>
        <Image
          source={require('./MyAssets/back.png')}
          style={styles.imageback}
        />
        <Text style={styles.text}>Login</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.texttitle}> FORGOT PASSWORD </Text>
        <Text style={styles.textp}>
          Type your email below and we'll send {'\n'} instruction on how to
          recover your {'\n'} password
        </Text>
          <TextInput style={styles.form} type="text" value='Email' />
          {/* <TextInput type="submit" value="Send Email" /> */}
        <View style={{ marginVertical: 50 }}>
          <Button buttonstyle={styles.button}
          title="Send Email"
          color={"#062fee"} >
        </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  view1: {
    flex: 1,
    backgroundColor: '#062fee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    marginHorizontal: 35,
    flex: 0.5,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  view3: {
    marginHorizontal: 35,
    flex: 1.5,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  image: {
    width: '80%',
    height: '60%',
    marginHorizontal: 50,
  },
  imagemask: {
    height: '20%',
    width: '20%',
    position: 'absolute',
    elevation: 10,
    top: 170,
    right: 15,
    resizeMode: 'contain',
    marginVertical: 3,
  },
  imageback: {
    marginTop: 25,
    height: 20,
    width: 20,
    position: 'relative',
    tintColor: '#062fee',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#062fee',
    marginLeft: 5,
    marginTop: 23,
    alignItems: 'center',
    textDecorationLine: 'underline',
  },
  texttitle: {
    fontSize: 20,
    letterSpacing: -0.9,
    fontWeight: '800',
    color: '#101010',
    alignItems: 'center',
  },
  textp: {
    marginVertical: 15,
    fontSize: 16,
    color: '#cecece',
  },
  
  form: {
    fontSize: 16,
    color: '#cecece',
    fontWeight: '500',
    borderBottomColor: '#cecece',
    borderBottomWidth: 1,
},
  button: {
    // color: '#062fee',
    // alignItems: 'center',
    // paddingVertical: 70,
    // paddingHorizontal: 70,
  },
});

export default UseDemoofUi;
