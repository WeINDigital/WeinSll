import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import { AuthContext } from '../context/AuthContext';

export default function RootNavigator() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
