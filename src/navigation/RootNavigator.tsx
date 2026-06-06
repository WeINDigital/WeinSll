import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from '@src/navigation/AuthNavigator';
import AppNavigator from '@src/navigation/AppNavigator';
import { AuthContext } from '@src/context/AuthContext';

export default function RootNavigator() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
