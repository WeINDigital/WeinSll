import { StatusBar } from 'react-native';
import React from 'react';
import { RootNavigator } from '@src/navigation'
import { AuthProvider } from '@src/context/AuthContext'
const App = () => {
  return (
    <AuthProvider>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <RootNavigator />
    </AuthProvider>
  )
}

export default App