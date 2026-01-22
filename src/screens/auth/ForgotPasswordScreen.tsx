import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthTemplate } from '../../components/templates/AuthTemplate/AuthTemplate';
import { ForgotPasswordForm } from '../../components/organisms/ForgotPasswordForm/ForgotPasswordForm';

export const ForgotPassword = () => {
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (phone: string) => {
    setLoading(true);
    console.log('PHONE', phone);
    
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('ResetCode');
    }, 1000);
  };

  return (
    <View style={{flex:1, backgroundColor:"white",justifyContent:'flex-start'}}>
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
