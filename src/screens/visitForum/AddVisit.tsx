import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AddVisitTemplate from '@src/components/templates/AddVisitTemplate/AddVisitTemplate';

const AddVisit = () => {
  const navigation = useNavigation();

  return (
    <AddVisitTemplate
      onSave={(data) => {
        console.log('save visit', data);
        navigation.goBack();
      }}
    />
  );
};

export default AddVisit;
