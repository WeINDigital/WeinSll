import React from 'react';
import {
  Text,
  Pressable,
  ActivityIndicator,
  View,
} from 'react-native';
import { ButtonProps } from './button.types';
import { styles, colors } from './button.styles';

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  disabled,
  loading,
  icon,
}) => {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && !isDisabled && { opacity: 0.8 },
        isDisabled && styles.disabled,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {icon && <View style={{ marginRight: 8 }}>{icon}</View>}
          {title && (
            <Text
              style={
                variant === 'primary'
                  ? styles.textPrimary
                  : styles.textSecondary
              }
            >
              {title}
            </Text>
          )}
        </View>
      )}
    </Pressable>
  );
};
