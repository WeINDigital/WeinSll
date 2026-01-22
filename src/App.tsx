import { View, Text, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { RootNavigator } from './navigation'
import { AuthProvider } from './context/AuthContext'

const App = () => {

  return (
<AuthProvider>
  <StatusBar barStyle="dark-content" backgroundColor="white" />
  <RootNavigator />
</AuthProvider>
  )
}

export default App