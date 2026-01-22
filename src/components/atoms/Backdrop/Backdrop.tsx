import React from 'react';
import { Pressable, View,StyleSheet } from 'react-native';

export const Backdrop = ({ onPress }: any) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.15)',
      }}
    />
  );
};
