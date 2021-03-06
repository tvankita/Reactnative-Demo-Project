import React from 'react';
import HomeScreen from '../navmaterialtoptab/HomeScreen';
import AboutScreen from '../navmaterialtoptab/AboutScreen';
import ContactScreen from '../navmaterialtoptab/ContactScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TopTabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {backgroundColor: '#009387'},
          tabBarItemStyle: { position: 'relative'},
        }}
        tabBarPosition="top">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <AntDesign name="home" color="black" size={20} />,
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarIcon: () => (
              <AntDesign name="user" color="black" size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            tabBarIcon: () => (
              <AntDesign name="phone" color="black" size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TopTabBar;