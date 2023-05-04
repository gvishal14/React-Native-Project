import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Dashboard from '../Screens/Dashboard'
import Setting from '../Screens/Setting'
import { Drawers } from 'react-native-paper'
import { createDrawerNavigator } from '@react-navigation/drawer'


const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Dashboard' component={Dashboard} />
        <Drawer.Screen name='Setting' component={Setting} />

      </Drawer.Navigator>
    </NavigationContainer>

  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})




// import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import Home from '../Screens/Home'
// import Explore from '../Screens/Explore'
// import Profile from '../Screens/Profile'
// import Setting from '../Screens/Setting'
// import Dashboard from '../Screens/Dashboard'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer'

// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// function TabNavigator() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Explore" component={Explore} />
//       <Tab.Screen name="Profile" component={Profile} />
//     </Tab.Navigator>
//   );
// }

// export default function DrawerNavigation() {
//   return (

//       <Drawer.Navigator>
//         <Drawer.Screen name='Tab' component={TabNavigator} />
//         <Drawer.Screen name='Dashboard' component={Dashboard} />
//         <Drawer.Screen name='Setting' component={Setting} />
//       </Drawer.Navigator>
 
//   )
// }