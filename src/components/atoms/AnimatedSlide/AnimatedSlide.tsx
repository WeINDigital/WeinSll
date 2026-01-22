import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const AnimatedSlide = ({ visible, children }: any) => {
  const translateX = useRef(new Animated.Value(width)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: visible ? 0 : width,
      duration: 260,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return (
    <Animated.View
      style={{
        flex: 1,
        transform: [{ translateX }],
      }}
    >
      {children}
    </Animated.View>
  );
};
