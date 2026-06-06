import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '@src/navigation/routes';
import { ClientsTemplate, type Client } from '@src/components';

const CLIENTS_DATA: Client[] = [
  { id: '1', name: 'moataz mahdi', type: 'Wholesale', location: 'Maadi, Cairo', phone: '01000000001' },
  { id: '2', name: 'mohamed mahdi', type: 'Wholesale', location: 'Maadi, Cairo', phone: '01000000002' },
  { id: '3', name: 'Youssef Bsheer', type: 'Wholesale', location: 'Maadi, Cairo', phone: '01000000003' },
];

const Clients = () => {
  const navigation = useNavigation<any>();

  return (
    <ClientsTemplate
      clients={CLIENTS_DATA}
      onAddClient={() => navigation.navigate(Routes.ADD_CLIENT)}
      onCardPress={(client: Client) =>
        navigation.navigate(Routes.CLIENT_DETAILS, { client })
      }
      onRequestDiscount={(client: Client) =>
        navigation.navigate(Routes.CREATE_DISCOUNTS, { clientId: client.id })
      }
      onEdit={(client: Client) =>
        navigation.navigate(Routes.EDIT_CLIENT, {
          client: {
            id: client.id,
            name: client.name,
            phone: client.phone,
            type: client.type,
            employees: client.employees ?? [],
          },
        })
      }
    />
  );
};

export default Clients;
