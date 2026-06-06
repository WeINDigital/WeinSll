import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@src/components/atoms/Button/Button';
import { SummaryRow } from '@src/components/molecules/SummaryRow/SummaryRow';
import { PaymentOption } from '@src/components/molecules/PaymentOption/PaymentOption';

export const CreateInvoiceForm = () => {
  const [payment, setPayment] = useState<'cash' | 'credit'>('cash');

  return (
    <View style={styles.container}>
      <PaymentOption
        label="Cash"
        selected={payment === 'cash'}
        onPress={() => setPayment('cash')}
      />

      <View style={styles.spacer} />

      <PaymentOption
        label="Credit"
        selected={payment === 'credit'}
        onPress={() => setPayment('credit')}
      />

      <View style={styles.spacerLg} />

      <SummaryRow label="Total Amount" value="264 EGP" />
      <SummaryRow label="Received" value="100 EGP" />
      <SummaryRow
        label="Remaining"
        value="164 EGP"
        valueColor="red"
      />

      <View style={styles.spacerLg} />

      <Button title="Review" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  spacer: {
    height: 12,
  },
  spacerLg: {
    height: 24,
  },
});
