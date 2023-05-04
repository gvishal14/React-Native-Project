import { View, Text } from 'react-native'
import React from 'react'
import Drawer from './Drawer'
import TabNavigator from './Tab'
import Stack from './Stack'


export default function Root() {
  return (
    <View style={{flex:1}}>
         {/* <Stack/> */}
         <TabNavigator/>
         {/* <Drawer/> */}
    </View>
  )
}