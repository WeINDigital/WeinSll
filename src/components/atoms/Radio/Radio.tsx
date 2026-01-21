import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { sp, wp } from '../../../utils/dimensions';

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
    width: wp(20),
    height: wp(20),
    borderRadius: sp(10),
    borderWidth: sp(2),
    borderColor: '#7C5CFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    width: wp(10),
    height: wp(10),
    borderRadius: sp(5),
    backgroundColor: '#7C5CFC',
  },
});
