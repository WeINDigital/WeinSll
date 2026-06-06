import { View, StyleSheet } from 'react-native'
import React from 'react'
import CameraAtom from '@src/components/atoms/CameraAtom/CameraAtom'
import SvgView from '@src/components/atoms/SvgView/SvgView'
import { Assets } from '@src/assets'
import { hp, wp } from '@src/utils/dimensions'
import { TextAtom } from '@src/components/atoms/Text/Text'

export interface CameraProp  {
onPress:()=>void
}

const CameraSection:React.FC<CameraProp> = ({onPress}) => {
    const {
        images:{
            components:{featuredIcon}
        }
    } = Assets
  return (
    <CameraAtom onPress={onPress}>
        <SvgView svgFile={featuredIcon} width={wp(40)} height={hp(40)}/>
        <View style ={styles.textContainer}>
            <TextAtom variant='subtitle' fw='500' style={{color:"#6941C6"}}>Tap to add </TextAtom>
            <TextAtom variant='subtitle' fw='500'>or click on the icon to scan</TextAtom>
        </View>
    </CameraAtom>
  )
}

const styles = StyleSheet.create({
    textContainer:{
        flexDirection:"row",
        alignItems:"center"
    }
})

export default CameraSection