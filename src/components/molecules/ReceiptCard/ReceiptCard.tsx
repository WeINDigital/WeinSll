import React from 'react';
import { View, Image, Pressable, StyleSheet } from 'react-native';
import { CardAtom } from '@src/components/atoms/Card/Card';
import { TextAtom } from '@src/components/atoms/Text/Text';
import RowView from '@src/components/atoms/RowView/RowView';
import Separator from '@src/components/atoms/Separator';
import SvgView from '@src/components/atoms/SvgView/SvgView';
import { SpacerAtom } from '@src/components/atoms/Spacer/Spacer';
import { Assets } from '@src/assets';
import { hp, wp } from '@src/utils/dimensions';

export type ReceiptItem = {
  id: string;
  clientName: string;
  paymentType: 'Cash' | 'Credit';
  date: string;
  amount: number;
  collectionDate?: string;
};

interface Props {
  item: ReceiptItem;
  onCollect?: (id: string) => void;
  onPress?: () => void;
}

const ReceiptCard: React.FC<Props> = ({ item, onCollect, onPress }) => {
  const {
    images: { components: { clintImage, calendar } },
  } = Assets;

  return (
    <CardAtom style={styles.card} onPress={onPress} >
      <RowView>
        <View style={styles.clientRow}>
          <Image source={clintImage} style={styles.avatar} />
          <View style={styles.nameBlock}>
            <TextAtom variant="subtitle" fw="600">{item.clientName}</TextAtom>
            <TextAtom variant="caption">{item.paymentType}</TextAtom>
          </View>
        </View>
        <TextAtom style={styles.dots}>⋮</TextAtom>
      </RowView>

      <SpacerAtom height={hp(16)} />

      <RowView>
        <View style={styles.dateRow}>
          <SvgView svgFile={calendar} width={wp(14)} height={hp(14)} />
          <TextAtom variant="caption" style={styles.dateText}>{item.date}</TextAtom>
        </View>
        <TextAtom fw="700" style={styles.amount}>{item.amount} EGP</TextAtom>
      </RowView>
      {/* <SpacerAtom height={hp(10)} /> */}
      {item.collectionDate && (
        <>
      <Separator mt={hp(16)} mb={hp(16)} />

          {/* <SpacerAtom height={hp(10)} /> */}
          <RowView>
            <View style={styles.dateRow}>
              <SvgView svgFile={calendar} width={wp(14)} height={hp(14)} />
              <View style={styles.collectionBlock}>
                <TextAtom variant="caption" style={styles.collectionLabel}>Collection date</TextAtom>
                <TextAtom variant="caption" style={styles.collectionText}>
                  {item.collectionDate}
                </TextAtom>
              </View>
            </View>
            <Pressable onPress={() => onCollect?.(item.id)}>
              <TextAtom style={styles.collectionBtn}>Collection</TextAtom>
            </Pressable>
          </RowView>
        </>
      )}
    </CardAtom>
  );
};

const styles = StyleSheet.create({
  card: { marginBottom: hp(12) },
  clientRow: { flexDirection: 'row', alignItems: 'center', gap: wp(10) },
  avatar: { width: wp(40), height: wp(40), borderRadius: wp(20) },
  nameBlock: { gap: hp(2) },
  dots: { color: '#667085', fontSize: 22 },
  dateRow: { flexDirection: 'row', alignItems: 'center', gap: wp(6) },
  dateText: { marginLeft: wp(2) },
  amount: { color: '#111827' },
  collectionBlock: { marginLeft: wp(4) },
  collectionLabel: { color: '#9CA3AF' },
  collectionBtn: { color: '#7F56D9' },
  collectionText: { color: '#000', fontWeight: '400' },
});

export default ReceiptCard;
