import React from 'react';
import { ScrollView, View } from 'react-native';
import ClientSection from '../../organisms/ClientSection/ClientSection';
import { SpacerAtom } from '../../atoms/Spacer/Spacer';
import { hp, wp } from '../../../utils/dimensions';
import ItemsSection from '../../organisms/ItemsSection/ItemsSection';
import PaymentTypeSection from '../../organisms/PaymentTypeSection/PaymentTypeSection';
import TotalAmountSection from '../../organisms/TotalAmountSection/TotalAmountSection';
import DiscountSection from '../../organisms/DiscountSection/DiscountSection';

interface Props {
  paymentType?: string;
  onChangePayment?: (v: any) => void;
  items?: any[];
  onDelete?: () => void;
  setItems?: React.Dispatch<React.SetStateAction<any[]>>;
  totalAmount?: string | number;
  setTotalAmount?: (v: any) => void;
  receivedAmount?: string | number;
  setReceivedAmount?: (v: any) => void;
  collectionDate?: Date | string;
  setCollectionDate?: (v: any) => void;
}

const CreateInvoiceTemplate: React.FC<Props> = ({
  paymentType,
  onChangePayment,
  items,
  onDelete,
  setItems,
  totalAmount,
  setTotalAmount,
  receivedAmount,
  setReceivedAmount,
  collectionDate,
  setCollectionDate,
}) => {


  return (
    <ScrollView>
      <ClientSection />
      <SpacerAtom height={hp(16)} />
      <ItemsSection items={items} onDelete={onDelete} />
      <SpacerAtom height={hp(16)} />

      <PaymentTypeSection value={paymentType as any} onChange={onChangePayment as any} />
     <DiscountSection/>

<View style={{ paddingHorizontal: wp(16),paddingBottom:hp(160)}}>
  

      <TotalAmountSection
        paymentType={paymentType}
        totalAmount={totalAmount}
        setTotalAmount={setTotalAmount}
        receivedAmount={receivedAmount}
        setReceivedAmount={setReceivedAmount}
        collectionDate={collectionDate}
  setCollectionDate={setCollectionDate}
      />
</View>

      {/* <PaymentTypeSection
        value={paymentType}
        onChange={onChangePayment}
      />
      <DiscountSection />
      <TotalAmountSection /> */}
    </ScrollView>
  );
};

export default CreateInvoiceTemplate;
