import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '@src/navigation/types';
import { Routes } from '@src/navigation/routes';
import SalesmenTemplate, { Salesman } from '@src/components/templates/SalesmenTemplate/SalesmenTemplate';

const MOCK_SALESMEN: Salesman[] = [
  { id: '1', name: 'Youssef Bsheer', location: 'Maadi, Cairo', phone: '01094828532', amount: 941 },
  { id: '2', name: 'Youssef Bsheer', location: 'Maadi, Cairo', phone: '01094828532', amount: 941 },
  { id: '3', name: 'Youssef Bsheer', location: 'Maadi, Cairo', phone: '01094828532', amount: 941 },
  { id: '4', name: 'Youssef Bsheer', location: 'Maadi, Cairo', phone: '01094828532', amount: 941 },
];

type Nav = NativeStackNavigationProp<AppStackParamList>;

const Salesmen = () => {
  const navigation = useNavigation<Nav>();

  return (
    <SalesmenTemplate
      salesmen={MOCK_SALESMEN}
      onCardPress={item =>
        navigation.navigate(Routes.SALESMAN_PROFILE as any, { salesmanId: item.id })
      }
    />
  );
};

export default Salesmen;
