import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

export default function RootNavigator() {
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
