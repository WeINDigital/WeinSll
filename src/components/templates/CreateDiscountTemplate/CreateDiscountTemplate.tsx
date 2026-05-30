import React from 'react';
import { ScrollView, View } from 'react-native';
import ClientSection from '../../organisms/ClientSection/ClientSection';
import { hp, wp } from '../../../utils/dimensions';
import PaymentTypeSection from '../../organisms/PaymentTypeSection/PaymentTypeSection';
import DiscountAmountSection from '../../organisms/DiscountAmount/DiscountAmount';

interface Props {
  paymentType?: string;
  onChangePayment?: (v: any) => void;
  items?: any[];
  onDelete?: () => void;
  totalAmount?: string | number;
  setTotalAmount?: (v: any) => void;
  receivedAmount?: string | number;
  setReceivedAmount?: (v: any) => void;
  collectionDate?: Date | string;
  setCollectionDate?: (v: any) => void;
  reason?: string;
  setReason?: (v: any) => void;
  setItems?: (items: any[]) => void;
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
  setReason,
}) => {
  return (
    <ScrollView>
      <ClientSection />

      <PaymentTypeSection
        value={paymentType as any}
        onChange={onChangePayment as any}
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
