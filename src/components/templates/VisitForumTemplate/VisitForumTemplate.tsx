import React from 'react';
import { FlatList } from 'react-native';
import HomeHeader from '@src/components/molecules/HomeHeader/HomeHeader';
import VisitCard, { VisitItem } from '@src/components/molecules/VisitCard/VisitCard';
import { BottomContainer } from '@src/components';
import { hp } from '@src/utils/dimensions';

interface Props {
  data: VisitItem[];
  onCardPress: (item: VisitItem) => void;
  onAddVisit: () => void;
}

const VisitForumTemplate: React.FC<Props> = ({ data, onCardPress, onAddVisit }) => {
  return (
    <HomeHeader userName="Visit Forum">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <VisitCard item={item} onPress={onCardPress} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp(100) }}
      />
      <BottomContainer title="Add Visit" onPress={onAddVisit} />
    </HomeHeader>
  );
};

export default VisitForumTemplate;
