import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import {
  CardAtom,
  RowView,
  Separator,
  SpacerAtom,
  SvgView,
  TextAtom,
} from '@src/components/atoms';
import { hp, wp } from '@src/utils/dimensions';
import { Assets } from '@src/assets';

const SalesmenTicketsCard = ({ item }) => {
  const {
    images: {
      components: { mapcolor, calendar, shoppingGray, truck },
    },
  } = Assets;
  return (
    <CardAtom style={styles.card}>
      <TextAtom variant="subtitle" fw="600" style={{ color: 'black' }}>
        I need a discount for this client
      </TextAtom>
      <SpacerAtom height={hp(16)} />
      <RowView>
        <View style={styles.rowView}>
          <Image source={item.clientImage} style={styles.clientImageSty} />
          <TextAtom variant="subtitle" fw="500">
            {item?.clientName}
          </TextAtom>
        </View>

        <View style={styles.rowView}>
          <SvgView svgFile={truck} width={wp(16)} height={hp(16)} />
          <TextAtom variant="subtitle" fw="400">
            {item?.salesman}
          </TextAtom>
        </View>
      </RowView>

      <Separator mt={hp(16)} mb={hp(16)} color={'rgba(228, 231, 236, 1)'} />
      <RowView>
        <View style={styles.rowView}>
          <SvgView svgFile={calendar} width={wp(16)} height={hp(16)} />
          <View>
            <TextAtom variant="subtitle" fw="400">
              Visit date
            </TextAtom>
            <TextAtom variant="subtitle" fw="400" style={{ color: 'black' }}>
              {item?.visitDate}
            </TextAtom>
          </View>
        </View>
        <View style={styles.rowView}>
          <SvgView svgFile={calendar} width={wp(16)} height={hp(16)} />
          <TextAtom fw="400">{item?.date}</TextAtom>
        </View>
      </RowView>
    </CardAtom>
  );
};

const styles = StyleSheet.create({
  card: {
    width: wp(310),
    height: hp(161),
    backgroundColor: 'rgb(242, 241, 241, 0.1)',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(8),
  },
  clientImageSty: {
    width: wp(24),
    height: hp(24),
  },
});
export default SalesmenTicketsCard;
