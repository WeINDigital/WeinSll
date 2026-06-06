import React from 'react';
import InventoryTemplate from '@src/components/templates/InventoryTemplate/InventoryTemplate';
import { InventoryEntry } from '@src/components/molecules/InventoryCard/InventoryCard';

const MOCK_INVENTORY: InventoryEntry[] = [
  { id: '1', date: '12/12/2021', stock: 26, returned: 4, sold: 14 },
  { id: '2', date: '12/12/2021', stock: 26, returned: 4, sold: 14 },
  { id: '3', date: '12/12/2021', stock: 26, returned: 4, sold: 14 },
];

const Inventory = () => {
  return (
    <InventoryTemplate
      data={MOCK_INVENTORY}
      fullCapacity={30}
      onRequestInventory={() => console.log('request inventory')}
    />
  );
};

export default Inventory;
