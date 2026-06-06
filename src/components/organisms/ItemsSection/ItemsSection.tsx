import { View, Text, Pressable } from 'react-native';
import React from 'react';
import ScanItemsSection from '@src/components/organisms/ScanItemsSection/ScanItemsSection';
import ItemRow from '@src/components/molecules/ItemRow/ItemRow';
import { TextAtom } from '@src/components/atoms/Text/Text';
import { hp, wp } from '@src/utils/dimensions';
import { SpacerAtom } from '@src/components/atoms/Spacer/Spacer';
import Separator from '@src/components/atoms/Separator';
import AddNewItem from '@src/components/molecules/AddNewItem/AddNewItem';
import { Routes } from '@src/navigation/routes';
import { useNavigation } from '@react-navigation/native';

type Item = {
  id: string;
  name: string;
  price: number | string;
  notCamera?: boolean;
};

type Props = {
  items?: Item[];
  onDelete?: (id?: string) => void;
  notCamera?: boolean;
  selectedIds?: string[];
  setSelectedIds?: (ids: string[]) => void;
};

const ItemsSection: React.FC<Props> = ({ items = [], onDelete = () => {}, notCamera, selectedIds = [], setSelectedIds }) => {
  const navigation = useNavigation<any>();
  const toggle = (id?: string) => {
    if (!id) return;
    const exists = selectedIds.includes(id);
    const next = exists ? selectedIds.filter(s => s !== id) : [...selectedIds, id];
    setSelectedIds?.(next);
  };
  return (
    <View>
      {notCamera ? null : <ScanItemsSection text="Items" />}

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
            <TextAtom style={{ width: notCamera ? wp(55) : wp(48) }}>
              Qty
            </TextAtom>
            <TextAtom style={{ flex: 1 }}>Name</TextAtom>
            <TextAtom style={{ width: notCamera ? wp(40) : wp(95) }}>
              Price
            </TextAtom>
            <View style={{ width: notCamera ? wp(30) : wp(45) }} />
          </View>

          <View style={{ paddingHorizontal: wp(16) }}>
            {items.map((item, index) => {
              const selected = selectedIds.includes(item.id);
              return (
                <React.Fragment key={item.id}>
                  <Pressable onPress={() => toggle(item.id)} style={{ backgroundColor: selected ? '#EEF2FF' : 'transparent', padding: 4, borderRadius: 8 }}>
                    <ItemRow
                      index={index}
                      name={item.name}
                      price={item.price}
                      onDelete={() => onDelete(item?.id)}
                      removeItem={notCamera}
                    />
                  </Pressable>

                  {index !== items.length - 1 && <Separator mt={hp(8)} />}
                </React.Fragment>
              );
            })}
            {notCamera ? null : (
              <AddNewItem
                onPress={() => navigation.navigate(Routes.CAMERA_SCREEN)}
              />
            )}
          </View>
        </>
      )}
    </View>
  );
};

export default ItemsSection;
