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

type ClientDiscount = {
  name?: string;
  status?: string;
  discountType?: string;
  discountValue?: string | number;
};

const ClientDiscountCard: React.FC<{ item: ClientDiscount }> = ({ item }) => {
  const {images:{components:{clintImage}}} = Assets
  console.log("item",item);
  
  return (
     <CardAtom>
      <RowView>
        <View style={{flexDirection:'row',alignItems:'center',gap:12}}>
        <Image source={clintImage} style={styles.clientImage} />
        <TextAtom variant='subtitle'>{item.name}</TextAtom>
        </View>
        <StatusBadge status={item.status as any} />
      </RowView>
      <SpacerAtom height={hp(24)} />
      <Separator  />
      <SpacerAtom height={hp(16)} />
      <RowText txt1={item.discountType} txt2={String(item.discountValue ?? '')} />
     </CardAtom>
  )
}

const styles = StyleSheet.create({
  clientImage:{
    width: wp(32),
    height: wp(32),
    borderRadius: wp(16),
  }
})
export default ClientDiscountCard