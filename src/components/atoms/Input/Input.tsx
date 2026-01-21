import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { fs, hp, sp } from '../../../utils/dimensions';

interface Props {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerStyle?: ViewStyle;
  InputStyle?: TextStyle;
}

export const InputAtom: React.FC<Props> = ({
  leftIcon,
  rightIcon,
  containerStyle,
  InputStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {leftIcon}
      <TextInput
        style={[styles.input, InputStyle]}
        placeholderTextColor="#9CA3AF"
        {...props}
      />
      {rightIcon}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(48),
    borderWidth: sp(1),
    borderColor: '#E5E7EB',
    borderRadius: sp(12),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: sp(12),
    gap: sp(8),
  },
  input: {
    flex: 1,
    fontSize: fs(16),
    color: '#111827',
  },
});
