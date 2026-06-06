import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Assets } from '@src/assets';
import { hp, wp } from '@src/utils/dimensions';
import { Button, CardAtom, Separator, SpacerAtom, SvgView, TextAtom } from '@src/components';

export type Employee = { name: string; phone: string };

export type InvoiceItem = {
  id: string;
  clientName: string;
  paymentType: string;
  date: string;
  amount: number;
  collectionDate?: string;
};

export type VisitItem = {
  id: string;
  clientName: string;
  location: string;
  date: string;
};

export type ClientDetail = {
  name: string;
  type: string;
  location: string;
  phone: string;
  employees: Employee[];
  invoices: InvoiceItem[];
  visits: VisitItem[];
};

interface Props {
  client: ClientDetail;
  onRequestDiscount: () => void;
  onEdit: () => void;
}

const ClientDetailsTemplate: React.FC<Props> = ({ client, onRequestDiscount, onEdit }) => {
  const navigation = useNavigation();
  const {
    images: { components: { backIcon, mapcolor, phoneColor, clintImage, calendar } },
  } = Assets;

  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Pressable onPress={() => navigation.goBack()} hitSlop={8}>
            <SvgView svgFile={backIcon} width={wp(20)} height={hp(20)} />
          </Pressable>
          <TextAtom variant="subtitle" fw="600" style={styles.headerTitle}>
            {client.name}
          </TextAtom>
        </View>
        <Pressable
          style={styles.callBtn}
          onPress={() => Linking.openURL(`tel:${client.phone}`)}
        >
          <SvgView svgFile={phoneColor} width={wp(18)} height={hp(18)} />
          <TextAtom style={styles.callText}>Call</TextAtom>
        </Pressable>
      </View>

      <Separator />

      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.profileSection}>
          <Image source={clintImage} style={styles.avatar} />
          <SpacerAtom height={hp(12)} />
          <TextAtom fw="700" style={styles.clientName}>{client.name}</TextAtom>
          <SpacerAtom height={hp(4)} />
          <View style={styles.metaRow}>
            <TextAtom variant="subtitle">{client.type}</TextAtom>
            <SpacerAtom width={wp(8)} />
            <SvgView svgFile={mapcolor} width={wp(14)} height={hp(14)} />
            <SpacerAtom width={wp(4)} />
            <TextAtom variant="subtitle" style={styles.purple}>{client.location}</TextAtom>
          </View>
          <SpacerAtom height={hp(16)} />
          <View style={styles.actionRow}>
            <View style={{ flex: 1, marginRight: wp(8) }}>
              <Button title="Request Discount" onPress={onRequestDiscount} />
            </View>
            <View style={{ flex: 0.6 }}>
              <Button title="Edit" variant="outline" onPress={onEdit} />
            </View>
          </View>
        </View>

        <Separator mt={hp(8)} mb={hp(16)} />

        {/* Employees */}
        <View style={styles.section}>
          <TextAtom fw="600">Employees</TextAtom>
          <SpacerAtom height={hp(10)} />
          <View style={styles.tableHeader}>
            <TextAtom variant="caption" style={{ flex: 1 }}>Name</TextAtom>
            <TextAtom variant="caption" style={{ flex: 1 }}>Phone Number</TextAtom>
          </View>
          {client?.employees?.map((emp, i) => (
            <View key={i} style={styles.tableRow}>
              <TextAtom variant="subtitle" style={{ flex: 1 }}>{emp.name}</TextAtom>
              <TextAtom variant="subtitle" style={{ flex: 1, color: '#9CA3AF' }}>{emp.phone}</TextAtom>
            </View>
          ))}
        </View>

        <SpacerAtom height={hp(16)} />

        {/* Invoices */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <TextAtom fw="600">Invoices</TextAtom>
            <Pressable>
              <TextAtom style={styles.purple}>View All</TextAtom>
            </Pressable>
          </View>
          <SpacerAtom height={hp(10)} />
          {client?.invoices?.map(inv => (
            <CardAtom key={inv.id} style={styles.miniCard}>
              <View style={styles.invoiceTop}>
                <View style={styles.nameRow}>
                  <Image source={clintImage} style={styles.miniAvatar} />
                  <View style={{ marginLeft: wp(8) }}>
                    <TextAtom variant="subtitle" fw="500">{inv.clientName}</TextAtom>
                    <TextAtom variant="caption">{inv.paymentType}</TextAtom>
                  </View>
                </View>
                <TextAtom style={styles.dots}>⋮</TextAtom>
              </View>
              <Separator mt={hp(8)} mb={hp(8)} />
              <View style={styles.invoiceBottom}>
                <View style={styles.dateRow}>
                  <SvgView svgFile={calendar} width={wp(14)} height={hp(14)} />
                  <TextAtom variant="caption" style={{ marginLeft: wp(4) }}>{inv.date}</TextAtom>
                </View>
                <TextAtom fw="700" style={styles.amount}>{inv.amount} EGP</TextAtom>
              </View>
              {inv.collectionDate && (
                <View style={[styles.invoiceBottom, { marginTop: hp(8) }]}>
                  <View>
                    <TextAtom variant="caption" style={{ color: '#9CA3AF' }}>Collection date</TextAtom>
                    <View style={styles.dateRow}>
                      <SvgView svgFile={calendar} width={wp(14)} height={hp(14)} />
                      <TextAtom variant="caption" style={{ marginLeft: wp(4) }}>{inv.collectionDate}</TextAtom>
                    </View>
                  </View>
                  <Pressable>
                    <TextAtom style={styles.purple}>Collection</TextAtom>
                  </Pressable>
                </View>
              )}
            </CardAtom>
          ))}
        </View>

        <SpacerAtom height={hp(16)} />

        {/* Visits */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <TextAtom fw="600">Visits</TextAtom>
            <Pressable>
              <TextAtom style={styles.purple}>View All</TextAtom>
            </Pressable>
          </View>
          <SpacerAtom height={hp(10)} />
          {client?.visits?.map(visit => (
            <CardAtom key={visit.id} style={styles.miniCard}>
              <View style={styles.nameRow}>
                <Image source={clintImage} style={styles.miniAvatar} />
                <View style={{ marginLeft: wp(8) }}>
                  <TextAtom variant="subtitle" fw="500">{visit.clientName}</TextAtom>
                  <TextAtom variant="caption">{visit.location}</TextAtom>
                </View>
              </View>
              <Separator mt={hp(8)} mb={hp(8)} />
              <View style={styles.dateRow}>
                <SvgView svgFile={calendar} width={wp(14)} height={hp(14)} />
                <TextAtom variant="caption" style={{ marginLeft: wp(4) }}>{visit.date}</TextAtom>
              </View>
            </CardAtom>
          ))}
        </View>

        <SpacerAtom height={hp(40)} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: 'white' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(16),
    paddingTop: hp(52),
    paddingBottom: hp(12),
    backgroundColor: 'white',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(12),
  },
  headerTitle: { fontSize: 16 },
  callBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(6),
  },
  callText: { color: '#7F56D9' },
  body: { paddingHorizontal: wp(16) },
  profileSection: { alignItems: 'center', paddingTop: hp(20) },
  avatar: { width: wp(90), height: wp(90), borderRadius: wp(45) },
  clientName: { fontSize: 22, color: '#111827' },
  metaRow: { flexDirection: 'row', alignItems: 'center' },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  section: { paddingHorizontal: wp(4) },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#F9FAFB',
    paddingHorizontal: wp(8),
    paddingVertical: hp(8),
  },
  tableRow: {
    flexDirection: 'row',
    paddingHorizontal: wp(8),
    paddingVertical: hp(12),
    borderBottomWidth: 1,
    borderColor: '#F9FAFB',
  },
  miniCard: { marginBottom: hp(10) },
  invoiceTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  nameRow: { flexDirection: 'row', alignItems: 'center' },
  miniAvatar: { width: wp(32), height: wp(32), borderRadius: wp(16) },
  dots: { color: '#667085', fontSize: 22 },
  invoiceBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateRow: { flexDirection: 'row', alignItems: 'center' },
  amount: { color: '#111827' },
  purple: { color: '#7F56D9' },
});

export default ClientDetailsTemplate;
