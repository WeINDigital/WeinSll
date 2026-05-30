import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextAtom } from '../../components/atoms/Text/Text';
import { AuthTemplate } from '../../components/templates/AuthTemplate/AuthTemplate';
import { hp, wp } from '../../utils/dimensions';
import { RouteProp, useRoute } from '@react-navigation/native';

type Params = {
  discount: any;
};

const StatusBadge = ({ status }: { status?: string }) => {
  const bg = status === 'Approved' ? '#ECFDF3' : status === 'Rejected' ? '#FFF1F0' : '#FFF7ED';
  const color = status === 'Approved' ? '#16A34A' : status === 'Rejected' ? '#DC2626' : '#D97706';
  return (
    <View style={[styles.badge, { backgroundColor: bg }]}> 
      <TextAtom style={{ color }}>{status}</TextAtom>
    </View>
  );
};

const DiscountDetails = () => {
  const route = useRoute<RouteProp<Record<string, Params>, string>>();
  const discount = route?.params?.discount;

  return (
    <AuthTemplate top title="Discount Details">
      <ScrollView contentContainerStyle={{ padding: wp(16) }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TextAtom variant="title">Discount Details</TextAtom>
          <StatusBadge status={discount?.status} />
        </View>

        <View style={{ marginTop: hp(16) }}>
          <TextAtom variant="caption">Client</TextAtom>
          <TextAtom style={{ color: '#6B21A8' }}>{discount?.clientId ?? '—'}</TextAtom>

          <TextAtom variant="caption" style={{ marginTop: hp(12) }}>Type</TextAtom>
          <TextAtom>{discount?.paymentType ?? '—'}</TextAtom>

          {discount?.items && discount.items.length > 0 && (
            <View style={{ marginTop: hp(12) }}>
              <TextAtom variant="caption">Items</TextAtom>
              {discount.items.map((it: any, i: number) => (
                <View key={it.id ?? i} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: hp(8) }}>
                  <TextAtom>{it.name}</TextAtom>
                  <TextAtom>{it.price}</TextAtom>
                  <TextAtom>{it.discount ?? ''}</TextAtom>
                </View>
              ))}
            </View>
          )}

          <TextAtom variant="caption" style={{ marginTop: hp(12) }}>Discount Amount</TextAtom>
          <TextAtom>{discount?.totalAmount ?? '—'} EGP</TextAtom>

          <TextAtom variant="caption" style={{ marginTop: hp(12) }}>Reasons</TextAtom>
          <TextAtom>{discount?.reason ?? '—'}</TextAtom>
        </View>
      </ScrollView>
    </AuthTemplate>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: wp(12),
    paddingVertical: hp(6),
    borderRadius: 20,
  },
});

export default DiscountDetails;
