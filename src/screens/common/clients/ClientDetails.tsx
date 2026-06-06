import React from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ClientDetailsTemplate, type ClientDetail } from '@src/components';
import { Routes } from '@src/navigation/routes';

type Params = { client: ClientDetail };

const MOCK_DETAIL: ClientDetail = {
  name: 'Youssef Bsheer',
  type: 'Wholesale',
  location: 'Maadi, Cairo',
  phone: '01094828532',
  employees: [
    { name: 'Ahmed Samir', phone: '01094828532' },
    { name: 'Mohamed Khaled', phone: '01094828532' },
  ],
  invoices: [
    { id: '1', clientName: 'Youssef Bsheer', paymentType: 'Cash', date: '12/12/2021', amount: 941 },
    {
      id: '2',
      clientName: 'Youssef Bsheer',
      paymentType: 'Credit',
      date: '12/12/2021',
      amount: 941,
      collectionDate: '12/12/2021',
    },
  ],
  visits: [
    { id: '1', clientName: 'Youssef Bsheer', location: 'Maadi, Egypt', date: '12/12/2021' },
    { id: '2', clientName: 'Youssef Bsheer', location: 'Maadi, Egypt', date: '12/12/2021' },
  ],
};

const ClientDetails = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<RouteProp<Record<string, Params>, string>>();
  const client = route?.params?.client ?? MOCK_DETAIL;

  return (
    <ClientDetailsTemplate
      client={client}
      onRequestDiscount={() =>
        navigation.navigate(Routes.CREATE_DISCOUNTS, { clientId: client.name })
      }
      onEdit={() =>
        navigation.navigate(Routes.EDIT_CLIENT, {
          client: {
            id: '',
            name: client.name,
            phone: client.phone,
            type: client.type,
            employees: client?.employees?.map((e, i) => ({ ...e, id: String(i) })),
          },
        })
      }
    />
  );
};

export default ClientDetails;
