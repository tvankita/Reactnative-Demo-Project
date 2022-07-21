import React, {useState} from 'react';
import { Image, TextInput, TouchableOpacity, FlatList,
         StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomePage from '../RestuarantUi/home.js';
import FoodMenuDemo from '../RestuarantUi/FoodMenu.js';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const FoodRestDemo = () => {
  return (
    <NavigationContainer>
    {/* <View style={styles.container}>
    <AntDesign style={{color:'#000'}} name="arrowleft" size={20} />
    <Feather style={{color:'#000'}} name="message-square" size={20} />
    </View> */}
      <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ title: 'Home Page',
            headerStyle: { backgroundColor: '#cdcdcd', },
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold',  },
          }}
        />
      <Stack.Screen style={styles.heading}
          name="FoodMenuDemo"
          component={FoodMenuDemo}
          options={{ headerCenter: () => <Text>Restuarants & borderRadius</Text>
            // title: 'Food Menu',
            // headerStyle: { backgroundColor: '#cdcdcd', },
            // headerTintColor: '#fff',
            // headerTitleStyle: {fontWeight: 'bold',  },
          }}
        />
      
        {/* <Stack.Screen
          name="AboutPage"
          component={AboutPage}
          options={{ title: 'About Page',
            headerStyle: { backgroundColor: '#cdcdcd', },
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold',  },
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 25,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      marginBottom: 10,
    },
    heading: {
      // textAlign:'center',
      // color: '#000',
      // fontSize: 12,
      // paddingBottom: 5,
    },    
  });
  
  export default FoodRestDemo;
  