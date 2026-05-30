import React from 'react';
import { View, StyleSheet } from 'react-native';
import { hp, sp, wp } from '../../../utils/dimensions';
import { InputWithIcon } from '../../molecules/InputWithIcon/InputWithIcon';
import { Assets } from '../../../assets';
import ReasonInput from '../../molecules/ReasonInput/ReasonInput';
import ClientSection from '../ClientSection/ClientSection';


 const data = [
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
  { id: '3', name: 'Item 3' },
  { id: '4', name: 'Item 4' },
  { id: '5', name: 'Item 5' },
];
interface Props {
  paymentType?: string;
  totalAmount?: string | number;
  setTotalAmount?: (v: string) => void;
  receivedAmount?: string | number;
  reason?: string;
  setReason?: (v: string) => void;
}

const DiscountAmountSection: React.FC<Props> = ({
  paymentType,
  totalAmount,
  setTotalAmount,
  receivedAmount,
  reason,
  setReason,
}) => {
  const remaining = Number(totalAmount || 0) - Number(receivedAmount || 0);
  const {
    images:{
      components:{
        creditCardGray
      }
    }
  } = Assets
console.log("paymentType",paymentType);

  return (
    <View style={{ marginTop: hp(16) }}>
        {paymentType === 'cash' && (
      <InputWithIcon
        label="Discount Amount"
        placeholder="Ex. 941"
        value={totalAmount}
        onChangeText={setTotalAmount}
      />
        )}
         {paymentType === 'items' && (
            <ClientSection data={data} title="Items"/>
        )}

          {paymentType === 'Other' && (
           <ReasonInput
           title="Tell us about the discount"
  label="Enter a reasons..."
  value={reason}
  onChangeText={setReason}
/>
        )}

      
<ReasonInput
  label="Enter a reasons..."
  value={reason}
  onChangeText={setReason}
/>
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

export default DiscountAmountSection;
