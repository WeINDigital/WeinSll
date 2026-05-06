import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextAtom } from '../Text/Text';

type Props = {
  label: string;
  value: string;
  valueColor?: string;
};

const LabelValueRow: React.FC<Props> = ({
  label,
  value,
  valueColor = '#101828',
}) => {
  return (
    <View style={styles.row}>
      <TextAtom style={styles.label}>{label}</TextAtom>
      <TextAtom style={[styles.value, { color: valueColor }]}>
        {value}
      </TextAtom>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  label: {
    color: '#667085',
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LabelValueRow;
