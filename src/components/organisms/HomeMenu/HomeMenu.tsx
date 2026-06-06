// components/organisms/HomeMenu/HomeMenu.tsx
import React from 'react';
import { View } from 'react-native';
import { TextAtom } from '@src/components/atoms/Text/Text';
import SvgView from '@src/components/atoms/SvgView/SvgView';
import { Assets } from '@src/assets';
import { hp, wp } from '@src/utils/dimensions';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '@src/navigation/routes';

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
  { title: 'Home', icon: home,screenName:Routes.HOME },
  {
    title: 'Clients',
    icon: users,
    subTitle:
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    screenName:Routes.CLIENTS,
  },
  {
    title: 'Discounts',
    icon: percent,
    subTitle:
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    screenName:Routes.DISCOUNTS,
  },
  {
    title: 'Receipts Center',
    icon: fileText,
    subTitle:
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    screenName:Routes.RECEIPTS_CENTER,
  },
  {
    title: 'Collections',
    icon: creditCard,
    subTitle:
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    screenName:Routes.COLLECTIONS,
  },
  {
    title: 'Inventory',
    icon: shoppingBag,
    subTitle:
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    screenName:Routes.INVENTORY,
  },
  {
    title: 'Visit Forum',
    icon: lifeBuoy,
    subTitle:
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    screenName:Routes.VISIT_FORUM,
  },
];

const HomeMenu = ({ onClose,onLogOut}: { onClose: () => void,onLogOut :()=>void }) => {
  const navigation = useNavigation<any>();

 const handleNavigate = (screen: string) => {
    navigation.navigate(screen);
    onClose();
  };

  return (
    <View style={{ flex: 1 }}>
      {menuItems.map((item, i) => (
        <TouchableOpacity
          key={item.title ?? i}
          onPress={() => handleNavigate(item.screenName ? item.screenName : '')}
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
