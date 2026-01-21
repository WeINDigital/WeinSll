import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { InputAtom } from '../../atoms/Input/Input';
import { TextAtom } from '../../atoms/Text/Text';
import { SpacerAtom } from '../../atoms/Spacer/Spacer';


interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

export const PasswordInput: React.FC<Props> = ({
  value,
  onChangeText,
}) => {
  const [secure, setSecure] = useState(true);

  return (
    <View>
       <TextAtom variant='subtitle' fw="500">Password</TextAtom>
           <SpacerAtom width={"100%"} height={6}/>
 <InputAtom
      value={value}
      onChangeText={onChangeText}
      placeholder="Password"
      secureTextEntry={secure}
    //   leftIcon={<IconAtom name="lock" />}
      rightIcon={
        <Pressable onPress={() => setSecure(!secure)}>
          {/* <IconAtom name={secure ? 'eye-off' : 'eye'} /> */}
        </Pressable>
      }
    />
    </View>
   
  );
};
