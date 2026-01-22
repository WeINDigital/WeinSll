import React, { JSX } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ListAtom } from '../../atoms/ListAtom/ListAtom';
import { TextAtom } from '../../atoms/Text/Text';
import { SpacerAtom } from '../../atoms/Spacer/Spacer';
import { hp } from '../../../utils/dimensions';

interface Props {
  title?: string;
  data: any[];
  renderItem: ({ item }: any) => JSX.Element;
  onViewAll?: () => void;
}

export const SectionList: React.FC<Props> = ({
  title,
  data,
  renderItem,
  onViewAll,
}) => {
  return (
    <View>
      {title && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 12,
          }}
        >
          <TextAtom fw="600">{title}</TextAtom>

          {onViewAll && data.length > 5 && (
            <TouchableOpacity onPress={onViewAll}>
              <TextAtom variant="body">View all</TextAtom>
            </TouchableOpacity>
          )}
        </View>
      )}

      <ListAtom
        data={data}
        keyExtractor={(item: any) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <SpacerAtom height={16} />}
        contentContainerStyle={{
          paddingBottom: hp(150),
        }}
      />
    </View>
  );
};
