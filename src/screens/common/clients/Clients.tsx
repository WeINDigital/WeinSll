import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '@src/navigation/routes';
import { ClientsTemplate, type Client } from '@src/components';
import { AuthContext } from '@src/context/AuthContext';

const CLIENTS_DATA: Client[] = [
  { id: '1', name: 'moataz mahdi', type: 'Wholesale', location: 'Maadi, Cairo', phone: '01000000001' },
  { id: '2', name: 'mohamed mahdi', type: 'Wholesale', location: 'Maadi, Cairo', phone: '01000000002' },
  { id: '3', name: 'Youssef Bsheer', type: 'Wholesale', location: 'Maadi, Cairo', phone: '01000000003' },
];

const CLIENTS_DATA_SUPERVISOR: Client[] = [
  { id: '1', name: 'moataz mahdi', type: 'Wholesale', location: 'Maadi, Cairo', phone: '01000000001',amount:941,salesName:"Ahmed Samir" },
  { id: '2', name: 'mohamed mahdi', type: 'Wholesale', location: 'Maadi, Cairo', phone: '01000000002',amount:220,salesName:"Ahmed" },
  { id: '3', name: 'Youssef Bsheer', type: 'Wholesale', location: 'Maadi, Cairo', phone: '01000000003',amount:2000,salesName:"mohamed ali" },
];


const Clients = () => {
  const navigation = useNavigation<any>();
  const { role } = useContext(AuthContext);
  const data = role === 'supervisor' ? CLIENTS_DATA_SUPERVISOR : CLIENTS_DATA;

  return (
    <ClientsTemplate
      clients={ data}
      onAddClient={() => navigation.navigate(Routes.ADD_CLIENT,{role})}
      onCardPress={(client: Client) =>{
        console.log('onCardPress')
        navigation.navigate(Routes.CLIENT_DETAILS, { client })
      }
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
