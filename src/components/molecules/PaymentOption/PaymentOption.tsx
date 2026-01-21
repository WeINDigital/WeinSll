import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { RadioAtom } from '../../atoms/Radio/Radio';
import { TextAtom } from '../../atoms/Text/Text';

interface Props {
  label: string;
  selected?: boolean;
  onPress?: () => void;
}

export const PaymentOption: React.FC<Props> = ({
  label,
  selected,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <RadioAtom selected={selected} />
      <TextAtom>{label}</TextAtom>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#E5E7EB',
  },
});

