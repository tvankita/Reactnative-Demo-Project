import React from 'react';
// import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../navdrawer/Home';
import About from '../navdrawer/About';
import Shop from '../navdrawer/Shop';
import Contact from '../navdrawer/Contact';
import SideBarDrawer from '../navdrawer/SideBar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const Drawer = createDrawerNavigator();

const NavDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <SideBarDrawer {...props} />}
        screenOptions={{
          drawerActiveTintColor: 'green',
        }}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({color}) => <FontAwesome name="home" size={22} />,
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            drawerIcon: ({color}) => ( <FontAwesome name="slideshare" size={22} />
            ),
          }}
        />
        <Drawer.Screen
          name="Shop"
          component={Shop}
          options={{
            drawerIcon: ({color}) => (
              <FontAwesome name="shopping-cart" size={22} />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={Contact}
          options={{
            drawerIcon: ({color}) => <Entypo name="phone" size={22} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default NavDrawer;
