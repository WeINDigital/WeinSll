import React from 'react';
import {
  View,
  ScrollView,
  Pressable,
  StyleSheet,
  Linking,
  Image,
} from 'react-native';
import { HeaderWithBack } from '@src/components/molecules/HeaderWithBack/HeaderWithBack';
import { SectionList } from '@src/components/molecules/SectionList/SectionList';
import {
  CardAtom,
  RowView,
  Separator,
  SpacerAtom,
  StatusBadge,
  SvgView,
  TextAtom,
} from '@src/components';
import { Assets } from '@src/assets';
import { hp, sp, wp } from '@src/utils/dimensions';

export type SalesmanStat = {
  id: string;
  label: string;
  value: string;
  percent: string;
};

export type SalesmanReceipt = {
  id: string;
  name: string;
  type: string;
  date: string;
  amount: string;
  collectionDate?: string;
};

export type SalesmanDiscount = {
  id: string;
  name: string;
  status: string;
  other?: string;
};

export type SalesmanProfileData = {
  id: string;
  name: string;
  location: string;
  phone: string;
  stats: SalesmanStat[];
  receipts: SalesmanReceipt[];
  discounts: SalesmanDiscount[];
};

interface Props {
  salesman: SalesmanProfileData;
  onViewAllReceipts?: () => void;
  onViewAllDiscounts?: () => void;
}


const AVATAR_BG = '#EDE9FE';
const AVATAR_TEXT = '#7C3AED';

const getInitials = (name: string) => {
  const parts = name.trim().split(' ');
  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  return name.slice(0, 2).toUpperCase();
};

const ProfileSection: React.FC<{ name: string; location: string }> = ({ name, location }) => {
  const { images: { components: { mapcolor } } } = Assets;
  return (
    <View style={styles.profileSection}>
      <View style={styles.avatarLarge}>
        <TextAtom style={styles.avatarText}>{getInitials(name)}</TextAtom>
      </View>
      <SpacerAtom height={hp(12)} />
      <TextAtom fw="700" style={styles.salesmanName}>{name}</TextAtom>
      <SpacerAtom height={hp(4)} />
      <View style={styles.locationRow}>
        <SvgView svgFile={mapcolor} width={wp(14)} height={hp(14)} />
        <SpacerAtom width={wp(4)} />
        <TextAtom variant="subtitle" style={styles.purple}>{location}</TextAtom>
      </View>
    </View>
  );
};

const StatItem: React.FC<{ stat: SalesmanStat }> = ({ stat }) => (
  <CardAtom style={styles.statCard}>
    <RowView>
      <TextAtom variant="caption">{stat.label}</TextAtom>
      <TextAtom style={styles.dots}>⋮</TextAtom>
    </RowView>
    <SpacerAtom height={hp(8)} />
    <RowView>
      <TextAtom fw="700" style={styles.statValue}>{stat.value}</TextAtom>
      <View style={styles.percentBadge}>
        <TextAtom style={styles.percentText}>↑ {stat.percent}</TextAtom>
      </View>
    </RowView>
  </CardAtom>
);

const ReceiptItem: React.FC<{ receipt: SalesmanReceipt }> = ({ receipt }) => {
  const { images: { components: { calendar, clintImage } } } = Assets;
  return (
    <CardAtom style={styles.miniCard}>
      <RowView>
        <View style={styles.nameRow}>
          <Image source={clintImage} style={styles.miniAvatar} />
          <View style={{ marginLeft: wp(8) }}>
            <TextAtom variant="subtitle" fw="500">{receipt.name}</TextAtom>
            <TextAtom variant="caption">{receipt.type}</TextAtom>
          </View>
        </View>
        <TextAtom style={styles.dots}>⋮</TextAtom>
      </RowView>
      <SpacerAtom height={hp(16)} />
      <RowView>
        <View style={styles.dateRow}>
          <SvgView svgFile={calendar} width={wp(14)} height={hp(14)} />
          <TextAtom variant="caption" style={{ marginLeft: wp(4) }}>{receipt.date}</TextAtom>
        </View>
        <TextAtom fw="700">{receipt.amount}</TextAtom>
      </RowView>
      {receipt.collectionDate && (
        <>
          <Separator mt={hp(8)} mb={hp(8)} />
          <RowView>
            <View style={styles.dateRow}>
              <SvgView svgFile={calendar} width={wp(14)} height={hp(14)} />
              <View style={{ marginLeft: wp(4) }}>
                <TextAtom variant="caption" style={styles.grayText}>Collection date</TextAtom>
                <TextAtom variant="caption">{receipt.collectionDate}</TextAtom>
              </View>
            </View>
            <TextAtom style={styles.purple}>Collection</TextAtom>
          </RowView>
        </>
      )}
    </CardAtom>
  );
};

