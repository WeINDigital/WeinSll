import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { CardAtom, RowView, Separator, SvgView, TextAtom } from '@src/components/atoms'
import { hp, wp } from '@src/utils/dimensions'
import { Assets } from '@src/assets'

const SurveyCard = ({item}) => {
    const {images:{
        components:{
            mapcolor,
            calendar,
            shoppingGray
        }
    }} =Assets
  return (
    <CardAtom style ={styles.card}>
       <RowView>
        <TextAtom variant='subtitle' fw='600'>Survey Title</TextAtom>
        <View style = {styles.rowView}>
            <SvgView svgFile={mapcolor} width={wp(16)} height={hp(16)}/>
            <TextAtom variant='subtitle' fw='400' style={{color:'rgba(127, 86, 217, 1)'}}>{item?.location}</TextAtom>
        </View>
       </RowView>
       <Separator mt={hp(16)} mb={hp(16)} color={'rgba(228, 231, 236, 1)'}/>
        <RowView>
        <View style = {styles.rowView}>
            <SvgView svgFile={calendar} width={wp(16)} height={hp(16)}/>
            <TextAtom variant='subtitle' fw='400' >{item?.date}</TextAtom>
        </View>
        <View style = {styles.rowView}>
            <SvgView svgFile={shoppingGray} width={wp(16)} height={hp(16)}/>
            <TextAtom fw='400'>40</TextAtom>
        </View>
       </RowView>
    </CardAtom>
  )
}

const styles = StyleSheet.create({
    card:{
        width:wp(310),
        height:hp(105),
        backgroundColor:'rgb(242, 241, 241, 0.1)'
    },
    rowView:{
        flexDirection:"row",
        alignItems:"center",
        gap:wp(8)
    }
})
export default SurveyCard