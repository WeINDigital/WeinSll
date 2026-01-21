import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CardAtom } from '../../atoms/Card/Card';
import { TextAtom } from '../../atoms/Text/Text';


interface Props {
  title: string;
  value: string;
  subtitle?: string;
}

export const StatCard: React.FC<Props> = ({
  title,
  value,
  subtitle,
}) => {
  return (
    <CardAtom>
      <TextAtom variant="caption">{title}</TextAtom>
      <TextAtom variant="title">{value}</TextAtom>
      {subtitle && (
        <TextAtom variant="caption">{subtitle}</TextAtom>
      )}
    </CardAtom>
  );
};
