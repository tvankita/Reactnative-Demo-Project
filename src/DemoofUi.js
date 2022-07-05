import React, { useState, useCallback } from 'react'
import { Text, View, Image, Title, Button } from 'react-native'
import { SafeAreaView } from 'react-navigation'

const UseDemoofUi = () => {

    return (
        <SafeAreaView style={styles.container}>
        <View>
        <View style={styles.container}>
        <Image source={require('./MyAssets/group.png')}
               style={styles.image}></Image>
        </View>

        <Image source={require('./MyAssets/Mask group.png')}
               style={styles.image1}></Image>

        <View>
        <Text>

        </Text>
        </View>        
        </View>            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:3,
      flexDirection: 'row',
      backgroundColor: '#062fee',
    },
    container2: {
        flex:2,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
    item: {
      padding: 20,
      marginVertical : 5,
      backgroundColor: 'skyblue',
      textAlign: 'center',
      marginHorizontal: 5,
    },
    image: {
        width: 58,
        height: 57,
        marginHorizontal:5,
        marginVertical : 5,
    }
  });

export default UseDemoofUi;
