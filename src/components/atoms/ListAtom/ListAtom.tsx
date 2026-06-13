import React from 'react';
import { FlatList } from 'react-native';

export const ListAtom = (props: any) => {
  return (
    <FlatList
      {...props}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
};
