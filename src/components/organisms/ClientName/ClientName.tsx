import { View, Text, TextStyle } from 'react-native';
import React from 'react';
import RowView from '@src/components/atoms/RowView/RowView';
import { TextAtom } from '@src/components/atoms/Text/Text';
import RowText, { RowTextProps } from '@src/components/molecules/RowText/RowText';
import {
  getClientFormattedValue,
  getClientValueStyle,
} from '@src/utils/HelperFuncations';
import { hp } from '@src/utils/dimensions';

interface Props extends RowTextProps {
  item?: { value: string; text: string }[];
}

const ClientName = ({ item }: Props) => {
  const list = item || [];
  return (
    <View style={{ paddingHorizontal: 16, marginBottom: 16, gap: hp(16) }}>
      {list.map((client, index) => (
        <RowText
          key={client.value ?? index}
          txt1={client.text}
          txt2={getClientFormattedValue(client.text, client.value)}
          txt2Style={[getClientValueStyle(client.text)]}
        />
      ))}
    </View>
  );
};

export default ClientName;
