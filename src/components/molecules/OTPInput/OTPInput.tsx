import React, { useRef } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { InputAtom } from '@src/components/atoms/Input/Input';
import { TextAtom } from '@src/components/atoms/Text/Text';
import { hp, wp } from '@src/utils/dimensions';
import { SpacerAtom } from '@src/components/atoms/Spacer/Spacer';

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
    const inputsRef = useRef<Array<TextInput | null>>([]);

    const handleChange = (text: string, index: number) => {
    const newCode =
      value.substring(0, index) +
      text +
      value.substring(index + 1);

    onChange(newCode);
    if (text && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
     if (!text && index > 0) {
    inputsRef.current[index - 1]?.focus();
  }
  };

  return (
    <View style={{alignSelf:"center"}} >
    <TextAtom variant="subtitle" fw="600">Enter OTP Code</TextAtom>
    <SpacerAtom height={hp(6)}/>
    <View style={styles.container}>
      {Array.from({ length }).map((_, i) => (
        <TextInput
          key={i}
          ref={(ref: TextInput | null) => { inputsRef.current[i] = ref }}
          placeholder="0"
          value={value[i] || ''}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={text => handleChange(text, i)}
          style={[styles.input, styles.box] as any}
        />
      ))}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    alignItems:"center",
  },
  box: {
    width: wp(64),
    height:hp(64),
    textAlign: 'center',
    justifyContent: 'center',
  },
  input:{
    textAlign: 'center',
    fontSize: 24,
  }
});
