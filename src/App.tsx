import { View, Text } from 'react-native'
import React from 'react'
import { Button } from './components/atoms/Button/Button'
import { LoginScreen } from './screens/LoginScreen'

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor:"white"}}>
      <LoginScreen/>
    </View>
  )
}

export default App