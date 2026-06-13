import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@src/components/atoms/Button/Button';
import { OTPInput } from '@src/components/molecules/OTPInput/OTPInput';
import { SpacerAtom } from '@src/components/atoms';
import { hp } from '@src/utils/dimensions';

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

    <SpacerAtom height={hp(16)}/>
      <Button
        title="Resend Code"
        variant='ghost'
        onPress={onResend}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },

  spacerLg: {
    height: 32,
  },
});
