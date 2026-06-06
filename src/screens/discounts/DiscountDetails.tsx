import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextAtom } from '../../components/atoms/Text/Text';
import { AuthTemplate } from '../../components/templates/AuthTemplate/AuthTemplate';
import { hp, wp } from '../../utils/dimensions';
import { RouteProp, useRoute } from '@react-navigation/native';
import DiscountDetailsTemplate from '../../components/templates/DiscountDetailsTemplate/DiscountDetailsTemplate';

type Params = {
  discount: any;
};

const DiscountDetails = () => {
  const route = useRoute<RouteProp<Record<string, Params>, string>>();
  const discount = route?.params?.discount;

  return (
    <AuthTemplate top title="Discount Details" status={discount?.status}>
     <DiscountDetailsTemplate discount={discount} />
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
