import React from 'react';
import { View, Image, Pressable, Linking, StyleSheet } from 'react-native';
import { CardAtom } from '@src/components/atoms/Card/Card';
import { TextAtom } from '@src/components/atoms/Text/Text';
import RowView from '@src/components/atoms/RowView/RowView';
import Separator from '@src/components/atoms/Separator';
import SvgView from '@src/components/atoms/SvgView/SvgView';
import { SpacerAtom } from '@src/components/atoms/Spacer/Spacer';
import { Assets } from '@src/assets';
import { hp, wp } from '@src/utils/dimensions';

export type CollectionItem = {
  id: string;
  clientName: string;
  location: string;
  phone: string;
  date: string;
};

interface Props {
  item: CollectionItem;
  onNewDate: (id: string) => void;
}

const CollectionCard: React.FC<Props> = ({ item, onNewDate }) => {
  const {
    images: { components: { clintImage, calendar, phoneColor } },
  } = Assets;

  return (
    <CardAtom style={styles.card}>
      <RowView>
        <View style={styles.clientRow}>
          <Image source={clintImage} style={styles.avatar} />
          <View style={styles.nameBlock}>
            <TextAtom variant="subtitle" fw="600">{item.clientName}</TextAtom>
            <TextAtom variant="caption">{item.location}</TextAtom>
          </View>
        </View>
        <Pressable onPress={() => Linking.openURL(`tel:${item.phone}`)} hitSlop={8}>
          <SvgView svgFile={phoneColor} width={wp(22)} height={hp(22)} />
        </Pressable>
      </RowView>

      <SpacerAtom height={hp(10)} />
      <Separator />
      <SpacerAtom height={hp(10)} />

      <RowView>
        <View style={styles.dateRow}>
          <SvgView svgFile={calendar} width={wp(14)} height={hp(14)} />
          <TextAtom variant="caption" style={styles.dateText}>{item.date}</TextAtom>
        </View>
        <Pressable onPress={() => onNewDate(item.id)} hitSlop={8}>
          <TextAtom style={styles.newDateBtn}>New Date</TextAtom>
        </Pressable>
      </RowView>
    </CardAtom>
  );
};

const styles = StyleSheet.create({
  card: { marginBottom: hp(12) },
  clientRow: { flexDirection: 'row', alignItems: 'center', gap: wp(10) },
  avatar: { width: wp(40), height: wp(40), borderRadius: wp(20) },
  nameBlock: { gap: hp(2) },
  dateRow: { flexDirection: 'row', alignItems: 'center', gap: wp(6) },
  dateText: { marginLeft: wp(2) },
  newDateBtn: { color: '#7F56D9' },
});

export default CollectionCard;
