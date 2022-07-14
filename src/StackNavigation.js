import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../navigation/HomePage';
import AboutPage from '../navigation/AboutPage';
import ContactPage from '../navigation/ContactPage';
import ShopPage from '../navigation/ShopPage.js';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();

const StackNavigationDemo = () => {
  return (
    <NavigationContainer>
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
        <Stack.Screen
          name="AboutPage"
          component={AboutPage}
          options={{ title: 'About Page',
            headerStyle: { backgroundColor: '#cdcdcd', },
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold',  },
          }}
        />
        <Stack.Screen
          name="ShopPage"
          component={ShopPage}
          options={{ title: 'Shop Page',
            headerStyle: { backgroundColor: '#cdcdcd', },
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold',  },
          }}
        />
        <Stack.Screen
          name="ContactPage"
          component={ContactPage}
          options={{ title: 'Contact Page',
            headerStyle: { backgroundColor: '#cdcdcd', },
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold',  },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigationDemo;


