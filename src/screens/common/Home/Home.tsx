import React, { useCallback, useContext } from 'react';

import SalesHome from './SalesHome';
import { AuthContext } from '../../../context/AuthContext';
import SupervisorHome from './SupervisorHome';
import ManagerHome from './ManagerHome';
import { BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const Home = () => {
  const { role } = useContext(AuthContext);

    useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp(); 
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => subscription.remove();
    }, [])
  );
  if (role === 'salesman') return <SalesHome />;
  if (role === 'supervisor') return <SupervisorHome />;
  if (role === 'manager') return <ManagerHome />;

  return null;
};

export default Home;
