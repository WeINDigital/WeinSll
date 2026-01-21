import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextAtom } from '../../atoms/Text/Text';

interface Props {
  label: string;
  value: string;
  valueColor?: string;
}

export const SummaryRow: React.FC<Props> = ({
  label,
  value,
  valueColor,
}) => {
  return (
    <View style={styles.row}>
      <TextAtom variant="caption">{label}</TextAtom>
      <TextAtom style={{ color: valueColor }}>
        {value}
      </TextAtom>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
});
