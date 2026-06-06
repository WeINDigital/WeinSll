import React from 'react';
import { View } from 'react-native';
import styles from '@src/components/atoms/SvgView/styles';
import { SvgViewProps } from '@src/components/atoms/SvgView/types';
import { hp, wp } from '@src/utils/dimensions';

export const SvgView: React.FC<SvgViewProps> = ({
  svgFile: SvgComponent,
  width = wp(24),
  height = hp(24),
  ...svgProps
}) => {
  return (
    <View style={[styles.container, { width, height } as any]}> 
      <SvgComponent
        {...svgProps}
        width="100%"
        height="100%"
      />
    </View>
  );
};

export default SvgView;
