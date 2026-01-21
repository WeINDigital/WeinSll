import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './routes';
import { Login } from '../screens/LoginScreen';
import { ForgotPassword } from '../screens/ForgotPasswordScreen';
import { ResetCode } from '../screens/ResetCode';
import { NewPassword } from '../screens/NewPassword';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.LOGIN} component={Login} />
      <Stack.Screen name={Routes.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={Routes.RESET_CODE} component={ResetCode} />
      <Stack.Screen name={Routes.NEW_PASSWORD} component={NewPassword} />
    </Stack.Navigator>
  );
}
