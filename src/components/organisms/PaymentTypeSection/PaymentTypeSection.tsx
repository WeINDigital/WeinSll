import React from 'react';
import { View } from 'react-native';
import RadioItem from '../../atoms/RadioItem/RadioItem';
import { TextAtom } from '../../atoms/Text/Text';
import { hp, wp } from '../../../utils/dimensions';
import { SpacerAtom } from '../../atoms/Spacer/Spacer';

const PaymentTypeSection = ({ value, onChange }) => {
  return (
    <View style={{ marginTop: hp(16),paddingHorizontal: wp(16) }}>
      <TextAtom>Payment Type</TextAtom>
    <SpacerAtom height={hp(6)} />
      <RadioItem
        label="Cash"
        selected={value === 'cash'}
        onPress={() => onChange('cash')}
      />

      <RadioItem
        label="Credit"
        selected={value === 'credit'}
        onPress={() => onChange('credit')}
      />
    </View>
  );
};

export default PaymentTypeSection;
