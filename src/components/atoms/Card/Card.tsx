import React from 'react';
import { View, StyleSheet, ViewProps, Pressable } from 'react-native';
import { sp } from '@src/utils/dimensions';

export const CardAtom: React.FC<ViewProps & { onPress?: () => void }> = ({
  children,
  style,
  onPress,
}) => {
  return (
    <Pressable style={[styles.card, style]} onPress={onPress}>
      {children}
    </Pressable>
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
