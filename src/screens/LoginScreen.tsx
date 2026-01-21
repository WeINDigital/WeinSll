import React, { use, useState } from 'react';
import { AuthTemplate } from '../components/templates/AuthTemplate/AuthTemplate';
import { LoginForm } from '../components/organisms/LoginForm/LoginForm';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../navigation/routes';
import { View } from 'react-native';

export const Login = () => {
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (data: {
    username: string;
    password: string;
  }) => {
    setLoading(true);
    console.log('LOGIN', data);
    setTimeout(() => {
      setLoading(false);
    //   navigation.replace('Home');
    }, 1500);
  };

  return (
    <View style={{flex:1, backgroundColor:"white",justifyContent:'center'}}>
      <LoginForm
        loading={loading}
        onSubmit={handleLogin}
        onForgotPassword={() =>{
          navigation.navigate(Routes.FORGOT_PASSWORD)
        }
        }
      />
    </View>
  );
};
