import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AuthTemplate } from '../../components/templates/AuthTemplate/AuthTemplate';
import { useNavigation, useRoute } from '@react-navigation/native';
import CreateDiscountTemplate from '../../components/templates/CreateDiscountTemplate/CreateDiscountTemplate';
import { requestDiscount } from '../../services/discounts';
import { Routes } from '../../navigation/routes';

type Item = {
  id: string;
  name: string;
  price: number;
  barcode?: string;
};

const CreateDiscounts = () => {
  const route = useRoute<any>();
  const barcode = route?.params?.barcode;
  const navigation = useNavigation();
  const [paymentType, setPaymentType] = useState<'cash' | 'credit'>('cash');

  const [items, setItems] = useState<Item[]>([]);
  const [totalAmount, setTotalAmount] = useState('');
  const [reason, setReason] = useState('');
  const [receivedAmount, setReceivedAmount] = useState('');
  const [collectionDate, setCollectionDate] = useState<Date>(new Date());

  useEffect(() => {
    setItems([
      { id: '1', name: 'Chipsy', price: 123 },
      { id: '2', name: 'Chipsy', price: 123 },
      { id: '3', name: 'Chipsy', price: 123 },
    ]);
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

  const onReview = async () => {
    const payload = {
      clientId: 'unknown',
      paymentType,
      items,
      totalAmount,
      receivedAmount,
      collectionDate,
      reason,
    };

    try {
      const res = await requestDiscount(payload as any);
      (navigation as any).navigate(Routes.DISCOUNT_DETAILS as any, { discount: res } as any);
    } catch (err) {
      console.warn('discount request failed', err);
    }
  };
  return (
    <AuthTemplate
      top
      title="Request discount"
      bottomTitle="Request"
      onPress={onReview}
      //   disabled={items.length === 0 || totalAmount === '' }
      loading={false}
    >
      <CreateDiscountTemplate
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
        reason={reason}
        setReason={setReason}
      />
    </AuthTemplate>
  );
};

export default CreateDiscounts;
