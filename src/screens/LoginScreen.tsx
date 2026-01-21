import React, { use, useContext, useState } from 'react';
import { AuthTemplate } from '../components/templates/AuthTemplate/AuthTemplate';
import { LoginForm } from '../components/organisms/LoginForm/LoginForm';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../navigation/routes';
import { View } from 'react-native';
import { AuthContext } from '../components/atoms/AuthContext/AuthContext';

export const Login = () => {
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(false);
  const { login} = useContext(AuthContext);

const handleLogin = async (data: {
  username: string;
  password: string;
}) => {
 setLoading(true);

  setTimeout(() => {
    login();  
    setLoading(false);
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
