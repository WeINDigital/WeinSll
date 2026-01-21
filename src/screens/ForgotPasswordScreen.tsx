import React, { useState } from 'react';
import { AuthTemplate } from '../components/templates/AuthTemplate/AuthTemplate';
import { ForgotPasswordForm } from '../components/organisms/ForgotPasswordForm/ForgotPasswordForm';
import { View } from 'react-native';

export const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (phone: string) => {
    setLoading(true);
    console.log('PHONE', phone);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <View style={{flex:1, backgroundColor:"red",justifyContent:'flex-start'}}>
    <AuthTemplate
    top={true}
      title="Forgot Password"
    >
      <ForgotPasswordForm
        loading={loading}
        onSubmit={handleSubmit}
      />
    </AuthTemplate>
    </View>
  );
};
