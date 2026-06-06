import React from 'react';
import { ScrollView, View } from 'react-native';
import ClientSection from '@src/components/organisms/ClientSection/ClientSection';
import { hp, wp } from '@src/utils/dimensions';
import PaymentTypeSection from '@src/components/organisms/PaymentTypeSection/PaymentTypeSection';
import DiscountAmountSection from '@src/components/organisms/DiscountAmount/DiscountAmount';
import { SelectableItem } from '@src/components/organisms/MultiSelectItemSheet/MultiSelectItemSheet';

const CLIENT_DATA = [
  { id: '1', name: 'Client One' },
  { id: '2', name: 'Client Two' },
  { id: '3', name: 'Client Three' },
];

interface Props {
  paymentType?: string;
  onChangePayment?: (v: any) => void;
  onClientChange?: (clientId: string) => void;
  availableItems?: SelectableItem[];
  selectedItems?: SelectableItem[];
  setSelectedItems?: (items: SelectableItem[]) => void;
  totalAmount?: string | number;
  setTotalAmount?: (v: any) => void;
  receivedAmount?: string | number;
  reason?: string;
  setReason?: (v: any) => void;
  otherReason?: string;
  setOtherReason?: (v: any) => void;
}

const CreateDiscountTemplate: React.FC<Props> = ({
  paymentType,
  onChangePayment,
  onClientChange,
  availableItems,
  selectedItems,
  setSelectedItems,
  totalAmount,
  setTotalAmount,
  receivedAmount,
  reason,
  setReason,
  otherReason,
  setOtherReason,
}) => {
  return (
    <ScrollView>
      <ClientSection data={CLIENT_DATA} onSelect={onClientChange} />

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
          availableItems={availableItems}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          otherReason={otherReason}
          setOtherReason={setOtherReason}
        />
      </View>
    </ScrollView>
  );
};

export default CreateDiscountTemplate;
