import { View, Text, TextStyle } from 'react-native';
import React from 'react';
import RowView from '../../atoms/RowView/RowView';
import { TextAtom } from '../../atoms/Text/Text';
import RowText, { RowTextProps } from '../../molecules/RowText/RowText';
import {
  getClientFormattedValue,
  getClientValueStyle,
} from '../../../utils/HelperFuncations';
import { hp } from '../../../utils/dimensions';

interface Props extends RowTextProps {
  item: { value: string; text: string }[];
}

const ClientName = ({ item }: Props) => {
  return (
    <View style={{ paddingHorizontal: 16, marginBottom: 16,gap: hp(16) }}>
      {item.map((client, index) => (
        <RowText
          key={index}
          txt1={client.text}
          txt2={getClientFormattedValue(client.text, client.value)}
          txt2Style={[getClientValueStyle(client.text)]}
        />
      ))}
    </View>
  );
};

export default ClientName;
