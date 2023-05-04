import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Login({navigation}) {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Go to Signup Screen" 
      onPress={()=> navigation.navigate('Signup')}/>
    </View>
  )
}