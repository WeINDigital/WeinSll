import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import { TextAtom } from '@src/components/atoms/Text/Text';
import RowView from '@src/components/atoms/RowView/RowView';
import Separator from '@src/components/atoms/Separator';
import SvgView from '@src/components/atoms/SvgView/SvgView';
import { SpacerAtom } from '@src/components/atoms/Spacer/Spacer';
import { Assets } from '@src/assets';
import { hp, wp } from '@src/utils/dimensions';
import { CardAtom } from '@src/components/atoms';

export type VisitItem = {
  id: string;
  clientName: string;
  location: string;
  date: string;
  reasons: string;
  outcome: string;
  visitDate: string;
};

interface Props {
  item: VisitItem;
  onPress: (item: VisitItem) => void;
}

const VisitCard: React.FC<Props> = ({ item, onPress }) => {
  const { images: { components: { calendar, clintImage } } } = Assets;

  return (
    <CardAtom onPress={() => onPress(item)} style={styles.card}>
      {/* <SpacerAtom height={hp(14)} /> */}
      <RowView>
        <View style={styles.clientRow}>
          <Image source={clintImage} style={styles.avatar} />
          <View style={styles.nameBlock}>
            <TextAtom variant="subtitle" fw="600">{item.clientName}</TextAtom>
            <TextAtom variant="caption" style={styles.location}>{item.location}</TextAtom>
          </View>
        </View>
      </RowView>
      <Separator mt={hp(16)} mb={hp(16)} />

      {/* <SpacerAtom height={hp(8)} /> */}
      <View style={styles.dateRow}>
        <SvgView svgFile={calendar} width={wp(16)} height={hp(16)} />
        <TextAtom variant="caption" style={styles.dateText}>{item.date}</TextAtom>
      </View>
    </CardAtom>
  );
};

const styles = StyleSheet.create({
  card: { marginBottom: hp(16),  },
  clientRow: { flexDirection: 'row', alignItems: 'center', gap: wp(10) },
  avatar: { width: wp(40), height: wp(40), borderRadius: wp(20) },
  nameBlock: { gap: hp(2) },
  location: { color: '#667085' },
  dateRow: { flexDirection: 'row', alignItems: 'center', gap: wp(6) },
  dateText: { color: '#667085' },
});

export default VisitCard;
