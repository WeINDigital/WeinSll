import React, { useState } from 'react';
import { View, Image, Pressable, StyleSheet, Linking } from 'react-native';
import { CardAtom } from '@src/components/atoms/Card/Card';
import { TextAtom } from '@src/components/atoms/Text/Text';
import SvgView from '@src/components/atoms/SvgView/SvgView';
import Separator from '@src/components/atoms/Separator';
import { SpacerAtom } from '@src/components/atoms/Spacer/Spacer';
import { Assets } from '@src/assets';
import { hp, sp, wp } from '@src/utils/dimensions';

export type Client = {
  id: string;
  name: string;
  type: string;
  location: string;
  phone: string;
  employees?: { id: string; name: string; phone: string }[];
};

type Props = {
  item: Client;
  onPress?: () => void;
  onRequestDiscount?: () => void;
  onEdit?: () => void;
};

const ClientCard: React.FC<Props> = ({ item, onPress, onRequestDiscount, onEdit }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { images: { components: { clintImage, mapcolor, phoneColor } } } = Assets;

  return (
    <Pressable onPress={onPress}>
      <CardAtom style={{ overflow: 'visible' }}>
        <View style={styles.topRow}>
          <View style={styles.nameRow}>
            <Image source={clintImage} style={styles.avatar} />
            <View>
              <TextAtom variant="subtitle" fw="600">{item.name}</TextAtom>
              <TextAtom variant="caption">{item.type}</TextAtom>
            </View>
          </View>

          <View>
            <Pressable onPress={() => setMenuOpen(v => !v)} hitSlop={8}>
              <TextAtom style={styles.dots}>⋮</TextAtom>
            </Pressable>

            {menuOpen && (
              <View style={styles.dropdown}>
                <Pressable
                  style={styles.dropItem}
                  onPress={() => { setMenuOpen(false); onRequestDiscount?.(); }}
                >
                  <TextAtom variant="subtitle">Request discount</TextAtom>
                </Pressable>
                <Separator />
                <Pressable
                  style={styles.dropItem}
                  onPress={() => { setMenuOpen(false); onEdit?.(); }}
                >
                  <TextAtom variant="subtitle">Edit</TextAtom>
                </Pressable>
              </View>
            )}
          </View>
        </View>

        <SpacerAtom height={hp(12)} />
        <Separator />
        <SpacerAtom height={hp(12)} />

        <View style={styles.bottomRow}>
          <View style={styles.infoItem}>
            <SvgView svgFile={mapcolor} width={wp(16)} height={hp(16)} />
            <TextAtom variant="body" style={styles.purple}>{item.location}</TextAtom>
          </View>
          <Pressable
            style={styles.infoItem}
            onPress={() => Linking.openURL(`tel:${item.phone}`)}
          >
            <SvgView svgFile={phoneColor} width={wp(16)} height={hp(16)} />
            <TextAtom style={styles.purple}>Call</TextAtom>
          </Pressable>
        </View>
      </CardAtom>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
  },
  dots: {
    fontSize: 22,
    color: '#667085',
    lineHeight: 24,
  },
  dropdown: {
    position: 'absolute',
    right: 0,
    top: hp(28),
    backgroundColor: 'white',
    borderRadius: sp(8),
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: sp(8),
    elevation: 10,
    zIndex: 999,
    minWidth: wp(160),
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F2F4F7',
  },
  dropItem: {
    paddingHorizontal: wp(16),
    paddingVertical: hp(14),
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(4),
  },
  purple: {
    color: '#7F56D9',
  },
});

export default ClientCard;
