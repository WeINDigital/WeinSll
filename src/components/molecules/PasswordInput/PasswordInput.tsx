import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { InputAtom } from '@src/components/atoms/Input/Input';
import { TextAtom } from '@src/components/atoms/Text/Text';
import { SpacerAtom } from '@src/components/atoms/Spacer/Spacer';
import SvgView from '@src/components/atoms/SvgView/SvgView';
import { Assets } from '@src/assets';
import { hp, wp } from '@src/utils/dimensions';


interface Props {
  value: string;
  onChangeText: (text: string) => void;
  text?: string;
}

export const PasswordInput: React.FC<Props> = ({
  value,
  onChangeText,
  text
}) => {
  const [secure, setSecure] = useState(true);

  const {
    images: {
      components: {lock,eye},
    },
  } = Assets;


  return (
    <View>
       <TextAtom variant='subtitle' fw="500">{text? text :"Password"}</TextAtom>
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
