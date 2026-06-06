import React from 'react';
import { View, ScrollView, StyleSheet, Pressable } from 'react-native';
import { TextAtom } from '@src/components/atoms/Text/Text';
import { SpacerAtom } from '@src/components/atoms/Spacer/Spacer';
import Separator from '@src/components/atoms/Separator';
import SvgView from '@src/components/atoms/SvgView/SvgView';
import { Assets } from '@src/assets';
import { hp, wp, sp } from '@src/utils/dimensions';
import { useNavigation } from '@react-navigation/native';

export type ReceiptDetail = {
  clientName: string;
  items: { qty: number; name: string; price: string }[];
  paymentType: string;
  discount: number;
  totalAmount: number;
  received: number;
  remaining: number;
  collectionDate: string;
};

interface Props {
  receipt: ReceiptDetail;
}

const ReceiptDetailsTemplate: React.FC<Props> = ({ receipt }) => {
  const navigation = useNavigation();
  const { images: { components: { backIcon } } } = Assets;

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} hitSlop={8}>
          <SvgView svgFile={backIcon} width={wp(20)} height={hp(20)} />
        </Pressable>
        <TextAtom variant="subtitle" fw="600" style={styles.headerTitle}>
          {receipt.clientName}
        </TextAtom>
      </View>

      <Separator />

      <ScrollView contentContainerStyle={styles.body}>
        {/* Items table */}
        <View style={styles.tableHeader}>
          <TextAtom variant="caption" style={styles.colQty}>Qty</TextAtom>
          <TextAtom variant="caption" style={styles.colName}>Name</TextAtom>
          <TextAtom variant="caption" style={styles.colPrice}>Price</TextAtom>
        </View>

        {receipt.items.map((item, i) => (
          <React.Fragment key={i}>
            <View style={styles.tableRow}>
              <TextAtom variant="subtitle" style={styles.colQty}>{item.qty}</TextAtom>
              <TextAtom variant="subtitle" style={styles.colName}>{item.name}</TextAtom>
              <TextAtom variant="subtitle" style={styles.colPrice}>{item.price}</TextAtom>
            </View>
            <Separator />
          </React.Fragment>
        ))}

        <SpacerAtom height={hp(20)} />

        {/* Summary section */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <TextAtom variant="body">Payment Type</TextAtom>
            <TextAtom variant="subtitle">{receipt.paymentType}</TextAtom>
          </View>

          <SpacerAtom height={hp(12)} />

          <View style={styles.summaryRow}>
            <TextAtom variant="body">Discount</TextAtom>
            <TextAtom variant="subtitle" style={styles.discountText}>
              -{receipt.discount} EGP
            </TextAtom>
          </View>

          <SpacerAtom height={hp(12)} />
          <Separator />
          <SpacerAtom height={hp(12)} />

          <View style={styles.summaryRow}>
            <TextAtom variant="body">Total Amount</TextAtom>
            <TextAtom fw="700" style={styles.totalText}>{receipt.totalAmount} EGP</TextAtom>
          </View>

          <SpacerAtom height={hp(12)} />

          <View style={styles.summaryRow}>
            <TextAtom variant="body">Received</TextAtom>
            <TextAtom variant="subtitle" style={styles.receivedText}>
              {receipt.received} EGP
            </TextAtom>
          </View>

          <SpacerAtom height={hp(12)} />

          <View style={styles.summaryRow}>
            <TextAtom variant="body">Remaining</TextAtom>
            <TextAtom variant="subtitle">{receipt.remaining} EGP</TextAtom>
          </View>

          <SpacerAtom height={hp(12)} />

          <View style={styles.summaryRow}>
            <TextAtom variant="body">Collection Date</TextAtom>
            <TextAtom fw="600" style={styles.dateText}>{receipt.collectionDate}</TextAtom>
          </View>
        </View>

        <SpacerAtom height={hp(40)} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: 'white' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(12),
    paddingHorizontal: wp(16),
    paddingTop: hp(52),
    paddingBottom: hp(14),
    backgroundColor: 'white',
  },
  headerTitle: { fontSize: 16 },
  body: { paddingHorizontal: wp(16) },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#F9FAFB',
    paddingHorizontal: wp(8),
    paddingVertical: hp(10),
    marginTop: hp(16),
  },
  tableRow: {
    flexDirection: 'row',
    paddingHorizontal: wp(8),
    paddingVertical: hp(14),
  },
  colQty: { width: wp(40) },
  colName: { flex: 1 },
  colPrice: { width: wp(80), textAlign: 'right' },
  summaryCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: sp(12),
    padding: sp(16),
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  discountText: { color: '#F04438' },
  totalText: { fontSize: 14, color: '#111827' },
  receivedText: { color: '#12B76A' },
  dateText: { color: '#111827', fontSize: 14 },
});

export default ReceiptDetailsTemplate;
