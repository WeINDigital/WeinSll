import React, { use, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { LoginForm } from '../../components/organisms/LoginForm/LoginForm';
import { Routes } from '../../navigation/routes';
import { AuthContext } from '../../context/AuthContext';

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
    login("salesman");  
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
