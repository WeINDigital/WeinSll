import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CardAtom } from '../../atoms/Card/Card';
import { TextAtom } from '../../atoms/Text/Text';
import { hp, sp, wp } from '../../../utils/dimensions';
import { SvgView } from '../../atoms/SvgView/SvgView';
import { Assets } from '../../../assets';

interface Props {
  title: string;
  value: string;
  percent?: string;
}

export const StatCard: React.FC<Props> = ({ title, value, percent }) => {
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

  chart: {
    height: sp(40),
    width: wp(30),
    backgroundColor: '#E6F9EF',
    borderRadius: sp(10),
    alignSelf: 'flex-end',
    marginTop: sp(10),
  },
});
