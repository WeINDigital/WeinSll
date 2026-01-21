import React, { useState } from 'react';
import { AuthTemplate } from '../components/templates/AuthTemplate/AuthTemplate';
import { LoginForm } from '../components/organisms/LoginForm/LoginForm';

export const LoginScreen = ({ navigation }: any) => {
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
    <AuthTemplate  ViewStyles={{flex:1, backgroundColor:"white",justifyContent: 'center',alignItems:"center", }}  >
      <LoginForm
        loading={loading}
        onSubmit={handleLogin}
        onForgotPassword={() =>{
        //   navigation.navigate('ForgotPassword')
        }
        }
      />
    </AuthTemplate>
  );
};
