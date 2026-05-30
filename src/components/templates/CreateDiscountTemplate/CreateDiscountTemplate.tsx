import React from 'react';
import { ScrollView, View } from 'react-native';
import ClientSection from '../../organisms/ClientSection/ClientSection';
import { hp, wp } from '../../../utils/dimensions';
import PaymentTypeSection from '../../organisms/PaymentTypeSection/PaymentTypeSection';
import DiscountAmountSection from '../../organisms/DiscountAmount/DiscountAmount';

interface Props {
  paymentType: 'cash' | 'items' | 'other';
  onChangePayment: (v: 'cash' | 'items' | 'other') => void;
  items: [];
  onDelete: () => void;
}

const CreateDiscountTemplate: React.FC<Props> = ({
  paymentType,
  onChangePayment,
  totalAmount,
  setTotalAmount,
  receivedAmount,
  setReceivedAmount,
  collectionDate,
  setCollectionDate,
  reason,
  setReason
}) => {
  return (
    <ScrollView>
      <ClientSection />

      <PaymentTypeSection
        value={paymentType}
        onChange={onChangePayment}
        title="Discount Type"
        other={true}
      />

      <View style={{ paddingHorizontal: wp(16), paddingBottom: hp(160) }}>
        <DiscountAmountSection
          paymentType={paymentType}
          totalAmount={totalAmount}
          setTotalAmount={setTotalAmount}
          receivedAmount={receivedAmount}
          reason={reason}
          setReason={setReason}
        />
      </View>
    </ScrollView>
  );
};

export default CreateDiscountTemplate;
