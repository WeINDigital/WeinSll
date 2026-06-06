import React, { useState } from 'react';
import { AuthTemplate, CreateDiscountTemplate, type SelectableItem } from '@src/components';
import { useNavigation } from '@react-navigation/native';
import { requestDiscount } from '@src/services/discounts';
import { Routes } from '@src/navigation/routes';

const AVAILABLE_ITEMS: SelectableItem[] = [
  { id: '1', name: 'Chipsy', price: 132, Discount: 32 },
  { id: '2', name: 'Pepsi', price: 132, Discount: 32 },
  { id: '3', name: 'Sprite', price: 80, Discount: 10 },
];

const CreateDiscounts = () => {
  const navigation = useNavigation();
  const [paymentType, setPaymentType] = useState<'cash' | 'items' | 'Other'>('cash');
  const [clientId, setClientId] = useState('');
  const [selectedItems, setSelectedItems] = useState<SelectableItem[]>([]);
  const [totalAmount, setTotalAmount] = useState('');
  const [reason, setReason] = useState('');
  const [otherReason, setOtherReason] = useState('');

  const isDisabled = (() => {
    if (!clientId) return true;
    if (paymentType === 'cash') return !totalAmount || !reason;
    if (paymentType === 'items') return selectedItems.length === 0 || !reason;
    if (paymentType === 'Other') return !otherReason;
    return true;
  })();

  const onReview = async () => {
    const payload = {
      clientId,
      paymentType,
      items: selectedItems,
      totalAmount,
      reason,
      otherReason,
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
      disabled={isDisabled}
      loading={false}
    >
      <CreateDiscountTemplate
        paymentType={paymentType}
        onChangePayment={type => {
          setPaymentType(type);
          setSelectedItems([]);
          setTotalAmount('');
        }}
        onClientChange={setClientId}
        availableItems={AVAILABLE_ITEMS}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        totalAmount={totalAmount}
        setTotalAmount={setTotalAmount}
        reason={reason}
        setReason={setReason}
        otherReason={otherReason}
        setOtherReason={setOtherReason}
      />
    </AuthTemplate>
  );
};

export default CreateDiscounts;
