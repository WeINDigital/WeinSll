import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '@src/navigation/routes';
import { AuthTemplate, NewPasswordForm } from '@src/components';


export const NewPassword = () => {
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (password: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.reset({
        index: 0,
        routes: [{ name: Routes.LOGIN }],
      });
    }, 1000);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
      }}
    >
      <AuthTemplate top={true} title="New Password">
        <NewPasswordForm loading={loading} onSubmit={handleSubmit} />
      </AuthTemplate>
    </View>
  );
};
