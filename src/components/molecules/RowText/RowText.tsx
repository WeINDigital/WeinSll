import { View, Text, TextStyle, StyleProp } from 'react-native'
import React from 'react'
import RowView from '../../atoms/RowView/RowView'
import { TextAtom } from '../../atoms/Text/Text'

export interface RowTextProps {
  txt1?: string;
  txt2?: string;
  totalAmount?: boolean;
  txt2Style?: StyleProp<TextStyle>;
}

const RowText: React.FC<RowTextProps> = ({ txt1, txt2, totalAmount, txt2Style }) => {
    
  return (
    <RowView>
        <TextAtom>{txt1}</TextAtom>
        <TextAtom variant='subtitle' fw= {totalAmount ? 'bold' :'500'} style={txt2Style}>{txt2}</TextAtom>
    </RowView>
  )
}

export default RowText