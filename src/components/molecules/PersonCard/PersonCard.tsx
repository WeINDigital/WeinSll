import React from 'react';
import { View, Image, Pressable, Linking, StyleSheet } from 'react-native';
import { CardAtom } from '@src/components/atoms/Card/Card';
import { TextAtom } from '@src/components/atoms/Text/Text';
import RowView from '@src/components/atoms/RowView/RowView';
import Separator from '@src/components/atoms/Separator';
import SvgView from '@src/components/atoms/SvgView/SvgView';
import { Assets } from '@src/assets';
import { hp, wp } from '@src/utils/dimensions';

export type PersonCardItem = {
  id: string;
  name: string;
  subtitle?: string;
  date?: string;
  phone?: string;
};

interface Props {
  item: PersonCardItem;
  actionLabel?: string;
  onAction?: (id: string) => void;
  onPress?: () => void;
}

const PersonCard: React.FC<Props> = ({ item, actionLabel, onAction, onPress }) => {
  const { images: { components: { calendar, phoneColor, clintImage } } } = Assets;

  return (
    <CardAtom style={styles.card} onPress={onPress}>
      <RowView>
        <View style={styles.clientRow}>
          <Image source={clintImage} style={styles.avatar} />
          <View style={styles.nameBlock}>
            <TextAtom variant="subtitle" fw="600">{item.name}</TextAtom>
            {item.subtitle ? (
              <TextAtom variant="caption" style={styles.subtitle}>{item.subtitle}</TextAtom>
            ) : null}
          </View>
        </View>
        {item.phone ? (
          <Pressable onPress={() => Linking.openURL(`tel:${item.phone}`)} hitSlop={8}>
            <SvgView svgFile={phoneColor} width={wp(22)} height={hp(22)} />
          </Pressable>
        ) : null}
      </RowView>

      {item.date ? (
        <>
          <Separator mt={hp(12)} mb={hp(12)} />
          <RowView>
            <View style={styles.dateRow}>
              <SvgView svgFile={calendar} width={wp(14)} height={hp(14)} />
              <TextAtom variant="caption" style={styles.dateText}>{item.date}</TextAtom>
            </View>
            {actionLabel && onAction ? (
              <Pressable onPress={() => onAction(item.id)} hitSlop={8}>
                <TextAtom style={styles.actionBtn}>{actionLabel}</TextAtom>
              </Pressable>
            ) : null}
          </RowView>
        </>
      ) : null}
    </CardAtom>
  );
};

const styles = StyleSheet.create({
  card: { marginBottom: hp(12) },
  clientRow: { flexDirection: 'row', alignItems: 'center', gap: wp(10) },
  avatar: { width: wp(40), height: wp(40), borderRadius: wp(20) },
  nameBlock: { gap: hp(2) },
  subtitle: { color: '#667085' },
  dateRow: { flexDirection: 'row', alignItems: 'center', gap: wp(6) },
  dateText: { color: '#667085' },
  actionBtn: { color: '#7F56D9' },
});

export default PersonCard;
