import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextAtom } from '../../atoms/Text/Text';
import { InputWithIcon } from '../../molecules/InputWithIcon/InputWithIcon';
import { PasswordInput } from '../../molecules/PasswordInput/PasswordInput';
import { Button } from '../../atoms/Button/Button';
import { Assets } from '../../../assets';
import { hp, sp, wp } from '../../../utils/dimensions';
import { SpacerAtom } from '../../atoms/Spacer/Spacer';

interface Props {
  loading?: boolean;
  onSubmit: (data: { username: string; password: string }) => void;
  onForgotPassword: () => void;
}

export const LoginForm: React.FC<Props> = ({
  loading,
  onSubmit,
  onForgotPassword,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    const {
      images: {
        components: {user},
      },
    } = Assets;
    
  return (
    <View style={styles.container}>
      <TextAtom variant="title">Log In</TextAtom>
      <SpacerAtom height={hp(8)}/>
      <TextAtom variant="body">
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </TextAtom>

      <View style={styles.spacer} />

      <InputWithIcon
      label='User name'
        icon={user}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <View style={styles.spacer} />

      <PasswordInput
        value={password}
        onChangeText={setPassword}
      />

      <TextAtom
        variant="link"
        style={styles.forgot}
        onPress={onForgotPassword}
      >
        Forgot Password?
      </TextAtom>

      <View style={styles.spacerLg} />

      <Button
        title="Log In"
        loading={loading}
        disabled={!username || !password}
        onPress={() => onSubmit({ username, password })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(16),
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'center',
  },
  spacer: {
    height: hp(16),
  },
  spacerLg: {
    height: hp(32),
  },
  forgot: {
    textAlign: 'right',
    marginTop: sp(8),
    alignSelf: 'flex-end',
  },
});
