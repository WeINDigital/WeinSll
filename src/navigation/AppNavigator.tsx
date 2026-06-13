import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '@src/navigation/routes';
import Profile from '@src/screens/common/Profile';
import Settings from '@src/screens/common/Settings';
import Home from '@src/screens/common/Home/Home';
import CreateInvoice from '@src/screens/createInvoice/CreateInvoice';
import CameraScreen from '@src/screens/CameraScreen/CameraScreen';
import ConfirmInvoice from '@src/screens/confirmInvoice/ConfirmInvoice';
import Discounts from '@src/screens/discounts/Discounts';
import Clients from '@src/screens/common/clients/Clients';
import CreateDiscounts from '@src/screens/createDiscounts/CreateDiscounts';
import DiscountDetails from '@src/screens/discounts/DiscountDetails';
import AddClient from '@src/screens/common/clients/AddClient';
import EditClient from '@src/screens/common/clients/EditClient';
import ClientDetails from '@src/screens/common/clients/ClientDetails';
import ReceiptsCenter from '@src/screens/receipts/ReceiptsCenter';
import ReceiptDetails from '@src/screens/receipts/ReceiptDetails';
import Collections from '@src/screens/collections/Collections';
import Inventory from '@src/screens/inventory/Inventory';
import VisitForum from '@src/screens/visitForum/VisitForum';
import VisitDetails from '@src/screens/visitForum/VisitDetails';
import AddVisit from '@src/screens/visitForum/AddVisit';
import SalesTransactions from '@src/screens/salesTransactions/SalesTransactions';
import SalesTransactionDetails from '@src/screens/salesTransactions/SalesTransactionDetails';
import CreateSurvey from '@src/screens/visitForum/CreateSurvey';
import Salesmen from '@src/screens/salesmen/Salesmen';
import SalesmanProfile from '@src/screens/salesmen/SalesmanProfile';

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
      <Stack.Screen name={Routes.ADD_CLIENT} component={AddClient} />
      <Stack.Screen name={Routes.EDIT_CLIENT} component={EditClient} />
      <Stack.Screen name={Routes.CLIENT_DETAILS} component={ClientDetails} />
      <Stack.Screen name={Routes.RECEIPTS_CENTER} component={ReceiptsCenter} />
      <Stack.Screen name={Routes.RECEIPT_DETAILS} component={ReceiptDetails} />
      <Stack.Screen name={Routes.COLLECTIONS} component={Collections} />
      <Stack.Screen name={Routes.INVENTORY} component={Inventory} />
      <Stack.Screen name={Routes.VISIT_FORUM} component={VisitForum} />
      <Stack.Screen name={Routes.VISIT_DETAILS} component={VisitDetails} />
      <Stack.Screen name={Routes.ADD_VISIT} component={AddVisit} />
      <Stack.Screen name={Routes.SALES_TRANSACTIONS} component={SalesTransactions} />
      <Stack.Screen name={Routes.SALES_TRANSACTION_DETAILS} component={SalesTransactionDetails} />
      <Stack.Screen name={Routes.CREATE_SURVEY} component={CreateSurvey} />
      <Stack.Screen name={Routes.SALESMEN} component={Salesmen} />
      <Stack.Screen name={Routes.SALESMAN_PROFILE} component={SalesmanProfile} />
    </Stack.Navigator>
  );
}
