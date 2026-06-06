import { type Client } from '@src/components';
import React, { createContext, useContext, useState } from 'react';

type ClientsContextType = {
  clients: Client[];
  addClient: (client: Omit<Client, 'id'>) => void;
  updateClient: (id: string, data: Partial<Omit<Client, 'id'>>) => void;
};

const ClientsContext = createContext<ClientsContextType>({} as ClientsContextType);

let nextId = 4;

const INITIAL_CLIENTS: Client[] = [
  { id: '1', name: 'moataz mahdi', type: 'Wholesale', location: 'Maadi, Cairo', phone: '01000000001' },
  { id: '2', name: 'mohamed mahdi', type: 'Wholesale', location: 'Maadi, Cairo', phone: '01000000002' },
  { id: '3', name: 'Youssef Bsheer', type: 'Wholesale', location: 'Maadi, Cairo', phone: '01000000003' },
];

export const ClientsProvider = ({ children }: { children: React.ReactNode }) => {
  const [clients, setClients] = useState<Client[]>(INITIAL_CLIENTS);

  const addClient = (data: Omit<Client, 'id'>) => {
    setClients(prev => [...prev, { id: String(nextId++), ...data }]);
  };

  const updateClient = (id: string, data: Partial<Omit<Client, 'id'>>) => {
    setClients(prev => prev.map(c => (c.id === id ? { ...c, ...data } : c)));
  };

  return (
    <ClientsContext.Provider value={{ clients, addClient, updateClient }}>
      {children}
    </ClientsContext.Provider>
  );
};

export const useClients = () => useContext(ClientsContext);
