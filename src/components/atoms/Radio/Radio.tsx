import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';

interface Props {
  selected?: boolean;
  onPress?: () => void;
}

export const RadioAtom: React.FC<Props> = ({
  selected,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.outer}>
      {selected && <View style={styles.inner} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  outer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#7C5CFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#7C5CFC',
  },
});
