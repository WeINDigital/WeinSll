import { View } from 'react-native'
import React from 'react'
import SelectClientSheet from '@src/components/organisms/SelectClientSheet/SelectClientSheet'
import { wp } from '@src/utils/dimensions';

const DiscountSection = () => {
        const [discount, setDiscount] = React.useState('');
    const DATA = [
        { id: '1', name: 'No Discount' },
        { id: '2', name: '10% Off' },
        { id: '3', name: '20% Off' },
      ];
  return (
    <View style={{flex:1,paddingHorizontal:wp(16)}}>
      <SelectClientSheet Text='Discount' value={discount} onSelect={(value) => {
          setDiscount(value);
        }} DATA={DATA} />
    </View>
  )
}

export default React.memo(DiscountSection);