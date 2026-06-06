import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CameraSection from '@src/components/molecules/CameraSection/CameraSection';
import { SpacerAtom } from '@src/components/atoms/Spacer/Spacer';
import { TextAtom } from '@src/components/atoms/Text/Text';
import { hp, wp } from '@src/utils/dimensions';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '@src/navigation/routes';

export interface prop{
    text?:String
}

const ScanItemsSection:React.FC<prop> = ({text}) => {
    const navigation = useNavigation<any>();
  return (
     <View style={{flex:1,paddingHorizontal:wp(16)}}>
    <View>
     <TextAtom variant='subtitle' fw='500' style={styles.text}>{text}</TextAtom>
     <SpacerAtom height={hp(6)}/>
     <CameraSection  onPress={() => navigation.navigate(Routes.CAMERA_SCREEN)}/>
    </View>
     </View>
  )
}

const styles = StyleSheet.create({
    text:{
        color:"black",
    }
})

export default ScanItemsSection