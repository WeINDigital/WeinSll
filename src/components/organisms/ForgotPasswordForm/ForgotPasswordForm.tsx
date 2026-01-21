import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../../atoms/Button/Button';
import { InputWithIcon } from '../../molecules/InputWithIcon/InputWithIcon';


interface Props {
  loading?: boolean;
  onSubmit: (phone: string) => void;
}

export const ForgotPasswordForm: React.FC<Props> = ({
  loading,
  onSubmit,
}) => {
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <InputWithIcon
        icon="phone"
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
      />

      <View style={styles.spacer} />

      <Button
        title="Send Code"
        loading={loading}
        disabled={!phone}
        onPress={() => onSubmit(phone)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  spacer: {
    height: 24,
  },
});
