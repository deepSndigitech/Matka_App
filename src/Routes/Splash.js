import { View, Text, Image } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
      <Image source={require('../Images/rezeetImg/matka.png')} style={{ height: 300, width: 300, resizeMode: 'contain', }} />
    </View>
  )
}

export default Splash