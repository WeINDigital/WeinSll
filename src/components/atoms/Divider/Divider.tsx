import React from 'react';
import { View, StyleSheet } from 'react-native';
import { hp, sp } from '../../../utils/dimensions';

export const DividerAtom = () => (
  <View style={styles.divider} />
);

const styles = StyleSheet.create({
  divider: {
    height: hp(1),
    backgroundColor: '#E5E7EB',
    marginVertical: hp(12),
  },
});
