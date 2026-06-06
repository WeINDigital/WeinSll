import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '@src/navigation/routes';
import { ForgotPassword } from '@src/screens/auth/ForgotPasswordScreen';
import { ResetCode } from '@src/screens/auth/ResetCode';
import { NewPassword } from '@src/screens/auth/NewPassword';
import { Login } from '@src/screens/auth/LoginScreen';


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
