import React from 'react';
import { View, StyleSheet } from 'react-native';
import { InputAtom } from '../../atoms/Input/Input';

interface Props {
  value: string;
  length?: number;
  onChange: (code: string) => void;
}

export const OTPInput: React.FC<Props> = ({
  value,
  length = 4,
  onChange,
}) => {
  return (
    <View style={styles.container}>
      {Array.from({ length }).map((_, i) => (
        <InputAtom
          key={i}
          value={value[i] || ''}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(text) => {
            const code =
              value.substring(0, i) +
              text +
              value.substring(i + 1);
            onChange(code);
          }}
          containerStyle={styles.box}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
  },
  box: {
    width: 56,
    justifyContent: 'center',
  },
});
