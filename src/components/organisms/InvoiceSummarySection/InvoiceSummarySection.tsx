import React from 'react';
import { View } from 'react-native';
import LabelValueRow from '../../atoms/LabelValueRow/LabelValueRow';

interface Props {
  paymentType?: string;
  discount?: string | number;
  total?: string | number;
  received?: string | number;
  remaining?: string | number;
  collectionDate?: string;
}

const InvoiceSummarySection: React.FC<Props> = ({
  paymentType,
  discount,
  total,
  received,
  remaining,
  collectionDate,
}) => {
  return (
    <View>
      <LabelValueRow label="Payment Type" value={paymentType} />

      <LabelValueRow
        label="Discount"
        value={`-${discount} EGP`}
        valueColor="#D92D20"
      />

      <LabelValueRow
        label="Total Amount"
        value={`${total} EGP`}
      />

      <LabelValueRow
        label="Received"
        value={`${received} EGP`}
        valueColor="#12B76A"
      />

      <LabelValueRow
        label="Remaining"
        value={`${remaining} EGP`}
      />

      <LabelValueRow
        label="Collection Date"
        value={collectionDate}
      />
    </View>
  );
};

export default InvoiceSummarySection;
