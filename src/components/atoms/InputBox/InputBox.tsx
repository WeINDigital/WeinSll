import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextAtom } from '../Text/Text';

interface InputBoxProps {
  value?: string;
}

const InputBox: React.FC<InputBoxProps> = ({ value }) => {
  return (
    <View style={styles.container}>
      <TextAtom>{value}</TextAtom>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 10,
    padding: 14,
  },
});

export default InputBox;
