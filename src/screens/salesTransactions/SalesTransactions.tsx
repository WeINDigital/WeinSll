import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import SalesTransactionsTemplate from '@src/components/templates/SalesTransactionsTemplate/SalesTransactionsTemplate';
import { ReceiptItem } from '@src/components/molecules/ReceiptCard/ReceiptCard';
import { Routes } from '@src/navigation/routes';

const MOCK_TRANSACTIONS: ReceiptItem[] = [
  { id: '1', clientName: 'Youssef Bsheer', paymentType: 'Cash', date: '12/12/2021', amount: 941 },
  { id: '2', clientName: 'Youssef Bsheer', paymentType: 'Credit', date: '12/12/2021', amount: 941 },
];

const SalesTransactions = () => {
  const navigation = useNavigation<any>();
  const [search, setSearch] = useState('');

  const filtered = MOCK_TRANSACTIONS.filter(t =>
    t.clientName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SalesTransactionsTemplate
      data={filtered}
      searchQuery={search}
      onSearchChange={setSearch}
      onPress={(item) =>
        navigation.navigate(Routes.SALES_TRANSACTION_DETAILS, {
          transaction: {
            invoiceNumber: '#121545',
            clientName: item.clientName,
            salesmanName: 'Mohamed Bsheer',
            items: [
              { qty: 1, name: 'Chipsy', price: 132 },
              { qty: 1, name: 'Pepsi', price: 132 },
            ],
            paymentType: item.paymentType,
            discount: 32,
            totalAmount: item.amount,
            received: 100,
            remaining: item.amount - 100,
            collectionDate: 'Jan 6, 2022',
          },
        })
      }
      onApprove={(id) => console.log('approve', id)}
      onDisapprove={(id) => console.log('disapprove', id)}
    />
  );
};

export default SalesTransactions;
