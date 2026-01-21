import React from 'react';
import { View, StyleSheet } from 'react-native';

export const DividerAtom = () => (
  <View style={styles.divider} />
);

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 12,
  },
});
