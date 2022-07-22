import React from 'react';
import { StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import HomePage from '../RestuarantUi/home.js';
import FoodMenuDemo from '../RestuarantUi/FoodMenu.js';
import HotelRoomDemo from '../RestuarantUi/HotelRoom.js';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const FoodRestDemo = () => {
  return (
    <NavigationContainer>
    
      <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ title: 'Home',
            headerTintColor: '#000',
          }}
        />
      <Stack.Screen style={styles.heading}
          name="FoodMenuDemo"
          component={FoodMenuDemo}
          options={{ title: 'Restuarants & Bars',
            headerRight: () => (
            <View style={styles.container}>
            <Feather style={{color:'#000'}} name="message-square" size={20} />
             </View>
            ),
          }}
        />
        <Stack.Screen style={styles.heading}
          name="HotelRoomDemo"
          component={HotelRoomDemo}
          options={{ title: 'Report',
            headerRight: () => (
            <View style={styles.container}>
            <Feather style={{color:'#000'}} name="message-square" size={20} />
             </View>
            ),
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
  