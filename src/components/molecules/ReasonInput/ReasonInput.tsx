import React from 'react';
import { View } from 'react-native';
import { TextAtom } from '../../atoms/Text/Text';
import { InputAtom } from '../../atoms/Input/Input';
import { SpacerAtom } from '../../atoms/Spacer/Spacer';
import { hp } from '../../../utils/dimensions';

interface Props {
  value?: string;
  onChangeText?: (text: string) => void;
  label?: string;
  title?: string;
}

const ReasonInput: React.FC<Props> = ({
  value,
  onChangeText,
  label,
    title
}) => {
  return (
    <View style={{ marginTop: hp(16), height: hp(154) }}>
      <TextAtom variant="subtitle" fw="500">
        { title ?? 'Reason'}
      </TextAtom>

      <SpacerAtom height={hp(6)} />

      <InputAtom
        value={value}
        onChangeText={onChangeText}
        placeholder={label}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
        containerStyle={{ height: hp(128) }}
        InputStyle={{
          minHeight: hp(128),
        }}
      />
    </View>
  );
};

export default ReasonInput;