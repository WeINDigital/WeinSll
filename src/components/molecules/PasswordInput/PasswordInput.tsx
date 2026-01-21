import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { InputAtom } from '../../atoms/Input/Input';
import { TextAtom } from '../../atoms/Text/Text';
import { SpacerAtom } from '../../atoms/Spacer/Spacer';
import SvgView from '../../atoms/SvgView/SvgView';
import { Assets } from '../../../assets';


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
           <SpacerAtom width={"100%"} height={6}/>
 <InputAtom
      value={value}
      onChangeText={onChangeText}
      placeholder="Password"
      secureTextEntry={secure}
      leftIcon={<SvgView svgFile={lock} width={20} height={20} />}
      rightIcon={
        <Pressable onPress={() => setSecure(!secure)}>
          {<SvgView svgFile={eye} width={20} height={20} />}
        </Pressable>
      }
    />
    </View>
   
  );
};
