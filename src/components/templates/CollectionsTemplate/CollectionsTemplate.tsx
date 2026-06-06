import React, { useState } from 'react';
import { FlatList } from 'react-native';
import HomeHeader from '@src/components/molecules/HomeHeader/HomeHeader';
import { InputWithIcon } from '@src/components/molecules/InputWithIcon/InputWithIcon';
import CollectionCard, { CollectionItem } from '@src/components/molecules/CollectionCard/CollectionCard';
import SetNewDateModal from '@src/components/organisms/SetNewDateModal/SetNewDateModal';
import { SpacerAtom } from '@src/components/atoms/Spacer/Spacer';
import { Assets } from '@src/assets';
import { hp } from '@src/utils/dimensions';

interface Props {
  data: CollectionItem[];
  badge?: number;
  dateOptions: string[];
  searchQuery: string;
  onSearchChange: (text: string) => void;
  onConfirmDate: (id: string, date: string) => void;
}

const CollectionsTemplate: React.FC<Props> = ({
  data,
  badge,
  dateOptions,
  searchQuery,
  onSearchChange,
  onConfirmDate,
}) => {
  const { images: { components: { search } } } = Assets;
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <HomeHeader userName="Collections" badge={badge}>
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
          <CollectionCard item={item} onNewDate={(id) => setSelectedId(id)} />
        )}
        showsVerticalScrollIndicator={false}
      />
      <SetNewDateModal
        visible={!!selectedId}
        dates={dateOptions}
        onConfirm={(date) => {
          if (selectedId) onConfirmDate(selectedId, date);
          setSelectedId(null);
        }}
        onCancel={() => setSelectedId(null)}
      />
    </HomeHeader>
  );
};

export default CollectionsTemplate;
