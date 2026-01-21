import React from 'react';
import { View } from 'react-native';

interface Props {
  height?: number;
  width?: number | string;
}

export const SpacerAtom: React.FC<Props> = ({
  height = 0,
  width = 0,
}) => <View style={{ height, width }} />;
