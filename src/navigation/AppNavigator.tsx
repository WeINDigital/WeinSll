import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './routes';
import Profile from '../screens/common/Profile';
import Settings from '../screens/common/Settings';
import Home from '../screens/common/Home/Home';
import CreateInvoice from '../screens/createInvoice/CreateInvoice';
import CameraScreen from '../screens/CameraScreen/CameraScreen';
import ConfirmInvoice from '../screens/confirmInvoice/ConfirmInvoice';
import Discounts from '../screens/discounts/Discounts';
import Clients from '../screens/common/clients/Clients';
import CreateDiscounts from '../screens/createDiscounts/CreateDiscounts';
import DiscountDetails from '../screens/discounts/DiscountDetails';



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
      <Stack.Screen name={Routes.DISCOUNTS} component={Discounts} />
      <Stack.Screen name={Routes.CLIENTS} component={Clients} />
      <Stack.Screen name={Routes.CREATE_DISCOUNTS} component={CreateDiscounts} />
      <Stack.Screen name={Routes.DISCOUNT_DETAILS} component={DiscountDetails} />
    </Stack.Navigator>
  );
}
