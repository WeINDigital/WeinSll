import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { TextAtom } from '../../atoms/Text/Text';

const DiscountSelect = () => {
  return (
    <Pressable style={styles.box}>
      <TextAtom style={{ color: '#667085' }}>
        Select discount
      </TextAtom>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 10,
    padding: 14,
  },
});

export default DiscountSelect;
