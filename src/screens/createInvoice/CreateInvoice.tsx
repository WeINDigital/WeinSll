import React, { useEffect, useState } from 'react';
import { AuthTemplate } from '../../components/templates/AuthTemplate/AuthTemplate';
import CreateInvoiceTemplate from '../../components/templates/CreateInvoiceTemplate/CreateInvoiceTemplate';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Routes } from '../../navigation/routes';

type Item = {
  id: string;
  name: string;
  price: number;
  barcode?: string;
};

const CreateInvoice = () => {
  const route = useRoute<any>();
  const barcode = route?.params?.barcode;
  const navigation = useNavigation<any>();
  const [paymentType, setPaymentType] = useState<'cash' | 'credit'>('cash');

  const [items, setItems] = useState<Item[]>([]);
  const [totalAmount, setTotalAmount] = useState('');
  const [receivedAmount, setReceivedAmount] = useState('');
const [collectionDate, setCollectionDate] =
  useState<Date>(new Date());

  useEffect(() => {
    setItems([{id:"1",name:'Chipsy',price:123},{id:"2",name:'Chipsy',price:123},{id:"3",name:'Chipsy',price:123}])
    if (!barcode) return;

    const product = {
      name: 'Chipsy',
      price: 132,
    };

    setItems(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        name: product.name,
        price: product.price,
        barcode,
      },
    ]);
  }, [barcode]);

const onReview = () => {
  navigation.navigate(Routes.CONFIRM_INVOICE, {
    items,
    paymentType,
    totalAmount,
    receivedAmount,
    collectionDate,
    remainingAmount:
      paymentType === 'credit'
        ? Number(totalAmount) - Number(receivedAmount)
        : 0,
  });
};

  return (
    <AuthTemplate
      top
      title="Create Invoice"
      bottomTitle="Review"
      onPress={onReview}
      disabled={items.length === 0 || totalAmount === '' }
      loading={false}
    >
      <CreateInvoiceTemplate
        items={items}
        setItems={setItems}
        paymentType={paymentType}
        onChangePayment={setPaymentType}
        totalAmount={totalAmount}
        setTotalAmount={setTotalAmount}
        receivedAmount={receivedAmount}
        setReceivedAmount={setReceivedAmount}
        onDelete={() => {}}
        collectionDate={collectionDate}
  setCollectionDate={setCollectionDate}
      />
    </AuthTemplate>
  );
};

export default CreateInvoice;
