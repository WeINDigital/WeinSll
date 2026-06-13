export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  ResetCode: undefined;
  NewPassword: undefined;
};

export type AppStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  CreateInvoice:undefined;
  CameraScreen:undefined;
  ConfirmInvoice:undefined;
  Discounts:undefined;
  Clients:undefined;
  CreateDiscounts:undefined;
  CreateSurvey:undefined;
  Salesmen: undefined;
  SalesmanProfile: { salesmanId: string };
};
