import React, { use } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { TextAtom } from '@src/components/atoms/Text/Text';
import { fs, hp, sp, wp } from '@src/utils/dimensions';
import SvgView from '@src/components/atoms/SvgView/SvgView';
import { Assets } from '@src/assets';
import { useNavigation } from '@react-navigation/native';
import StatusBadge from '@src/components/atoms/StatusBadge/StatusBadge';


interface Props {
  title: string | undefined;
  onBack?: () => void;
  status?:'approved' | 'rejected' | 'in_progress';
}

export const HeaderWithBack: React.FC<Props> = ({
  title,
  onBack,
  status,
}) => {
    const {
      images: {
        components: { backIcon },
      },
    } = Assets;
  const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
    <View style={styles.subContainer}>
      <Pressable onPress={onBack ? onBack : ()=> navigation.goBack()} >
        <SvgView svgFile={backIcon} width={wp(20)} height={hp(20)} />
      </Pressable>
      <TextAtom variant='title' style={styles.title}>
        {title}
      </TextAtom>
    </View>
    {
      status && (
       <StatusBadge status={status} />
      )
    }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: sp(16),
    paddingTop: sp(48),

  },
    subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sp(12),
  },
  title: {
    fontSize: fs(18),
    fontWeight: '600',
  },
});
