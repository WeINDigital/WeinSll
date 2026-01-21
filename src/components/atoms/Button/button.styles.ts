import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#6C5CE7',
  secondary: '#ECE9FF',
  danger: '#E74C3C',
  white: '#FFFFFF',
  gray: '#B2BEC3',
};

export const styles = StyleSheet.create({
  base: {
    height: 44,
    paddingHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  primary: {
    backgroundColor: colors.primary,
  },

  secondary: {
    backgroundColor: colors.secondary,
  },

  outline: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: 'transparent',
  },

  ghost: {
    backgroundColor: 'transparent',
  },

  disabled: {
    opacity: 0.5,
  },

  textPrimary: {
    color: colors.white,
    fontWeight: '600',
  },

  textSecondary: {
    color: colors.primary,
    fontWeight: '600',
  },
});
