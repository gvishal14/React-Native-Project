import { View, Text ,Button} from 'react-native'
import React from 'react'
import Signup from './Signup'

export default function Home({navigation}) {
  return (
    <View style={{marginTop:200}}>
      <Text>Home</Text>
      <Button title='Home' 
      onPress={()=> navigation.navigate('Signup')}/>
    </View>
  )
}