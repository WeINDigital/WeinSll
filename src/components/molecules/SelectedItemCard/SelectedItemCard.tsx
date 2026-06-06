import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { TextAtom } from '@src/components/atoms/Text/Text';
import { hp, sp, wp } from '@src/utils/dimensions';

interface Props {
  name: string;
  onRemove: () => void;
}

const SelectedItemCard: React.FC<Props> = ({ name, onRemove }) => (
  <View style={styles.container}>
    <TextAtom variant="subtitle" style={{ flex: 1 }}>{name}</TextAtom>
    <Pressable onPress={onRemove} hitSlop={8}>
      <TextAtom style={styles.x}>✕</TextAtom>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F3FF',
    borderRadius: sp(8),
    paddingHorizontal: wp(12),
    paddingVertical: hp(10),
    marginTop: hp(8),
  },
  x: {
    color: '#7F56D9',
    fontSize: 16,
  },
});

export default SelectedItemCard;
