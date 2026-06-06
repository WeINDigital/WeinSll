import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import HomeHeader from '@src/components/molecules/HomeHeader/HomeHeader';
import InventoryCard, { InventoryEntry } from '@src/components/molecules/InventoryCard/InventoryCard';
import InventoryMessageModal from '@src/components/organisms/InventoryMessageModal/InventoryMessageModal';
import { BottomContainer, Button, CardAtom, SpacerAtom, TextAtom } from '@src/components';
import { hp, sp } from '@src/utils/dimensions';

interface Props {
  data: InventoryEntry[];
  fullCapacity: number;
  onRequestInventory: () => void;
}

const InventoryTemplate: React.FC<Props> = ({ data, fullCapacity, onRequestInventory }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleRequest = () => {
    setModalVisible(true);
    onRequestInventory();
  };

  return (
    <HomeHeader userName="Inventory" >
      <CardAtom style={styles.capacityCard}>
        <TextAtom variant="subtitle" fw="600" style={styles.capacityText}>
          Full Capacity: {fullCapacity} Stock
        </TextAtom>
      </CardAtom>
      <SpacerAtom height={hp(8)} />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <InventoryCard item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />

            <BottomContainer title="Request Inventory" onPress={handleRequest} />

      <InventoryMessageModal
        visible={modalVisible}
        onConfirm={() => setModalVisible(false)}
      />
    </HomeHeader>
  );
};

const styles = StyleSheet.create({
  capacityCard: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowOpacity: 0,
    elevation: 0,
    borderRadius: sp(8),
  },
  capacityText: { color: '#374151' },
  list: { paddingBottom: hp(100) },
  bottomBtn: {
    position: 'absolute',
    bottom: hp(24),
    left: 0,
    right: 0,
  },
});

export default InventoryTemplate;
