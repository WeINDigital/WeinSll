import React from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonSheet from '@src/components/atoms/ButtonSheet/ButtonSheet';
import { SheetContainerProps } from '@src/components/molecules/SheetContainer/SheetContainer.type';
import { TextAtom } from '@src/components/atoms/Text/Text';
import { fs, hp } from '@src/utils/dimensions';



const SheetContainer: React.FC<SheetContainerProps> = ({Text,...props}) => {
  return (
    <View>
      <TextAtom style={styles.TextSty}>{Text}</TextAtom>
      <ButtonSheet
      {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    TextSty:{
        fontSize:fs(14),
        fontWeight:"500",
        color:'#344054',
        marginBottom:hp(6)
    }
})

export default SheetContainer