import React from 'react';
import { View, StyleSheet } from 'react-native';
import { hp, sp, wp } from '../../../utils/dimensions';
import { InputWithIcon } from '../../molecules/InputWithIcon/InputWithIcon';
import ReasonInput from '../../molecules/ReasonInput/ReasonInput';
import MultiSelectItemSheet, { SelectableItem } from '../MultiSelectItemSheet/MultiSelectItemSheet';
import SelectedItemCard from '../../molecules/SelectedItemCard/SelectedItemCard';

interface Props {
  paymentType?: string;
  totalAmount?: string | number;
  setTotalAmount?: (v: string) => void;
  receivedAmount?: string | number;
  reason?: string;
  setReason?: (v: string) => void;
  availableItems?: SelectableItem[];
  selectedItems?: SelectableItem[];
  setSelectedItems?: (items: SelectableItem[]) => void;
  otherReason?: string;
  setOtherReason?: (v: string) => void;
}

const DiscountAmountSection: React.FC<Props> = ({
  paymentType,
  totalAmount,
  setTotalAmount,
  reason,
  setReason,
  availableItems = [],
  selectedItems = [],
  setSelectedItems,
  otherReason,
  setOtherReason,
}) => {
  const removeItem = (id: string) =>
    setSelectedItems?.(selectedItems.filter(i => i.id !== id));

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
        <View>
          <MultiSelectItemSheet
            data={availableItems}
            selectedItems={selectedItems}
            setSelectedItems={items => setSelectedItems?.(items)}
          />
          {selectedItems.map(item => (
            <SelectedItemCard
              key={item.id}
              name={item.name}
              onRemove={() => removeItem(item.id)}
            />
          ))}
        </View>
      )}

      {paymentType === 'Other' && (
        <ReasonInput
          title="Tell us about the discount"
          label="Enter a reasons..."
          value={otherReason}
          onChangeText={setOtherReason}
        />
      )}

      <ReasonInput label="Enter a reasons..." value={reason} onChangeText={setReason} />
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
});

export default DiscountAmountSection;
