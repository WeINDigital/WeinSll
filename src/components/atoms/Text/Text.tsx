import React from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';
import { fs } from '../../../utils/dimensions';

type Variant = 'title' | 'subtitle' | 'body' | 'link' | 'caption';

interface Props extends TextProps {
  variant?: Variant;
  fw?: '400' | '500' | '600' | '700' | '800' | '900' | 'normal' | 'bold';
}

export const TextAtom: React.FC<Props> = ({
  variant = 'body',
  style,
  children,
  fw,
  ...rest
}) => {
  return (
    <RNText style={[styles[variant],{fontWeight:fw}, style]} {...rest}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: fs(36),
    fontWeight: '700',
    color: '#111827',
  },
  subtitle: {
    fontSize: fs(14),
    color: 'rgba(52, 64, 84, 1)',
    marginTop: 6,
  },
  body: {
    fontSize: fs(16),
    color: '#111827',
  },
  link: {
    fontSize: fs(14),
    color: '#7C5CFC',
    fontWeight: '500',
  },
  caption: {
    fontSize: fs(12),
    color: '#9CA3AF',
  },
});
