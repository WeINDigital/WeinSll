import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Linking } from 'react-native';
import HomeHeader from '@src/components/molecules/HomeHeader/HomeHeader';
import { InputAtom } from '@src/components/atoms/Input/Input';
import { ListAtom } from '@src/components/atoms/ListAtom/ListAtom';
import {
  CardAtom,
  Separator,
  SpacerAtom,
  SvgView,
  TextAtom,
} from '@src/components';
import { Assets } from '@src/assets';
import { hp, sp, wp } from '@src/utils/dimensions';

export type Salesman = {
  id: string;
  name: string;
  location: string;
  phone: string;
  amount: number;
};

interface Props {
  salesmen: Salesman[];
  onCardPress?: (item: Salesman) => void;
}

const AVATAR_COLORS = ['#EDE9FE', '#FEF3C7', '#DCFCE7', '#FEE2E2', '#E0F2FE'];
const AVATAR_TEXT_COLORS = ['#7C3AED', '#D97706', '#16A34A', '#DC2626', '#0284C7'];

const getInitials = (name: string) => {
  const parts = name.trim().split(' ');
  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  return name.slice(0, 2).toUpperCase();
};

const getColorIndex = (id: string) =>
  id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % AVATAR_COLORS.length;

const SalesmenTemplate: React.FC<Props> = ({ salesmen, onCardPress }) => {
  const [query, setQuery] = useState('');
  const {
    images: { components: { search, filters, phoneColor, mapcolor } },
  } = Assets;

  const filtered = query.trim()
    ? salesmen.filter(s => s.name.toLowerCase().includes(query.toLowerCase()))
    : salesmen;

  const renderItem = ({ item }: { item: Salesman }) => {
    const idx = getColorIndex(item.id);
    return (
      <CardAtom onPress={() => onCardPress?.(item)}>
        <View style={styles.topRow}>
          <View style={styles.nameRow}>
            <View style={[styles.avatar, { backgroundColor: AVATAR_COLORS[idx] }]}>
              <TextAtom style={[styles.initials, { color: AVATAR_TEXT_COLORS[idx] }]}>
                {getInitials(item.name)}
              </TextAtom>
            </View>
            <View>
              <TextAtom variant="subtitle" fw="600">{item.name}</TextAtom>
              <View style={styles.locationRow}>
                <SvgView svgFile={mapcolor} width={wp(12)} height={hp(12)} />
                <TextAtom variant="caption" style={styles.locationText}>{item.location}</TextAtom>
              </View>
            </View>
          </View>
        </View>

        <SpacerAtom height={hp(12)} />
        <Separator />
        <SpacerAtom height={hp(12)} />

        <View style={styles.bottomRow}>
          <View style={styles.amountRow}>
            <TextAtom variant="subtitle" style={styles.dollarSign}>$</TextAtom>
            <TextAtom variant="subtitle" fw="500">{item.amount} EGP</TextAtom>
          </View>
          <Pressable
            style={styles.callBtn}
            onPress={() => Linking.openURL(`tel:${item.phone}`)}
          >
            <SvgView svgFile={phoneColor} width={wp(16)} height={hp(16)} />
            <TextAtom style={styles.callText}>Call</TextAtom>
          </Pressable>
        </View>
      </CardAtom>
    );
  };

  return (
    <HomeHeader userName="Salesmen" badge={salesmen.length}>
      <View style={styles.searchRow}>
        <InputAtom
          containerStyle={{ flex: 1 }}
          placeholder="Search by salesman name..."
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
        keyExtractor={(item: Salesman) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <SpacerAtom height={hp(12)} />}
        contentContainerStyle={{ paddingBottom: hp(40) }}
      />
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
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(12),
  },
  avatar: {
    width: wp(40),
    height: wp(40),
    borderRadius: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    fontSize: sp(14),
    fontWeight: '600',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(4),
    marginTop: hp(2),
  },
  locationText: { color: '#667085' },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(4),
  },
  dollarSign: { color: '#667085' },
  callBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(4),
  },
  callText: { color: '#7F56D9' },
});

export default SalesmenTemplate;
