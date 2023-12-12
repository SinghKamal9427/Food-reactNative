import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/home';
import Cart from '../screens/cart.js';
import DrawerContent from '../components/drawerContent';


const Drawer = createDrawerNavigator();

export default function DrawerM() {
  return (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabelStyle: styles.drawerLabelStyle,
            drawerActiveBackgroundColor: '#ff9800',
            drawerActiveTintColor: '#fff',
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
          }}
          component={Home}
        />
        <Drawer.Screen
          name="Cart"
          options={{
            drawerLabelStyle: styles.drawerLabelStyle,
            drawerActiveBackgroundColor: '#ff9800',
            drawerActiveTintColor: '#fff',
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
          }}
          component={Cart}
        />
      </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
    
  drawerLabelStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerStyle: {
    backgroundColor: '#ff9800',
  },
})