import {StyleSheet, Pressable } from 'react-native'
import React, { ReactNode } from 'react'
import { hp, sp, wp } from '../../../utils/dimensions'

const CameraAtom = ({children,onPress}:{ children: ReactNode,onPress:()=>void }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
     {children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        width:wp(343),
        height:hp(104),
        borderWidth:1,
        borderColor:"#E4E7EC",
        borderRadius:sp(8),
        alignItems:"center",
        justifyContent:"space-evenly"
        
    }
})

export default CameraAtom