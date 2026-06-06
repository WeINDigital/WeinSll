import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import VisitForumTemplate from '@src/components/templates/VisitForumTemplate/VisitForumTemplate';
import { VisitItem } from '@src/components/templates/VisitDetailsTemplate/VisitDetailsTemplate';
import { Routes } from '@src/navigation/routes';

const MOCK_VISITS: VisitItem[] = [
  {
    id: '1',
    clientName: 'Youssef Bsheer',
    location: 'Maadi, Egypt',
    date: '12/12/2021',
    reasons: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    outcome: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    visitDate: 'Jan 6, 2022',
  },
  {
    id: '2',
    clientName: 'Youssef Bsheer',
    location: 'Maadi, Egypt',
    date: '12/12/2021',
    reasons: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    outcome: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    visitDate: 'Jan 6, 2022',
  },
  {
    id: '3',
    clientName: 'Youssef Bsheer',
    location: 'Maadi, Egypt',
    date: '12/12/2021',
    reasons: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    outcome: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    visitDate: 'Jan 6, 2022',
  },
  {
    id: '4',
    clientName: 'Youssef Bsheer',
    location: 'Maadi, Egypt',
    date: '12/12/2021',
    reasons: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    outcome: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    visitDate: 'Jan 6, 2022',
  },
];

const VisitForum = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <VisitForumTemplate
      data={MOCK_VISITS}
      onCardPress={(item) =>
        navigation.navigate(Routes.VISIT_DETAILS, { visit: item })
      }
      onAddVisit={() => navigation.navigate(Routes.ADD_VISIT)}
    />
  );
};

export default VisitForum;
