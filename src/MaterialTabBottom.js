import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import NavMaterialBottom from '../navmaterialtab/DetailScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export default function DrawerNavigation () {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="HomeScreen">
              <Drawer.Screen component={NavMaterialBottom} name="HomeScreen" />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

