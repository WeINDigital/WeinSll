import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import SalesTransactionDetailsTemplate, {
  SalesTransactionDetail,
} from '@src/components/templates/SalesTransactionDetailsTemplate/SalesTransactionDetailsTemplate';
import { Alert } from 'react-native';

const SalesTransactionDetails = () => {
  const route = useRoute<any>();
  const transaction: SalesTransactionDetail = route.params?.transaction;
  const [reasons, setReasons] = useState('');

  const onSubmit = () => {
    console.log('submit', { transaction, reasons });
    Alert.alert('Submitted', `Reasons: ${reasons}`);
  };

  return (
    <SalesTransactionDetailsTemplate
      transaction={transaction}
      reasons={reasons}
      onReasonsChange={setReasons}
      onSubmit={onSubmit}
    />
  );
};

export default SalesTransactionDetails;
