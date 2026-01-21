import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../../atoms/Button/Button';
import { InputWithIcon } from '../../molecules/InputWithIcon/InputWithIcon';
import { Assets } from '../../../assets';
import { TextAtom } from '../../atoms/Text/Text';

interface Props {
  loading?: boolean;
  onSubmit: (phone: string) => void;
}

export const ForgotPasswordForm: React.FC<Props> = ({ loading, onSubmit }) => {
  const {
    images: {
      components: { phone },
    },
  } = Assets;
const egyptPhoneRegex = /^(010|011|012|015)\d{8}$/;

  const [phoneText, setPhoneText] = useState('');
const [error, setError] = useState('');

  const validatePhone = (value: string) => {
    const regex = egyptPhoneRegex;
    return regex.test(value);
  };

  const handleSubmit = () => {
    if (!validatePhone(phoneText)) {
      setError('Please enter a valid Egyptian phone number.');
      return;
    }

    setError('');
    onSubmit(phoneText);
  };

  return (
    <View style={styles.container}>
      <InputWithIcon
      label='Phone Number'
        icon={phone}
        placeholder="Ex. 01094828532"
        value={phoneText}
         onChangeText={text => {
          setPhoneText(text);
          setError('');
        }}
        keyboardType="phone-pad"
        maxLength={11}
      />
      {error ? <TextAtom variant="error">{error}</TextAtom> : null}
      <View style={styles.spacer} />

      <Button
        title="Send Code"
        loading={loading}
        disabled={phoneText.length < 11}
        onPress={handleSubmit}
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
