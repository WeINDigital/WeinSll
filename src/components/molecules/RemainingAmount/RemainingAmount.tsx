import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextAtom } from '../../atoms/Text/Text';

const RemainingAmount = ({ amount }) => {
  return (
    <View style={styles.box}>
      <TextAtom>
        The remaining amount: {amount} EGP
      </TextAtom>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 10,
    padding: 14,
    marginTop: 12,
  },
});

export default RemainingAmount;
