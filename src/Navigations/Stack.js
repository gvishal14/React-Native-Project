import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Home from '../Screens/Home';
import TabNavigator from './Tab';
import DrawerNavigation from './Drawer';



const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Signup' component={Signup}/>
        <Stack.Screen name='TabNavigator' component={TabNavigator} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Stacks

const styles = StyleSheet.create({})
