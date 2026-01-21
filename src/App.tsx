import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button } from './components/atoms/Button/Button'
import { Login } from './screens/LoginScreen'
import { RootNavigator } from './navigation'
import {  AuthProvider } from './components/atoms/AuthContext/AuthContext'

const App = () => {

  return (
<AuthProvider>
  <RootNavigator />
</AuthProvider>
  )
}

export default App