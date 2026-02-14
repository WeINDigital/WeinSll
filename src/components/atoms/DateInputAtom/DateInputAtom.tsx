import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { TextAtom } from '../Text/Text';
import { sp, wp } from '../../../utils/dimensions';

type Props = {
  value: Date;
  onPress: () => void;
};

const DateInputAtom: React.FC<Props> = ({
  value,
  onPress,
}) => {
  const safeDate =
    value instanceof Date ? value : new Date();

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <TextAtom>
        {safeDate.toLocaleDateString()}
      </TextAtom>
    </Pressable>
  );
};


const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: sp(8),
    padding: wp(14),
  },
});

export default DateInputAtom;