const DiscountItem: React.FC<{ discount: SalesmanDiscount }> = ({ discount }) => {
  const { images: { components: { clintImage } } } = Assets;
  return (
    <CardAtom style={styles.miniCard}>
      <RowView>
        <View style={styles.nameRow}>
          <Image source={clintImage} style={styles.miniAvatar} />
          <SpacerAtom width={wp(8)} />
          <TextAtom variant="subtitle" fw="500">{discount.name}</TextAtom>
        </View>
        <StatusBadge status={discount.status} />
      </RowView>
      {discount.other && (
        <>
          <Separator mt={hp(10)} mb={hp(10)} />
          <TextAtom variant="caption" style={styles.grayText}>{discount.other}</TextAtom>
        </>
      )}
    </CardAtom>
  );
};


const SalesmanProfileTemplate: React.FC<Props> = ({
  salesman,
  onViewAllReceipts,
  onViewAllDiscounts,
}) => {
  const { images: { components: { phoneColor } } } = Assets;

  const CallButton = (
    <Pressable
      style={styles.callBtn}
      onPress={() => Linking.openURL(`tel:${salesman.phone}`)}
    >
      <SvgView svgFile={phoneColor} width={wp(18)} height={hp(18)} />
      <TextAtom style={styles.purple}>Call</TextAtom>
    </Pressable>
  );

  return (
    <View style={styles.screen}>
      <HeaderWithBack title={salesman.name} rightElement={CallButton} />
      <Separator />

      <ScrollView contentContainerStyle={styles.body} showsVerticalScrollIndicator={false}>
        <ProfileSection name={salesman.name} location={salesman.location} />

        <SpacerAtom height={hp(20)} />

        {salesman.stats.map((stat, index) => (
          <View key={stat.id}>
            <StatItem stat={stat} />
            {index < salesman.stats.length - 1 && <SpacerAtom height={hp(12)} />}
          </View>
        ))}

        <SpacerAtom height={hp(20)} />

        <SectionList
          title="Receipts"
          data={salesman.receipts}
          horizontal
          onViewAll={onViewAllReceipts}
          renderItem={({ item }) => <ReceiptItem receipt={item} />}
          contentContainerStyle={{ gap:wp(10) }}
        />

        <SpacerAtom height={hp(24)} />

        <SectionList
          title="Discounts"
          data={salesman.discounts}
          horizontal
          onViewAll={onViewAllDiscounts}
          renderItem={({ item }) => <DiscountItem discount={item} />}
          contentContainerStyle={{ gap:wp(10) }}
        />

        <SpacerAtom height={hp(40)} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.6)' },
  body: { paddingHorizontal: wp(16), paddingTop: hp(20) },
  profileSection: { alignItems: 'center' },
  avatarLarge: {
    width: wp(80),
    height: wp(80),
    borderRadius: wp(40),
    backgroundColor: AVATAR_BG,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { fontSize: sp(26), fontWeight: '700', color: AVATAR_TEXT },
  salesmanName: { fontSize: sp(22), color: '#111827' },
  locationRow: { flexDirection: 'row', alignItems: 'center' },
  callBtn: { flexDirection: 'row', alignItems: 'center', gap: wp(6) },
  statCard: { paddingVertical: hp(16) },
  statValue: { fontSize: sp(28), color: '#111827' },
  percentBadge: {
    backgroundColor: '#ECFDF3',
    paddingHorizontal: wp(8),
    paddingVertical: hp(4),
    borderRadius: sp(12),
  },
  percentText: { color: '#027A48', fontWeight: '600', fontSize: sp(12) },
  miniCard: { width:wp(310) },
  nameRow: { flexDirection: 'row', alignItems: 'center' },
  miniAvatar: { width: wp(32), height: wp(32), borderRadius: wp(16) },
  dateRow: { flexDirection: 'row', alignItems: 'center' },
  dots: { color: '#667085', fontSize: sp(22) },
  purple: { color: '#7F56D9' },
  grayText: { color: '#9CA3AF' },
});

export default SalesmanProfileTemplate;
