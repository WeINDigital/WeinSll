import React from 'react';
import { FlatList } from 'react-native';
import HomeHeader from '@src/components/molecules/HomeHeader/HomeHeader';
import { InputWithIcon } from '@src/components/molecules/InputWithIcon/InputWithIcon';
import ReceiptCard, { ReceiptItem } from '@src/components/molecules/ReceiptCard/ReceiptCard';
import { SpacerAtom } from '@src/components/atoms/Spacer/Spacer';
import { Assets } from '@src/assets';
import { hp } from '@src/utils/dimensions';

interface Props {
  data: ReceiptItem[];
  badge?: number;
  searchQuery: string;
  onSearchChange: (text: string) => void;
  onCollect: (id: string) => void;
  onPress: (item: ReceiptItem) => void;
}

const ReceiptsCenterTemplate: React.FC<Props> = ({
  data,
  badge,
  searchQuery,
  onSearchChange,
  onCollect,
  onPress,
}) => {
  const { images: { components: { search } } } = Assets;

  return (
    <HomeHeader userName="Receipts Center" badge={badge}>
      <InputWithIcon
        icon={search}
        placeholder="Search by client name..."
        value={searchQuery}
        onChangeText={onSearchChange}
      />
      <SpacerAtom height={hp(16)} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ReceiptCard item={item} onCollect={onCollect} onPress={() => onPress(item)} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </HomeHeader>
  );
};

export default ReceiptsCenterTemplate;
