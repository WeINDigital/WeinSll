import React, { useState } from 'react';
import { AuthTemplate } from '../../components/templates/AuthTemplate/AuthTemplate';
import { ResetCodeForm } from '../../components/organisms/ResetCodeForm/ResetCodeForm';
import { Routes } from '../../navigation/routes';


export const ResetCode = ({ navigation }: any) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (code: string) => {
    setLoading(true);
    console.log('CODE', code);

    setTimeout(() => {
      setLoading(false);
      navigation.replace(Routes.NEW_PASSWORD);
    }, 1200);
  };

  return (
    <AuthTemplate
      title="Verification Code"
      top={true}
    >
      <ResetCodeForm
        loading={loading}
        onSubmit={handleSubmit}
        onResend={() => console.log('RESEND')}
      />
    </AuthTemplate>
  );
};
