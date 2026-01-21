import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { PasswordInput } from '../../molecules/PasswordInput/PasswordInput';
import { Button } from '../../atoms/Button/Button';
import { Assets } from '../../../assets';
import { hp, sp, wp } from '../../../utils/dimensions';
import { SpacerAtom } from '../../atoms/Spacer/Spacer';

interface Props {
  loading?: boolean;
  onSubmit: (password: string) => void;
}

export const NewPasswordForm: React.FC<Props> = ({
  loading,
  onSubmit,
}) => {
  const [password, setPassword] = useState('');

    const {
      images: {
        components: {user},
      },
    } = Assets;
    
  return (
    <View style={styles.container}>
      <PasswordInput
      text='New Password'
        value={password}
        onChangeText={setPassword}
      />
  <SpacerAtom height={hp(32)}/>
      <Button
        title="Change Password"
        loading={loading}
        disabled={!password}
        onPress={() => onSubmit({password })}
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
  },
});
