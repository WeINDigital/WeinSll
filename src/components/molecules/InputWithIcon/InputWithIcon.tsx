import React from 'react';
import { InputAtom } from '../../atoms/Input/Input';
import { View } from 'react-native';
import { TextAtom } from '../../atoms/Text/Text';
import { SpacerAtom } from '../../atoms/Spacer/Spacer';
import Svg from 'react-native-svg';
import SvgView from '../../atoms/SvgView/SvgView';


interface Props {
  icon: any;
  value: string;
  label?:string;
  placeholder?: string;
  onChangeText: (text: string) => void;
}

export const InputWithIcon: React.FC<Props> = ({
  icon,
  label,
  ...props
}) => {
  return (
    <View style={{width:"100%"}}>
      <TextAtom variant='subtitle' fw="500">{label}</TextAtom>
     <SpacerAtom width={"100%"} height={6}/>
      <InputAtom
        {...props}
        leftIcon={<SvgView svgFile={icon} width={20} height={20} />}
      />
    </View>
  );
};
