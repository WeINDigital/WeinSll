import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { TextAtom } from '../../atoms/Text/Text';


interface Props {
  title: string | undefined;
  onBack?: () => void;
}

export const HeaderWithBack: React.FC<Props> = ({
  title,
  onBack,
}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBack}>
        {/* <IconAtom name="arrow-left" size={22} /> */}
      </Pressable>

      <TextAtom variant="body" style={styles.title}>
        {title}
      </TextAtom>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
