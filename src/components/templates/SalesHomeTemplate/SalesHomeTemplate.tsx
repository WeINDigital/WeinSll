import React, { JSX } from 'react';
import { View } from 'react-native';
import { SectionList } from '../../molecules/SectionList/SectionList';
import BottomContainer from '../../molecules/BottomContainer/BottomContainer';
import HomeHeader from '../../molecules/HomeHeader/HomeHeader';

interface Props {
  dashboardData: any[];
  renderCard: ({ item }: any) => JSX.Element;
}

export const SalesHomeTemplate: React.FC<Props> = ({
  dashboardData,
  renderCard,
}) => {
  return (
    <HomeHeader userName='Moataz mahdi' >
      <SectionList
        // title="Dashboard"
        data={dashboardData}
        renderItem={renderCard}
        onViewAll={() => {}}
        
      />
    <BottomContainer title='Create Invoice' />
      
    </HomeHeader>
  );
};
