import React, { useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { AddEditClientTemplate, type Employee } from '@src/components';
import { useClients } from '@src/context/ClientsContext';

type Params = {
  client: { id: string; name: string; phone: string; type: string; employees: Employee[] };
};

let nextEmpId = 200;

const EditClient = () => {
  const navigation = useNavigation();
  const { updateClient } = useClients();
  const route = useRoute<RouteProp<Record<string, Params>, string>>();
  const initial = route?.params?.client;

  const [name, setName] = useState(initial?.name ?? '');
  const [phone, setPhone] = useState(initial?.phone ?? '');
  const [type, setType] = useState(initial?.type ?? 'Wholesale');
  const [employees, setEmployees] = useState<Employee[]>(initial?.employees ?? []);

  const addEmployee = () =>
    setEmployees(prev => [...prev, { id: String(nextEmpId++), name: '', phone: '' }]);

  const removeEmployee = (id: string) =>
    setEmployees(prev => prev.filter(e => e.id !== id));

  const updateEmployee = (id: string, field: 'name' | 'phone', value: string) =>
    setEmployees(prev => prev.map(e => (e.id === id ? { ...e, [field]: value } : e)));

  const handleSave = () => {
    if (!initial?.id || !name.trim()) return;
    updateClient(initial.id, { name: name.trim(), phone, type, employees });
    navigation.goBack();
  };

  return (
    <AddEditClientTemplate
      mode="edit"
      name={name} onNameChange={setName}
      phone={phone} onPhoneChange={setPhone}
      type={type} onTypeChange={setType}
      employees={employees}
      onAddEmployee={addEmployee}
      onRemoveEmployee={removeEmployee}
      onEmployeeChange={updateEmployee}
      onSave={handleSave}
    />
  );
};

export default EditClient;
