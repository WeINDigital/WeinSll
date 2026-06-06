import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextAtom } from '@src/components/atoms/Text/Text';
import { hp, wp } from '@src/utils/dimensions';
import RowText from '@src/components/molecules/RowText/RowText';
import { SpacerAtom } from '@src/components/atoms/Spacer/Spacer';

const DiscountDetailsTemplate = ({ discount }: { discount?: any }) => {
  const paymentType: string = discount?.paymentType ?? '';

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: wp(16), paddingBottom: hp(40) }}>
      <RowText
        txt1="Client"
        txt2={discount?.clientId ?? '—'}
        txt2Style={{ color: '#7F56D9' }}
        totalAmount
      />
    <SpacerAtom height={hp(16)} />
      <RowText txt1="Type" txt2={discount?.paymentType ?? '—'} />
    <SpacerAtom height={hp(16)} />
      {paymentType === 'cash' && (
        <RowText
          txt1="Discount Amount"
          txt2={discount?.totalAmount ? `${discount.totalAmount} EGP` : '—'}
          totalAmount
        />
      )}

      {/* Items: table */}
      {paymentType === 'items' && (
        <View style={{ marginTop: hp(12) }}>
          <TextAtom variant="caption">Items</TextAtom>
          <View style={styles.tableHeader}>
            <TextAtom variant="caption" style={styles.col}>Name</TextAtom>
            <TextAtom variant="caption" style={styles.col}>Price</TextAtom>
            <TextAtom variant="caption" style={[styles.col, styles.colRight]}>Discount</TextAtom>
          </View>
          {(discount?.items ?? []).map((it: any, i: number) => (
            <View key={it.id ?? i} style={styles.tableRow}>
              <TextAtom variant="subtitle" style={styles.col}>{it.name}</TextAtom>
              <TextAtom variant="subtitle" style={styles.col}>{it.price}</TextAtom>
              <TextAtom variant="subtitle" style={[styles.col, styles.colRight]}>{it.Discount ?? it.discount ?? ''}</TextAtom>
            </View>
          ))}
        </View>
      )}

      {/* Other: About the discount */}
      {paymentType === 'Other' && (
        <View style={{ marginTop: hp(16) }}>
          <TextAtom variant="caption">About the discount</TextAtom>
          <TextAtom variant="subtitle" style={{ marginTop: hp(4) }}>{discount?.about ?? discount?.otherReason ?? '—'}</TextAtom>
        </View>
      )}

      {/* Reasons (shown for all types) */}
      <View style={{ marginTop: hp(16) }}>
        <TextAtom variant="caption">Reasons</TextAtom>
        <TextAtom variant="subtitle" style={{ marginTop: hp(6) }}>{discount?.reason ?? '—'}</TextAtom>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#F9FAFB',
    paddingHorizontal: wp(8),
    paddingVertical: hp(8),
    marginTop: hp(8),
  },
  tableRow: {
    flexDirection: 'row',
    paddingHorizontal: wp(8),
    paddingVertical: hp(12),
    borderBottomWidth: 0,
  },
  col: {
    flex: 1,
  },
  colRight: {
    textAlign: 'right',
  },
});

export default DiscountDetailsTemplate;
