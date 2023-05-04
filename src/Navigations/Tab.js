import { StyleSheet, Text, View, SafeAreaView, BlurView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../Screens/Home'
import Explore from '../Screens/Explore'
import Profile from '../Screens/Profile'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (

    <NavigationContainer>
      <Tab.Navigator
      // screenOptions={{
      //   tabBarStyle: { position: 'absolute' },
      //   headerShown:true
      // }}
      //   tabBarPosition="bottom"
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}



