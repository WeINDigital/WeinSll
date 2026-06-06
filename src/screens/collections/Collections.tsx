import React, { useState } from 'react';
import CollectionsTemplate from '@src/components/templates/CollectionsTemplate/CollectionsTemplate';
import { CollectionItem } from '@src/components/molecules/CollectionCard/CollectionCard';

const MOCK_COLLECTIONS: CollectionItem[] = [
  { id: '1', clientName: 'Youssef Bsheer', location: 'Maadi, Cairo', phone: '01000000001', date: '12/12/2021' },
  { id: '2', clientName: 'Youssef Bsheer', location: 'Maadi, Cairo', phone: '01000000002', date: '12/12/2021' },
];

const DATE_OPTIONS = ['12/12/2021', '01/01/2022', '15/01/2022'];

const Collections = () => {
  const [search, setSearch] = useState('');

  const filtered = MOCK_COLLECTIONS.filter(c =>
    c.clientName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <CollectionsTemplate
      data={filtered}
      badge={MOCK_COLLECTIONS.length}
      dateOptions={DATE_OPTIONS}
      searchQuery={search}
      onSearchChange={setSearch}
      onConfirmDate={(id, date) => console.log('confirmed date', id, date)}
    />
  );
};

export default Collections;
