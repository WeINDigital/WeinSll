import React from 'react';
import { useRoute } from '@react-navigation/native';
import VisitDetailsTemplate from '@src/components/templates/VisitDetailsTemplate/VisitDetailsTemplate';
import { VisitItem } from '@src/components/templates/VisitDetailsTemplate/VisitDetailsTemplate';

const MOCK_VISIT: VisitItem = {
  id: '1',
  clientName: 'Youssef Bsheer',
  location: 'Maadi, Egypt',
  date: '12/12/2021',
  reasons: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  outcome: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  visitDate: 'Jan 6, 2022',
};

const VisitDetails = () => {
  const route = useRoute<any>();
  const visit: VisitItem = route?.params?.visit ?? MOCK_VISIT;

  return <VisitDetailsTemplate visit={visit} />;
};

export default VisitDetails;
