import { View, Text } from 'react-native'
import React from 'react'

const RowView = ({children}: {children: React.ReactNode}) => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center"}}>
      {children}
    </View>
  )
}

export default RowView