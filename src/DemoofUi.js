import React from 'react';
import { View, Text, Image, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UseDemoofUi = () => {
  return (
    <View style={styles.container}>
      <View style={styles.groupimg}>
        <Image source={require('./MyAssets/Group.png')} style={styles.previmage} />
      </View>
      <Image
        source={require('./MyAssets/Maskgroup.png')}
        style={styles.maskimagek}
      />
      <View style={styles.backimg}>
      <Ionicons style={styles.imageback} name='arrow-back' size={18}/>
        <Text style={styles.login}>Login</Text>
      </View>
      <View style={styles.frogtpass}>
        <Text style={styles.forget}> FORGOT PASSWORD </Text>
        <Text style={styles.line}>
          Type your email below and we'll send {'\n'} instruction on how to
          recover your {'\n'} password
        </Text>
          <TextInput style={styles.form} type="text" value='Email' />
        <View style={{ marginVertical: 50 }}>
        <TouchableOpacity style={styles.sendbutton}>
        <Text style={styles.email}>Send Email</Text>          
        </TouchableOpacity>
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
  groupimg: {
    flex: 1,
    backgroundColor: '#062fee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backimg: {
    marginHorizontal: 35,
    flex: 0.5,
    flexDirection: 'row',
  },
  frogtpass: {
    marginHorizontal: 35,
    flex: 1.5,
    flexDirection: 'column',
  },
  previmage: {
    width: '80%',
    height: '60%',
  },
  maskimagek: {
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
    position: 'relative',
    color: '#062fee',
  },
  login: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#062fee',
    marginLeft: 5,
    marginTop: 23,
    alignItems: 'center',
    textDecorationLine: 'underline',
  },
  forget: {
    fontSize: 20,
    letterSpacing: -0.9,
    fontWeight: '800',
    color: '#101010',
    alignItems: 'center',
  },
  line: {
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
  email: {
    justifyContent: 'center',
    color: '#fff',
    padding: 10,
},
sendbutton: {
    alignItems: 'center',
    backgroundColor: '#062fee',
    padding: 5,    
},
});

export default UseDemoofUi;
