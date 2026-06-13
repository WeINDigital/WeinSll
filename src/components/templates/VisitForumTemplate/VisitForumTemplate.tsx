import React from 'react';
import { FlatList } from 'react-native';
import HomeHeader from '@src/components/molecules/HomeHeader/HomeHeader';
import PersonCard from '@src/components/molecules/PersonCard/PersonCard';
import { BottomContainer, SectionList } from '@src/components';
import { hp, wp } from '@src/utils/dimensions';
import { VisitItem } from '@src/components/templates/VisitDetailsTemplate/VisitDetailsTemplate';
import SurveyCard from '@src/components/molecules/SurveyCard/SurveyCard';
import SalesmenTicketsCard from '@src/components/molecules/SalesmenTicketsCard/SalesmenTicketsCard';

interface Props {
  data: VisitItem[];
  onCardPress: (item: VisitItem) => void;
  onAddVisit: () => void;
  role: string
}

const VisitForumTemplate: React.FC<Props> = ({ data, onCardPress, onAddVisit,role }) => {
  const SalesmenComponent = ()=>{
    return(
      <>
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
      </>
    )
  }

  const SuperVisorComponent = ()=>{
    return(
      <>
      <SectionList
      title='My Surveys'
      onViewAll={()=>{}}
       data={data}
      horizontal
      renderItem={({ item }) => (
         <SurveyCard item={item}/>
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp(24),gap:wp(10) }}
      />

       <SectionList
      title='Salesmen Tickets'
      onViewAll={()=>{}}
       data={data}
      horizontal
      renderItem={({ item }) => (
         <SalesmenTicketsCard item={item}/>
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp(24),gap:wp(10) }}
      />
      
      <BottomContainer title="Create Survey" onPress={onAddVisit} />
      </>
    )
  }

  const renderContent = () => {
  switch (role?.toLowerCase()) {
    case 'supervisor':
      return <SuperVisorComponent />;

    case 'salesman':
      return <SalesmenComponent />;

    default:
      return <SalesmenComponent />;
  }
};

  return (
    <HomeHeader userName="Visit Forum">
     {renderContent()}
    </HomeHeader>
  );
};

export default VisitForumTemplate;
