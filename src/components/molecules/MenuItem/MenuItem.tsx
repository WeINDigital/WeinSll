import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { TextAtom } from '../../atoms/Text/Text';

interface Props {
  icon: string;
  title: string;
  description?: string;
  onPress?: () => void;
}

export const MenuItem: React.FC<Props> = ({
  icon,
  title,
  description,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.text}>
        <TextAtom>{title}</TextAtom>
        {description && (
          <TextAtom variant="caption">
            {description}
          </TextAtom>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    paddingVertical: 12,
  },
  text: {
    flex: 1,
  },
});
