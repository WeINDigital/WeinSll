import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { TextAtom } from '@src/components/atoms/Text/Text';

type Props = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

const RadioItem: React.FC<Props> = ({ label, selected, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        selected && styles.selected,
      ]}
    >
      <View style={[styles.circle]} >
        <View style={selected && styles.circleActive} />
      </View>
      <TextAtom style={[styles.label, selected && styles.labelSelected]}>{label}</TextAtom>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#D0D5DD',
    marginBottom: 8,
  },
  selected: {
    borderColor: '#7F56D9',
    backgroundColor: '#F9F5FF',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    marginRight: 12,
    padding:4
  },
  circleActive: {
    borderColor: '#050506',
    backgroundColor: '#7F56D9',
    flex:1,
    borderRadius: 10,
  },
 
  label: {
    fontSize: 16,
  },
  labelSelected: {
    color: '#7F56D9',
  },
});

export default RadioItem;
