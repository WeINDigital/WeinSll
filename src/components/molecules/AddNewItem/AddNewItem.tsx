import React from 'react'
import { Pressable } from 'react-native'
import { TextAtom } from '../../atoms/Text/Text'
import { fs, hp } from '../../../utils/dimensions'

const AddNewItem = ({onPress}:{onPress:()=>void}) => {

  return (
    <Pressable onPress={onPress} style={{marginTop:hp(8)}}>
      <TextAtom style={{color:"#6941C6",fontSize:fs(14),fontWeight:"500"}}>+ AddNewItem</TextAtom>
    </Pressable>
  )
}

export default AddNewItem