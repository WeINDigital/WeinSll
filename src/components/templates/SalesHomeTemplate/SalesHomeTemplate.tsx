import React, { JSX } from 'react';
import { View } from 'react-native';
import { SectionList } from '../../molecules/SectionList/SectionList';
import BottomContainer from '../../molecules/BottomContainer/BottomContainer';
import HomeHeader from '../../molecules/HomeHeader/HomeHeader';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../../navigation/routes';

interface Props {
  dashboardData: any[];
  renderCard: ({ item }: any) => JSX.Element;
}

export const SalesHomeTemplate: React.FC<Props> = ({
  dashboardData,
  renderCard,
}) => {
  const navigation = useNavigation<any>();
  return (
    <HomeHeader userName='Moataz mahdi' >
      <SectionList
        // title="Dashboard"
        data={dashboardData}
        renderItem={renderCard}
        onViewAll={() => {}}
        
      />
    <BottomContainer title='Create Invoice' onPress={()=>navigation.navigate(Routes.CREATE_INVOICE)} />
      
    </HomeHeader>
  );
};
