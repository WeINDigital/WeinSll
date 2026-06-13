import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { HeaderWithBack } from '@src/components/molecules/HeaderWithBack/HeaderWithBack';
import { SpacerAtom, TextAtom } from '@src/components';
import SvgView from '@src/components/atoms/SvgView/SvgView';
import { Assets } from '@src/assets';
import { hp, sp, wp } from '@src/utils/dimensions';
export type VisitItem = {
  id: string;
  clientName: string;
  location: string;
  date: string;
  reasons: string;
  outcome: string;
  visitDate: string;
  salesman?:string;
  clientImage?:any
};

interface Props {
  visit: VisitItem;
}

const VisitDetailsTemplate: React.FC<Props> = ({ visit }) => {
  const { images: { components: { calendar } } } = Assets;

  return (
    <View style={styles.container}>
      <HeaderWithBack title={visit.clientName} />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <TextAtom variant="caption" style={styles.label}>Reasons</TextAtom>
        <SpacerAtom height={hp(6)} />
        <View style={styles.textBox}>
          <TextAtom variant="body" style={styles.boxText}>{visit.reasons}</TextAtom>
        </View>

        <SpacerAtom height={hp(16)} />

        <TextAtom variant="caption" style={styles.label}>Outcome</TextAtom>
        <SpacerAtom height={hp(6)} />
        <View style={styles.textBox}>
          <TextAtom variant="body" style={styles.boxText}>{visit.outcome}</TextAtom>
        </View>

        <SpacerAtom height={hp(16)} />

        <TextAtom variant="caption" style={styles.label}>Visit Date</TextAtom>
        <SpacerAtom height={hp(6)} />
        <View style={styles.dateBox}>
          <SvgView svgFile={calendar} width={wp(18)} height={hp(18)} />
          <TextAtom variant="body" style={styles.boxText}>{visit.visitDate}</TextAtom>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  scroll: { paddingHorizontal: sp(16), paddingBottom: hp(40) },
  label: { color: '#374151', fontWeight: '500' },
  textBox: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: sp(10),
    padding: sp(14),
    minHeight: hp(120),
  },
  dateBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(8),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: sp(10),
    padding: sp(14),
  },
  boxText: { color: '#374151', lineHeight: hp(22) },
});

export default VisitDetailsTemplate;
