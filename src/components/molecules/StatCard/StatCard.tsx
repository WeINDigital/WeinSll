import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { CardAtom } from '@src/components/atoms/Card/Card';
import { TextAtom } from '@src/components/atoms/Text/Text';
import { hp, sp, wp } from '@src/utils/dimensions';
import { SvgView } from '@src/components/atoms/SvgView/SvgView';
import { Assets } from '@src/assets';

interface Props {
  title: string;
  value: string;
  percent?: string;
  onViewReport?: () => void;
}

export const StatCard: React.FC<Props> = ({ title, value, percent, onViewReport }) => {
  const {
    images: {
      components: { homeChart, arrowup },
    },
  } = Assets;
  return (
    <CardAtom>
      <TextAtom variant="caption">{title}</TextAtom>
      <View style={styles.card}>
        <View>
          <TextAtom variant="title" fw="700">
            {value}
          </TextAtom>

          <View style={styles.row}>
            <View style={styles.percentRow}>
              <SvgView svgFile={arrowup} width={wp(16)} height={hp(16)} />

              <TextAtom style={styles.percent}>{percent}</TextAtom>
            </View>
            <TextAtom variant="caption">vs last month</TextAtom>
          </View>
        </View>
        <SvgView svgFile={homeChart} width={wp(96)} height={hp(48)} />
      </View>
      {onViewReport && (
        <Pressable onPress={onViewReport} style={styles.viewReport}>
          <TextAtom style={styles.viewReportText}>View Report</TextAtom>
        </Pressable>
      )}
    </CardAtom>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: sp(20),
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sp(6),
    marginTop: sp(6),
  },
  percentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  percent: {
    color: 'rgba(2, 122, 72, 1)',
    fontWeight: '600',
  },

  viewReport: {
    alignSelf: 'flex-end',
    marginTop: sp(8),
  },
  viewReportText: {
    color: '#7F56D9',
    fontWeight: '600',
  },
});
