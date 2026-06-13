import React from 'react'
import { StyleSheet, View } from 'react-native'
import { CardAtom } from '@src/components/atoms/Card/Card'
import RowView from '@src/components/atoms/RowView/RowView'
import Separator from '@src/components/atoms/Separator'
import { TextAtom } from '@src/components/atoms/Text/Text'
import { Image } from 'react-native'
import { Assets } from '@src/assets'
import { hp, wp } from '@src/utils/dimensions'
import StatusBadge from '@src/components/atoms/StatusBadge/StatusBadge'
import RowText from '@src/components/molecules/RowText/RowText'
import { SpacerAtom } from '@src/components/atoms/Spacer/Spacer'
import SvgView from '@src/components/atoms/SvgView/SvgView'

type ClientDiscount = {
  name?: string;
  status?: string;
  discountType?: string;
  discountValue?: string | number;
  clientType?: string;
  date?: string;
  salesman?: string;
  onPress?: () => void;
};

const ClientDiscountCard: React.FC<{ item: ClientDiscount; onPress?: () => void }> = ({ item, onPress }) => {
  const { images: { components: { clintImage, calendar, user } } } = Assets;

  return (
    <CardAtom onPress={onPress}>
      <RowView>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Image source={clintImage} style={styles.clientImage} />
          <View>
            <TextAtom variant="subtitle">{item.name}</TextAtom>
            {item.clientType && (
              <TextAtom variant="caption" style={styles.clientType}>{item.clientType}</TextAtom>
            )}
          </View>
        </View>
        <StatusBadge status={item.status as any} />
      </RowView>

      {(item.date || item.salesman) && (
        <>
          <SpacerAtom height={hp(12)} />
          <RowView>
            {item.date && (
              <View style={styles.metaRow}>
                <SvgView svgFile={calendar} width={wp(14)} height={hp(14)} />
                <TextAtom variant="caption" style={styles.metaText}>{item.date}</TextAtom>
              </View>
            )}
            {item.salesman && (
              <View style={styles.metaRow}>
                <SvgView svgFile={user} width={wp(14)} height={hp(14)} />
                <TextAtom variant="caption" style={styles.metaText}>{item.salesman}</TextAtom>
              </View>
            )}
          </RowView>
        </>
      )}

      <SpacerAtom height={hp(16)} />
      <Separator />
      <SpacerAtom height={hp(16)} />
      <RowText txt1={item.discountType} txt2={String(item.discountValue ?? '')} />
    </CardAtom>
  );
}

const styles = StyleSheet.create({
  clientImage: {
    width: wp(32),
    height: wp(32),
    borderRadius: wp(16),
  },
  clientType: {
    color: '#667085',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(4),
  },
  metaText: {
    color: '#667085',
  },
})
export default ClientDiscountCard