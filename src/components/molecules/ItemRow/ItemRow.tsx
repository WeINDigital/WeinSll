import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { TextAtom } from '../../atoms/Text/Text'
import { hp, sp, wp } from '../../../utils/dimensions';
import SvgView from '../../atoms/SvgView/SvgView';
import { Assets } from '../../../assets';

type Props = {
  index: number;
  name: string;
  price: number | string;
  onDelete: () => void;
};

const ItemRow: React.FC<Props> = ({  index,
  name,
  price,
  onDelete,
 }) => {
    const {
        images:{
            components:{remove}
        }
    } = Assets
  return (
    <View style={styles.row}>
      <View style={styles.boxSmall}>
        <TextAtom fw="600">{index + 1}</TextAtom>
      </View>

      <View style={styles.boxName}>
        <TextAtom fw="500">{name}</TextAtom>
      </View>

      <View style={styles.boxPrice}>
        <TextAtom fw="500">{price}</TextAtom>
      </View>

      <Pressable onPress={onDelete} style={styles.delete}>
        <SvgView svgFile={remove} width={wp(36)} height={hp(36)} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
 row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(8),
  },

  boxSmall: {
    width: wp(40),
    height: hp(44),
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: sp(8),
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: wp(8),
  },

  boxName: {
    flex: 1,
    height: hp(44),
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: sp(8),
    justifyContent: 'center',
    paddingHorizontal: wp(12),
    marginRight: wp(8),
  },

  boxPrice: {
    width: wp(96),
    height: hp(44),
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: sp(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(8),
  },

  delete: {
    padding: wp(4),
  },

})

export default ItemRow