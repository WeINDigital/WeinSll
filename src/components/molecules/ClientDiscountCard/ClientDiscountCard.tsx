import React from 'react'
import { StyleSheet, View } from 'react-native'
import { CardAtom } from '../../atoms/Card/Card'
import RowView from '../../atoms/RowView/RowView'
import Separator from '../../atoms/Separator'
import { TextAtom } from '../../atoms/Text/Text'
import { Image } from 'react-native'
import { Assets } from '../../../assets'
import { hp, wp } from '../../../utils/dimensions'
import StatusBadge from '../../atoms/StatusBadge/StatusBadge'
import RowText from '../RowText/RowText'
import { SpacerAtom } from '../../atoms/Spacer/Spacer'

const ClientDiscountCard = ({item}: {item: []}) => {
  const {images:{components:{clintImage}}} = Assets
  console.log("item",item);
  
  return (
     <CardAtom>
      <RowView>
        <View style={{flexDirection:'row',alignItems:'center',gap:12}}>
        <Image source={clintImage} style={styles.clientImage} />
        <TextAtom variant='subtitle'>{item.name}</TextAtom>
        </View>
        <StatusBadge status={item.status} />
      </RowView>
      <SpacerAtom height={hp(24)} />
      <Separator  />
      <SpacerAtom height={hp(16)} />
      <RowText txt1={item.discountType} txt2={item.discountValue}/>
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