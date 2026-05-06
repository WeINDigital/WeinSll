import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './routes';
import Profile from '../screens/common/Profile';
import Settings from '../screens/common/Settings';
import Home from '../screens/common/Home/Home';
import CreateInvoice from '../screens/createInvoice/CreateInvoice';
import CameraScreen from '../screens/CameraScreen/CameraScreen';
import ConfirmInvoice from '../screens/confirmInvoice/ConfirmInvoice';



const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.HOME} component={Home} />
      <Stack.Screen name={Routes.PROFILE} component={Profile} />
      <Stack.Screen name={Routes.SETTINGS} component={Settings} />
      <Stack.Screen name={Routes.CREATE_INVOICE} component={CreateInvoice} />
      <Stack.Screen name={Routes.CAMERA_SCREEN} component={CameraScreen} />
      <Stack.Screen name={Routes.CONFIRM_INVOICE} component={ConfirmInvoice} />
    </Stack.Navigator>
  );
}
