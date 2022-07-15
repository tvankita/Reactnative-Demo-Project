import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../navbottom/HomeScreen';
import AboutScreen from '../navbottom/AboutScreen';
import ContactScreen from '../navbottom/ContactScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator ();
const Stack = createStackNavigator();

const NavBottom = () => {
    return (
       <NavigationContainer>
        <Tab.Navigator
          initialRouteName={HomeScreen}
          screenOptions={{ 
            tabBarStyle: { position: 'absolute' },
            tabBarActiveBackgroundColor: '#cdcdcd',
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: true,
            tabBarHideOnKeyboard: 'false',
            tabBarlabaelStyle: {paddingBottom:10, fontSize: 16, fontWeight: 'bold'},
            Style: {padding:10, height: 10}
        }}
        >
            <Tab.Screen
                component={HomeScreen}
                name="HomeScreen"
                options={{
                tabBarIcon: () => (
                  <AntDesign name="home" color="#000" size={20} />
            ),
          }}
            />
            <Tab.Screen 
                component={AboutScreen}
                name="AboutScreen"
                options={{
                tabBarIcon: ({ color, size }) => (
                   <AntDesign name="user" color="#000" size={20} />
          ),
          tabBarBadge: 3,
        }}/>
            <Tab.Screen 
                component={ContactScreen}
                name="ContactScreen"
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="phone" color="#000" size={20}/>
                    )
                }}
            />
         </Tab.Navigator>
       </NavigationContainer>
    );
}

export default NavBottom;