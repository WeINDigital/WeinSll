import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { hp, sp } from '../../../utils/dimensions';

const BottomContainerAtoms = ({children}: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: hp(138),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: sp(16),
    borderTopLeftRadius: sp(16),
    borderTopRightRadius: sp(16),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 12,
  },
});

export default BottomContainerAtoms;
