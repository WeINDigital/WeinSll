// components/organisms/HomeMenu/HomeMenu.tsx
import React from 'react';
import { View } from 'react-native';
import { TextAtom } from '../../atoms/Text/Text';
import SvgView from '../../atoms/SvgView/SvgView';
import { Assets } from '../../../assets';
import { hp, wp } from '../../../utils/dimensions';
import { TouchableOpacity } from 'react-native';

const {
  images: {
    components: {
      home,
      users,
      percent,
      shoppingBag,
      creditCard,
      fileText,
      lifeBuoy,
    },
  },
} = Assets;

const menuItems = [
  { title: 'Home', icon: home },
  {
    title: 'Clients',
    icon: users,
    subTitle:
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Discounts',
    icon: percent,
    subTitle:
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Receipts Center',
    icon: fileText,
    subTitle:
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Collections',
    icon: creditCard,
    subTitle:
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Inventory',
    icon: shoppingBag,
    subTitle:
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Visit Forum',
    icon: lifeBuoy,
    subTitle:
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];


const HomeMenu = ({ onClose,onLogOut}: { onClose: () => void,onLogOut :()=>void }) => {
  return (
    <View style={{ flex: 1 }}>
      {menuItems.map((item, i) => (
        <TouchableOpacity
          key={i}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: wp(16),
            paddingVertical: hp(14),
          }}
        >
          <SvgView svgFile={item.icon} />
          <View>
            <TextAtom variant="body" style={{ color: 'black' }}>
              {item.title}
            </TextAtom>
            {item?.subTitle && (
              <TextAtom variant="caption" style={{ color: '#667085',maxWidth:wp(271) }}>
                {item?.subTitle}
              </TextAtom>
            )}
          </View>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={{ marginTop: 'auto', paddingVertical: hp(24) }} onPress={onLogOut}>
        <TextAtom style={{ textAlign: 'center' }}>Log Out</TextAtom>
      </TouchableOpacity>
    </View>
  );
};

export default HomeMenu;
