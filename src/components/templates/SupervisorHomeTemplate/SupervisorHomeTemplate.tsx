import React from 'react';
import { View, FlatList, Pressable, StyleSheet } from 'react-native';
import HomeHeader from '@src/components/molecules/HomeHeader/HomeHeader';
import { StatCard } from '@src/components/molecules/StatCard/StatCard';
import RowView from '@src/components/atoms/RowView/RowView';
import { TextAtom } from '@src/components/atoms/Text/Text';
import { SpacerAtom } from '@src/components/atoms/Spacer/Spacer';
import SvgView from '@src/components/atoms/SvgView/SvgView';
import { Assets } from '@src/assets';
import { hp, wp, sp } from '@src/utils/dimensions';

type DiscountItem = {
  id?: string;
  name?: string;
  status?: string;
  discountType?: string;
  discountValue?: string | number;
  clientType?: string;
  date?: string;
  salesman?: string;
};

interface Props {
  userName: string;
  dateRange: string;
  salesValue: string;
  salesPercent: string;
  discounts: DiscountItem[];
  renderDiscountCard: ({ item }: { item: DiscountItem }) => React.ReactElement;
  onViewReport: () => void;
  onViewAllDiscounts: () => void;
}

const SupervisorHomeTemplate: React.FC<Props> = ({
  userName,
  dateRange,
  salesValue,
  salesPercent,
  discounts,
  renderDiscountCard,
  onViewReport,
  onViewAllDiscounts,
}) => {
  const { images: { components: { calendar } } } = Assets;

  return (
    <HomeHeader userName={userName}>
      <View style={styles.dateChip}>
        <SvgView svgFile={calendar} width={wp(14)} height={hp(14)} />
        <TextAtom variant="caption" style={styles.dateText}>{dateRange}</TextAtom>
      </View>

      <SpacerAtom height={hp(16)} />

      <StatCard
        title="Sales Transactions"
        value={salesValue}
        percent={salesPercent}
        onViewReport={onViewReport}
      />

      <SpacerAtom height={hp(20)} />

      <RowView>
        <TextAtom variant="subtitle" fw="700">Discounts</TextAtom>
        <Pressable onPress={onViewAllDiscounts}>
          <TextAtom style={styles.viewAll}>View All</TextAtom>
        </Pressable>
      </RowView>

      <SpacerAtom height={hp(12)} />

      <FlatList
        data={discounts}
        keyExtractor={(item, i) => item.id ?? String(i)}
        renderItem={renderDiscountCard}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <SpacerAtom height={hp(12)} />}
        contentContainerStyle={styles.list}
      />
    </HomeHeader>
  );
};

const styles = StyleSheet.create({
  dateChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(6),
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: sp(20),
    paddingHorizontal: wp(12),
    paddingVertical: hp(6),
  },
  dateText: { color: '#374151' },
  viewAll: { color: '#7F56D9', fontWeight: '600' },
  list: { paddingBottom: hp(20) },
});

export default SupervisorHomeTemplate;
