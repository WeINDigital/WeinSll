import { StyleSheet } from 'react-native';
import { fs, hp, sp } from '../../../utils/dimensions';

export const colors = {
  primary: '#6C5CE7',
  secondary: '#ECE9FF',
  danger: '#E74C3C',
  white: '#FFFFFF',
  gray: '#B2BEC3',
};

export const styles = StyleSheet.create({
  base: {
    width: '100%',
    height: hp(48),
    paddingHorizontal: sp(16),
    borderRadius: sp(10),
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
    borderWidth: sp(1),
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
    fontSize: fs(16),
    fontWeight: '600',
  },

  textSecondary: {
    color: colors.primary,
    fontSize: fs(16),
    fontWeight: '600',
  },
});
