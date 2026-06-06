import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextAtom } from '@src/components/atoms/Text/Text';
import RowView from '@src/components/atoms/RowView/RowView';
import Separator from '@src/components/atoms/Separator';
import SvgView from '@src/components/atoms/SvgView/SvgView';
import { SpacerAtom } from '@src/components/atoms/Spacer/Spacer';
import { Assets } from '@src/assets';
import { hp, wp } from '@src/utils/dimensions';
import { CardAtom } from '@src/components';

export type InventoryEntry = {
  id: string;
  date: string;
  stock: number;
  returned: number;
  sold: number;
};

interface Props {
  item: InventoryEntry;
}

const InventoryCard: React.FC<Props> = ({ item }) => {
  const { images: { components: { calendar } } } = Assets;

  return (
    <CardAtom style={styles.card}>
      <SpacerAtom height={hp(14)} />
      <RowView>
        <View style={styles.col}>
          <SvgView svgFile={calendar} width={wp(16)} height={hp(16)} />
          <TextAtom variant="subtitle" style={styles.dateText}>{item.date}</TextAtom>
        </View>
        <View style={styles.col}>
          <SvgView svgFile={calendar} width={wp(16)} height={hp(16)} />
          <TextAtom variant="subtitle" style={styles.stockText}>{item.stock}</TextAtom>
        </View>
      </RowView>
      <Separator mt={hp(16)} mb={hp(16)} />

      {/* <SpacerAtom height={hp(6)} /> */}
      <RowView>
        <TextAtom variant="caption" style={styles.label}>Return: {item.returned}</TextAtom>
        <TextAtom variant="caption" style={styles.label}>Sold: {item.sold}</TextAtom>
      </RowView>
      <SpacerAtom height={hp(14)} />
    </CardAtom>
  );
};

const styles = StyleSheet.create({
  card: { marginBottom: hp(16) },
  col: { flexDirection: 'row', alignItems: 'center', gap: wp(6) },
  dateText: { color: '#374151' },
  stockText: { color: '#374151' },
  label: { color: '#667085' },
});

export default InventoryCard;
