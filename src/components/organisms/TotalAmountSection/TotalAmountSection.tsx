import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { TextAtom } from '@src/components/atoms/Text/Text';
import { hp, sp, wp } from '@src/utils/dimensions';
import { InputWithIcon } from '@src/components/molecules/InputWithIcon/InputWithIcon';
import { Assets } from '@src/assets';
import DatePickerField from '@src/components/molecules/DatePickerField/DatePickerField';

interface Props {
  paymentType?: string;
  totalAmount?: string | number;
  setTotalAmount?: (v: string) => void;
  receivedAmount?: string | number;
  setReceivedAmount?: (v: string) => void;
  collectionDate?: Date | string;
  setCollectionDate?: (v: any) => void;
}

const TotalAmountSection: React.FC<Props> = ({
  paymentType,
  totalAmount,
  setTotalAmount,
  receivedAmount,
  setReceivedAmount,
  collectionDate,
  setCollectionDate,
}) => {
  const remaining = Number(totalAmount || 0) - Number(receivedAmount || 0);
  const {
    images:{
      components:{
        creditCardGray
      }
    }
  } = Assets

  return (
    <View style={{ marginTop: hp(16) }}>
        {paymentType !== 'credit' && (
      <InputWithIcon
        label="Total Amount"
        placeholder="Total Amount"
        value={totalAmount}
        onChangeText={setTotalAmount}
      />
        )}

      {paymentType === 'credit' && (
        <>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <InputWithIcon
              label="Total Amount"
              placeholder="Total Amount"
              value={totalAmount}
              onChangeText={setTotalAmount}
              icon={creditCardGray}
              width={wp(164)}
            />
            <InputWithIcon
              label="Received Amount"
              placeholder="Received Amount"
              value={receivedAmount}
              onChangeText={setReceivedAmount}
              keyboardType="numeric"
              icon={creditCardGray}
              width={wp(164)}
            />
          </View>

          <View style={styles.remaining}>
            <TextAtom>The remaining amount: {remaining} EGP</TextAtom>
          </View>

          <DatePickerField
            label="Collection Date"
            value={collectionDate}
            onChange={(d) => setCollectionDate?.(d as any)}
          />

        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: sp(8),
    padding: wp(14),
    marginBottom: hp(16),
  },
  remaining: {
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: sp(8),
    padding: wp(14),
    marginBottom: hp(16),
    marginTop: hp(16),
  },
});

export default TotalAmountSection;
