import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { SvgViewProps } from './types';
import { hp, wp } from '../../../utils/dimensions';

export const SvgView: React.FC<SvgViewProps> = ({
  svgFile: SvgComponent,
  width = wp(24),
  height = hp(24),
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
