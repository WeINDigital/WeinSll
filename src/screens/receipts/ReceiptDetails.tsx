import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import ReceiptDetailsTemplate, { ReceiptDetail } from '@src/components/templates/ReceiptDetailsTemplate/ReceiptDetailsTemplate';

type Params = { receipt: ReceiptDetail };

const MOCK_RECEIPT: ReceiptDetail = {
  clientName: 'Youssef Bsheer',
  items: [
    { qty: 1, name: 'Chipsy', price: '132.000' },
    { qty: 1, name: 'Pepsi', price: '132.000' },
  ],
  paymentType: 'Credit',
  discount: 32,
  totalAmount: 232,
  received: 100,
  remaining: 132,
  collectionDate: 'Jan 6, 2022',
};

const ReceiptDetails = () => {
  const route = useRoute<RouteProp<Record<string, Params>, string>>();
  const receipt = route?.params?.receipt ?? MOCK_RECEIPT;

  return <ReceiptDetailsTemplate receipt={receipt} />;
};

export default ReceiptDetails;
