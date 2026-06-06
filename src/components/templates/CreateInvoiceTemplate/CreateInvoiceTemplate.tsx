import React from 'react';
import { ScrollView, View } from 'react-native';
import ClientSection from '@src/components/organisms/ClientSection/ClientSection';
import { SpacerAtom } from '@src/components/atoms/Spacer/Spacer';
import { hp, wp } from '@src/utils/dimensions';
import ItemsSection from '@src/components/organisms/ItemsSection/ItemsSection';
import PaymentTypeSection from '@src/components/organisms/PaymentTypeSection/PaymentTypeSection';
import TotalAmountSection from '@src/components/organisms/TotalAmountSection/TotalAmountSection';
import DiscountSection from '@src/components/organisms/DiscountSection/DiscountSection';

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

const clientsData = [
  { id: '1', name: 'Client A' },
  { id: '2', name: 'Client B' },
  { id: '3', name: 'Client C' },
];

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
      <ClientSection data={clientsData} />
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
