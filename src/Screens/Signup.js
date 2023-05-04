import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Signup({navigation}) {
  return (
    <View>
      <Text>Signup</Text>
      <Button title="Go to Tab Navigator" 
      onPress={()=> navigation.navigate('TabNavigator')}/>
    </View>
  )
}