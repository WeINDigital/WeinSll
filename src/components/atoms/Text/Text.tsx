import React from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';

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
    fontSize: 36,
    fontWeight: '700',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(52, 64, 84, 1)',
    marginTop: 6,
  },
  body: {
    fontSize: 16,
    color: '#111827',
  },
  link: {
    fontSize: 14,
    color: '#7C5CFC',
    fontWeight: '500',
  },
  caption: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});
