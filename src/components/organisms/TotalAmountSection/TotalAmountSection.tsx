import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { TextAtom } from '../../atoms/Text/Text';
import { hp, sp, wp } from '../../../utils/dimensions';
import { InputWithIcon } from '../../molecules/InputWithIcon/InputWithIcon';
import { Assets } from '../../../assets';
import DatePickerField from '../../molecules/DatePickerField/DatePickerField';

const TotalAmountSection = ({
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
  onChange={setCollectionDate}
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
