import { View, Text } from 'react-native';
import React from 'react';
import ScanItemsSection from '../ScanItemsSection/ScanItemsSection';
import ItemRow from '../../molecules/ItemRow/ItemRow';
import { TextAtom } from '../../atoms/Text/Text';
import { hp, wp } from '../../../utils/dimensions';
import { SpacerAtom } from '../../atoms/Spacer/Spacer';
import Separator from '../../atoms/Separator';
import AddNewItem from '../../molecules/AddNewItem/AddNewItem';
import { Routes } from '../../../navigation/routes';
import { useNavigation } from '@react-navigation/native';

type Item = {
  id: string;
  name: string;
  price: number | string;
};

type Props = {
  items: Item[];
  onDelete: (id: string) => void;
};

const ItemsSection: React.FC<Props> = ({ items, onDelete }) => {
        const navigation = useNavigation<any>();
  return (
    <View>
      <ScanItemsSection text="Items" />

      {items.length > 0 && (
        <>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: hp(12),
            backgroundColor: '#F9FAFB',
            paddingHorizontal: wp(16),
          }}
        >
          <TextAtom style={{ width: wp(48) }}>Qty</TextAtom>
          <TextAtom style={{ flex: 1 }}>Name</TextAtom>
          <TextAtom style={{ width: wp(95) }}>Price</TextAtom>
          <View style={{ width: wp(45) }} />
        </View>
    
      <View style={{ paddingHorizontal: wp(16) }}>
        {items.map((item, index) => (
          <>
            <ItemRow
              key={item.id}
              index={index}
              name={item.name}
              price={item.price}
              onDelete={() => onDelete(item.id)}
            />
            <Separator mt={hp(8)} />
          </>
        ))}
              <AddNewItem  onPress={()=>navigation.navigate(Routes.CAMERA_SCREEN)}/>
 </View>
                 </>
  )}
      

    </View>
  );
};

export default ItemsSection;
