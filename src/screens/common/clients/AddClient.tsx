import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AddEditClientTemplate, type Employee } from '@src/components';
let nextEmpId = 1;

const AddClient = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [secondPhone, setSecondPhone] = useState('');
  const [type, setType] = useState('Wholesale');
  const [location, setLocation] = useState('');
  const [employees, setEmployees] = useState<Employee[]>([]);

  const addEmployee = () =>
    setEmployees(prev => [...prev, { id: String(nextEmpId++), name: '', phone: '' }]);

  const removeEmployee = (id: string) =>
    setEmployees(prev => prev.filter(e => e.id !== id));

  const updateEmployee = (id: string, field: 'name' | 'phone', value: string) =>
    setEmployees(prev => prev.map(e => (e.id === id ? { ...e, [field]: value } : e)));

  const handleSave = () => {
    navigation.goBack();
  };

  return (
    <AddEditClientTemplate
      mode="add"
      name={name} onNameChange={setName}
      phone={phone} onPhoneChange={setPhone}
      secondPhone={secondPhone} onSecondPhoneChange={setSecondPhone}
      type={type} onTypeChange={setType}
      location={location} onLocationChange={setLocation}
      employees={employees}
      onAddEmployee={addEmployee}
      onRemoveEmployee={removeEmployee}
      onEmployeeChange={updateEmployee}
      onSave={handleSave}
    />
  );
};

export default AddClient;
