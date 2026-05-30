import { View } from 'react-native'
import React from 'react'
import SelectClientSheet from '../SelectClientSheet/SelectClientSheet'
import { wp } from '../../../utils/dimensions';

const ClientSection = ({data, title}) => {
        const [client, setClient] = React.useState('');
    
  return (
    <View style={{flex:1,paddingHorizontal: title ? 0 :  wp(16)}}>
      <SelectClientSheet Text={ title ??'Client'} value={client} onSelect={(value) => {
          setClient(value);
        }} DATA={data} />
    </View>
  )
}

export default ClientSection;