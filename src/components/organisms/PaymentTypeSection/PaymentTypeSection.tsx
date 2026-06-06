import React from 'react';
import { View } from 'react-native';
import RadioItem from '@src/components/atoms/RadioItem/RadioItem';
import { TextAtom } from '@src/components/atoms/Text/Text';
import { hp, wp } from '@src/utils/dimensions';
import { SpacerAtom } from '@src/components/atoms/Spacer/Spacer';

type PaymentValue = 'cash' | 'credit' | 'items' | 'Other' | 'other';

interface Props {
  value?: PaymentValue;
  onChange?: (v: PaymentValue) => void;
  title?: string;
  other?: boolean;
}

const PaymentTypeSection: React.FC<Props> = ({ value, onChange, title, other }) => {
  return (
    <View style={{ marginTop: hp(16),paddingHorizontal: wp(16) }}>
      <TextAtom>{ title ?? `Payment Type`}</TextAtom>
    <SpacerAtom height={hp(6)} />
      <RadioItem
        label="Cash"
        selected={value === 'cash'}
        onPress={() => onChange?.('cash')}
      />

      <RadioItem
        label={other ? 'Items' : 'Credit'}
        selected={value === 'credit' || value === 'items'}
        onPress={() => { other ? onChange?.('items') : onChange?.('credit') }}
      />
{
  other && (
    <RadioItem
      label="Other"
      selected={value === 'Other'}
      onPress={() => onChange?.('Other')}
    />
  )
}
    </View>
  );
};

export default PaymentTypeSection;
