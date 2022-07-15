import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from "react-native-vector-icons/AntDesign";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const NavMaterialBottom = () => {
    return (
        <Tab.Navigator
        initialRouteName="HomeStackScreen"
        activeColor="#e91e63"
        options={{
        tabBarLabel: "Home",
        tabBarColor: "#009387",
        tabBarIcon: ({color}) => {
            <Icon name="home" color={"#000"} size={25} />
        }
    }}
        
        barStyle={{ backgroundColor: 'tomato' }}
        >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" color={'#000'} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color }) => (
              <AntDesign name="user" color={'#000'} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="ContactScreen"
          component={ContactScreen}
          options={{
            tabBarLabel: 'Contact',
            tabBarIcon: ({ color }) => (
              <AntDesign name="phone" color={'#000'} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    );
};

const HomeStackScreen = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen"
        screenOptions={{
            headerStyle: {backgroundColor: '#009387',  },
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold', },
        }}
        >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: 'Home',
              headerLeft: () => (
                <AntDesign name="menu" size={25} backgroundColor='#009387' />
              )
            }}
          />
          <Stack.Screen
            name="AboutScreen"
            component={AboutScreen}
            options={{ title: 'About',
              headerLeft: () => (
                <AntDesign name="menu" size={25} backgroundColor='#009387' />
              )
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

export default NavMaterialBottom;