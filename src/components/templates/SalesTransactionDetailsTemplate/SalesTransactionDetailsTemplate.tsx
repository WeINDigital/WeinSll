import React from 'react';
import {
  View,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import { AuthTemplate } from '@src/components/templates/AuthTemplate/AuthTemplate';
import { TextAtom } from '@src/components/atoms/Text/Text';
import { SpacerAtom } from '@src/components/atoms/Spacer/Spacer';
import Separator from '@src/components/atoms/Separator';
import { hp, wp, sp } from '@src/utils/dimensions';

export type SalesTransactionDetail = {
  invoiceNumber: string;
  clientName: string;
  salesmanName: string;
  items: { qty: number; name: string; price: number }[];
  paymentType: string;
  discount: number;
  totalAmount: number;
  received: number;
  remaining: number;
  collectionDate: string;
};

interface Props {
  transaction: SalesTransactionDetail;
  reasons: string;
  onReasonsChange: (text: string) => void;
  onSubmit: () => void;
  loading?: boolean;
}

const SalesTransactionDetailsTemplate: React.FC<Props> = ({
  transaction,
  reasons,
  onReasonsChange,
  onSubmit,
  loading,
}) => {
  return (
    <AuthTemplate
      top
      title={transaction.invoiceNumber}
      bottomTitle="Submit"
      onPress={onSubmit}
      loading={loading}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.body}
      >
        {/* Client & Salesman */}
        <View style={styles.infoRow}>
          <TextAtom variant="caption" style={styles.label}>Client</TextAtom>
          <TextAtom variant="subtitle">{transaction.clientName}</TextAtom>
        </View>
        <Separator mt={hp(12)} mb={hp(12)} />
        <View style={styles.infoRow}>
          <TextAtom variant="caption" style={styles.label}>Salesman</TextAtom>
          <TextAtom variant="subtitle">{transaction.salesmanName}</TextAtom>
        </View>
        <Separator mt={hp(12)} mb={hp(12)} />

        {/* Items table */}
        <View style={styles.tableHeader}>
          <TextAtom variant="caption" style={[styles.colQty, styles.tableHeaderText]}>Qty</TextAtom>
          <TextAtom variant="caption" style={[styles.colName, styles.tableHeaderText]}>Name</TextAtom>
          <TextAtom variant="caption" style={[styles.colPrice, styles.tableHeaderText]}>Price</TextAtom>
        </View>

        {transaction.items.map((item, i) => (
          <React.Fragment key={i}>
            <View style={styles.tableRow}>
              <TextAtom style={styles.colQty}>{item.qty}</TextAtom>
              <TextAtom style={styles.colName}>{item.name}</TextAtom>
              <TextAtom style={styles.colPrice}>{item.price.toFixed(3)}</TextAtom>
            </View>
            <Separator />
          </React.Fragment>
        ))}

        <SpacerAtom height={hp(16)} />

        {/* Summary */}
        <View style={styles.infoRow}>
          <TextAtom variant="body">Payment Type</TextAtom>
          <TextAtom variant="subtitle">{transaction.paymentType}</TextAtom>
        </View>

        <SpacerAtom height={hp(12)} />

        <View style={styles.infoRow}>
          <TextAtom variant="body">Discount</TextAtom>
          <TextAtom variant="subtitle" style={styles.discountText}>
            -{transaction.discount} EGP
          </TextAtom>
        </View>

        <SpacerAtom height={hp(12)} />
        <Separator />
        <SpacerAtom height={hp(12)} />

        <View style={styles.infoRow}>
          <TextAtom variant="body">Total Amount</TextAtom>
          <TextAtom fw="700">{transaction.totalAmount} EGP</TextAtom>
        </View>

        <SpacerAtom height={hp(12)} />

        <View style={styles.infoRow}>
          <TextAtom variant="body">Received</TextAtom>
          <TextAtom variant="subtitle" style={styles.receivedText}>
            {transaction.received} EGP
          </TextAtom>
        </View>

        <SpacerAtom height={hp(12)} />

        <View style={styles.infoRow}>
          <TextAtom variant="body">Remaining</TextAtom>
          <TextAtom variant="subtitle">{transaction.remaining} EGP</TextAtom>
        </View>

        <SpacerAtom height={hp(12)} />

        <View style={styles.infoRow}>
          <TextAtom variant="body">Collection Date</TextAtom>
          <TextAtom fw="600">{transaction.collectionDate}</TextAtom>
        </View>

        <SpacerAtom height={hp(20)} />

        {/* Reasons */}
        <TextAtom variant="subtitle" fw="600">Reasons</TextAtom>
        <SpacerAtom height={hp(8)} />
        <TextInput
          value={reasons}
          onChangeText={onReasonsChange}
          placeholder="Enter a reasons..."
          placeholderTextColor="#9CA3AF"
          multiline
          style={styles.reasonsInput}
        />

        {/* <SpacerAtom height={hp(120)} /> */}
      </ScrollView>
    </AuthTemplate>
  );
};

const styles = StyleSheet.create({
  body: { paddingHorizontal: wp(16),paddingBottom: hp(150) },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: { color: '#667085' },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#F9FAFB',
    paddingHorizontal: wp(8),
    paddingVertical: hp(10),
  },
  tableHeaderText: { color: '#667085' },
  tableRow: {
    flexDirection: 'row',
    paddingHorizontal: wp(8),
    paddingVertical: hp(14),
  },
  colQty: { width: wp(40) },
  colName: { flex: 1 },
  colPrice: { width: wp(80), textAlign: 'right' },
  discountText: { color: '#F04438' },
  receivedText: { color: '#12B76A' },
  reasonsInput: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: sp(8),
    padding: sp(12),
    minHeight: hp(100),
    textAlignVertical: 'top',
    color: '#111827',
  },
});

export default SalesTransactionDetailsTemplate;
