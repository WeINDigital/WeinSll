import { View } from 'react-native'
import React from 'react'
import SelectClientSheet from '../SelectClientSheet/SelectClientSheet'
import { wp } from '../../../utils/dimensions';

const ClientSection = () => {
        const [client, setClient] = React.useState('');
    
  return (
    <View style={{flex:1,paddingHorizontal:wp(16)}}>
      <SelectClientSheet Text='Client' value={client} onSelect={(value) => {
          setClient(value);
        }} />
    </View>
  )
}

export default ClientSection;