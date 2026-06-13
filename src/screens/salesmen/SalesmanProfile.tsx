import React from 'react';
import SalesmanProfileTemplate, {
  SalesmanProfileData,
} from '@src/components/templates/SalesmanProfileTemplate/SalesmanProfileTemplate';

const MOCK_PROFILE: SalesmanProfileData = {
  id: '1',
  name: 'Youssef Bsheer',
  location: 'Maadi, Cairo',
  phone: '01094828532',
  stats: [
    { id: 's1', label: 'Views 24 hours', value: '2,000', percent: '100%' },
    { id: 's2', label: 'Views 24 hours', value: '2,000', percent: '100%' },
  ],
  receipts: [
    {
      id: 'r1',
      name: 'Youssef Bsheer',
      type: 'Credit',
      date: '12/12/2021',
      amount: '941 EGP',
      collectionDate: '12/12/2021',
    },
    {
      id: 'r2',
      name: 'Youssef Bsheer',
      type: 'Credit',
      date: '15/12/2021',
      amount: '941 EGP',
      collectionDate: '12/12/2021',
    },
  ],
  discounts: [
    { id: 'd1', name: 'Youssef Bsheer', status: 'in_progress', other: 'Other' },
    { id: 'd2', name: 'Youssef Bsheer', status: 'approved', other: 'Other' },
    { id: 'd3', name: 'Youssef Bsheer', status: 'rejected', other: 'Other' },
    { id: 'd4', name: 'Youssef Bsheer', status: 'rejected', other: 'Other' },
    { id: 'd5', name: 'Youssef Bsheer', status: 'rejected', other: 'Other' },
    { id: 'd6', name: 'Youssef Bsheer', status: 'in_progress', other: 'Other' },

  ],
};

const SalesmanProfile = () => {
  return <SalesmanProfileTemplate salesman={MOCK_PROFILE} />;
};

export default SalesmanProfile;
