import React from 'react';
import {Pressable, StyleSheet, View } from 'react-native';
import { hp, sp, wp } from '../../../utils/dimensions';
import { ButtonSheetProps } from './ButtonSheet.type';
import SvgView from '../SvgView/SvgView';
import { Assets } from '../../../assets';
import { TextAtom } from '../Text/Text';



const ButtonSheet:React.FC<ButtonSheetProps> = ({label,onPress,isOpen = false,}) => {
  const {
    images:{
      components:{dropDown}
    }
  } = Assets
  return (
   <Pressable style={styles.container} onPress={onPress}>
    <TextAtom > {label} </TextAtom>
    <View style={{
          transform: [{ rotate: isOpen ? '180deg' : '0deg' }],
        }}>

    <SvgView svgFile={dropDown} width={wp(20)} height={hp(20)}/>
    </View>
   </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    width:wp(343),
    height:hp(44),
    borderWidth:1,
    borderColor:"#D0D5DD",
    borderRadius:sp(8),
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:wp(14),
  }
})

export default ButtonSheet