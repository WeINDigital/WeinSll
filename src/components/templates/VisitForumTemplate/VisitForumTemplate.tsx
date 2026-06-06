import React from 'react';
import { FlatList } from 'react-native';
import HomeHeader from '@src/components/molecules/HomeHeader/HomeHeader';
import PersonCard from '@src/components/molecules/PersonCard/PersonCard';
import { BottomContainer } from '@src/components';
import { hp } from '@src/utils/dimensions';
import { VisitItem } from '@src/components/templates/VisitDetailsTemplate/VisitDetailsTemplate';

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
          <PersonCard
            item={{ id: item.id, name: item.clientName, subtitle: item.location, date: item.date }}
            onPress={() => onCardPress(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp(100) }}
      />
      <BottomContainer title="Add Visit" onPress={onAddVisit} />
    </HomeHeader>
  );
};

export default VisitForumTemplate;
