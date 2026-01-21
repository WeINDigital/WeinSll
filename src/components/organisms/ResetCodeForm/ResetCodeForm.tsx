import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../../atoms/Button/Button';
import { OTPInput } from '../../molecules/OTPInput/OTPInput';

interface Props {
  loading?: boolean;
  onSubmit: (code: string) => void;
  onResend: () => void;
}

export const ResetCodeForm: React.FC<Props> = ({
  loading,
  onSubmit,
  onResend,
}) => {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <OTPInput value={code} onChange={setCode} />

      <View style={styles.spacerLg} />

      <Button
        title="Reset"
        loading={loading}
        disabled={code.length < 4}
        onPress={() => onSubmit(code)}
      />

      <View style={styles.spacer} />

      <Button
        title="Resend Code"
        variant="outline"
        onPress={onResend}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  spacer: {
    height: 16,
  },
  spacerLg: {
    height: 32,
  },
});
