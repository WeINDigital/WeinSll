import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { SvgViewProps } from './types';

export const SvgView: React.FC<SvgViewProps> = ({
  svgFile: SvgComponent,
  width = 24,
  height = 24,
  ...svgProps
}) => {
  return (
    <View style={[styles.container, { width, height }]}>
      <SvgComponent
        {...svgProps}
        width="100%"
        height="100%"
      />
    </View>
  );
};

export default SvgView;
