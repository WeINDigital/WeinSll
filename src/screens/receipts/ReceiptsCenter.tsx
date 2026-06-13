import React, { useContext, useState } from 'react';
import ReceiptsCenterTemplate from '@src/components/templates/ReceiptsCenterTemplate/ReceiptsCenterTemplate';
import { ReceiptItem } from '@src/components/molecules/ReceiptCard/ReceiptCard';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '@src/navigation/routes';
import { AuthContext } from '@src/context/AuthContext';

const MOCK_RECEIPTS: ReceiptItem[] = [
  {
    id: '1',
    clientName: 'Youssef Bsheer',
    paymentType: 'Cash',
    date: '12/12/2021',
    amount: 2020,
  },
  {
    id: '2',
    clientName: 'Youssef Bsheer',
    paymentType: 'Credit',
    date: '12/12/2021',
    amount: 941,
    collectionDate: '12/10/2025',
  },
];

const MOCK_RECEIPTS_SUPERVISOR: ReceiptItem[] = [
  {
    id: '1',
    clientName: 'Youssef Bsheer',
    paymentType: 'Cash',
    date: '12/12/2021',
    amount: 2020,
    salesmen:"ahmed"

  },
  {
    id: '2',
    clientName: 'Youssef Bsheer',
    paymentType: 'Credit',
    date: '12/12/2021',
    amount: 941,
    collectionDate: '12/10/2025',
    salesmen:"ali fathy"
  },
];

const ReceiptsCenter = () => {
  const navigation = useNavigation<any>();
  const { role } = useContext(AuthContext);
  const [search, setSearch] = useState('');

  const data = role === 'supervisor' ? MOCK_RECEIPTS_SUPERVISOR : MOCK_RECEIPTS
  const filtered = data.filter(r =>
    r.clientName.toLowerCase().includes(search.toLowerCase()),
  );

  const cardPressed = (item: ReceiptItem) => {
    navigation.navigate(Routes.RECEIPT_DETAILS, {
      receipt: {
        clientName: item.clientName,
        paymentType: item.paymentType,
        collectionDate: item.collectionDate ?? '',
        items: [{ qty: 1, name: 'Chipsy', price: '132.000' }, { qty: 1, name: 'Pepsi', price: '132.000' }],
        discount: 32,
        totalAmount: item.amount,
        received: 100,
        remaining: item.amount - 100,
      },
    });
  };

  return (
    <ReceiptsCenterTemplate
      data={filtered}
      badge={MOCK_RECEIPTS.length}
      searchQuery={search}
      onSearchChange={setSearch}
      onCollect={(id) => console.log('collect', id)}
      onPress={cardPressed}
    />
  );
};

export default ReceiptsCenter;
