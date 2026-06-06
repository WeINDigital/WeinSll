import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextAtom } from '@src/components/atoms/Text/Text';

type Props = {
  index: number;
  name: string;
  price: number;
};

const ItemReviewRow: React.FC<Props> = ({
  index,
  name,
  price,
}) => {
  return (
    <View style={styles.row}>
      <TextAtom style={styles.qty}>{index + 1}</TextAtom>
      <TextAtom style={styles.name}>{name}</TextAtom>
      <TextAtom style={styles.price}>
        {price}.000
      </TextAtom>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  qty: {
    width: 40,
  },
  name: {
    flex: 1,
  },
  price: {
    width: 90,
    textAlign: 'right',
  },
});

export default ItemReviewRow;
