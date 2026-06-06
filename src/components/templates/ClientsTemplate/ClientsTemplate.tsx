import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import HomeHeader from '@src/components/molecules/HomeHeader/HomeHeader';
import { InputAtom } from '@src/components/atoms/Input/Input';
import SvgView from '@src/components/atoms/SvgView/SvgView';
import { ListAtom } from '@src/components/atoms/ListAtom/ListAtom';
import { SpacerAtom } from '@src/components/atoms/Spacer/Spacer';
import BottomContainer from '@src/components/molecules/BottomContainer/BottomContainer';
import ClientCard, { Client } from '@src/components/molecules/ClientCard/ClientCard';
import { Assets } from '@src/assets';
import { hp, sp, wp } from '@src/utils/dimensions';

interface Props {
  clients: Client[];
  onAddClient?: () => void;
  onCardPress?: (client: Client) => void;
  onRequestDiscount?: (client: Client) => void;
  onEdit?: (client: Client) => void;
}

const ClientsTemplate: React.FC<Props> = ({
  clients,
  onAddClient,
  onCardPress,
  onRequestDiscount,
  onEdit,
}) => {
  const [query, setQuery] = useState('');
  const {
    images: { components: { search, filters } },
  } = Assets;

  const filtered = query.trim()
    ? clients.filter(c => c.name.toLowerCase().includes(query.toLowerCase()))
    : clients;

  return (
    <HomeHeader userName="Clients" badge={clients.length}>
      <View style={styles.searchRow}>
        <InputAtom
          containerStyle={{ flex: 1 }}
          placeholder="Search by client name..."
          value={query}
          onChangeText={setQuery}
          leftIcon={<SvgView svgFile={search} width={wp(18)} height={hp(18)} />}
        />
        <Pressable style={styles.filterBtn}>
          <SvgView svgFile={filters} width={wp(20)} height={hp(20)} />
        </Pressable>
      </View>

      <SpacerAtom height={hp(12)} />

      <ListAtom
        data={filtered}
        keyExtractor={(item: Client) => item.id}
        renderItem={({ item }: { item: Client }) => (
          <ClientCard
            item={item}
            onPress={() => onCardPress?.(item)}
            onRequestDiscount={() => onRequestDiscount?.(item)}
            onEdit={() => onEdit?.(item)}
          />
        )}
        ItemSeparatorComponent={() => <SpacerAtom height={hp(12)} />}
        contentContainerStyle={{ paddingBottom: hp(150) }}
      />

      <BottomContainer title="Add Client" onPress={onAddClient} />
    </HomeHeader>
  );
};

const styles = StyleSheet.create({
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(8),
    marginBottom: hp(4),
  },
  filterBtn: {
    width: wp(44),
    height: hp(48),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: sp(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ClientsTemplate;
