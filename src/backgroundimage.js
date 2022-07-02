import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

const BackgroundImage = () => (
  
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./MyAssets/island.jpg')}
        style={styles.image}
        >    
        <Text style={styles.text}>Hello Maldive</Text>
      </ImageBackground>
    </SafeAreaView>
  
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex:1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#00000c0',
  },
});

export default BackgroundImage;
