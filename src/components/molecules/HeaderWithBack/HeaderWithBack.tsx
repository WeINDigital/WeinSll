import React, { use } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { TextAtom } from '../../atoms/Text/Text';
import { fs, hp, sp, wp } from '../../../utils/dimensions';
import SvgView from '../../atoms/SvgView/SvgView';
import { Assets } from '../../../assets';
import { useNavigation } from '@react-navigation/native';


interface Props {
  title: string | undefined;
  onBack?: () => void;
}

export const HeaderWithBack: React.FC<Props> = ({
  title,
  onBack,
}) => {
    const {
      images: {
        components: { backIcon },
      },
    } = Assets;
  const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
      <Pressable onPress={onBack ? onBack : ()=> navigation.goBack()} >
        <SvgView svgFile={backIcon} width={wp(20)} height={hp(20)} />
      </Pressable>

      <TextAtom variant="body" style={styles.title}>
        {title}
      </TextAtom>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: sp(16),
    paddingTop: sp(48),
    gap: sp(12),
  },
  title: {
    fontSize: fs(18),
    fontWeight: '600',
  },
});
