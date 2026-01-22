import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { sp } from '../../../utils/dimensions';

export const CardAtom: React.FC<ViewProps> = ({
  children,
  style,
}) => {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: sp(16),
    padding: sp(16),
    shadowColor: 'rgba(208, 213, 221, 0.3)',
    shadowOpacity: 0.05,
    shadowRadius: sp(10),
    elevation: 3,
  },
});
