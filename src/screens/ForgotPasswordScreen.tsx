import React, { useState } from 'react';
import { AuthTemplate } from '../components/templates/AuthTemplate/AuthTemplate';
import { ForgotPasswordForm } from '../components/organisms/ForgotPasswordForm/ForgotPasswordForm';

export const ForgotPasswordScreen = ({ navigation }: any) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (phone: string) => {
    setLoading(true);
    console.log('PHONE', phone);

    setTimeout(() => {
      setLoading(false);
    //   navigation.navigate('ResetCode');
    }, 1000);
  };

  return (
    <AuthTemplate
      title="Forgot Password"
      onBack={() => navigation.goBack()}
    >
      <ForgotPasswordForm
        loading={loading}
        onSubmit={handleSubmit}
      />
    </AuthTemplate>
  );
};
