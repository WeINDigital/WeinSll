import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { InputAtom } from '../../atoms/Input/Input';
import { TextAtom } from '../../atoms/Text/Text';
import { SpacerAtom } from '../../atoms/Spacer/Spacer';
import SvgView from '../../atoms/SvgView/SvgView';
import { Assets } from '../../../assets';
import { hp, wp } from '../../../utils/dimensions';


interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

export const PasswordInput: React.FC<Props> = ({
  value,
  onChangeText,
}) => {
  const [secure, setSecure] = useState(true);

  const {
    images: {
      components: {lock,eye},
    },
  } = Assets;


  return (
    <View>
       <TextAtom variant='subtitle' fw="500">Password</TextAtom>
           <SpacerAtom width={"100%"} height={hp(6)}/>
 <InputAtom
      value={value}
      onChangeText={onChangeText}
      placeholder="Password"
      secureTextEntry={secure}
      leftIcon={<SvgView svgFile={lock} width={wp(20)} height={hp(20)} />}
      rightIcon={
        <Pressable onPress={() => setSecure(!secure)}>
          {<SvgView svgFile={eye} width={wp(20)} height={hp(20)} />}
        </Pressable>
      }
    />
    </View>
   
  );
};
