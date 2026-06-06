import { View, Text, TouchableOpacity, Animated } from 'react-native';
import React, { useContext, useRef } from 'react';
import { hp, sp, wp } from '@src/utils/dimensions';
import SvgView from '@src/components/atoms/SvgView/SvgView';
import { Assets } from '@src/assets';
import Separator from '@src/components/atoms/Separator';
import HomeMenu from '@src/components/organisms/HomeMenu/HomeMenu';
import { AuthContext } from '@src/context/AuthContext';

type Props = {
  children: React.ReactNode;
  userName?: string;
  badge?: number;
};
const HomeHeader: React.FC<Props> = ({ children, userName, badge }) => {
  const {
    images: {
      components: { menuIcon,closeIcon },
    },
  } = Assets;

    const { logout} = useContext(AuthContext);

  const [showMenu, setShowMenu] = React.useState(false);
  const translateX = useRef(new Animated.Value(40)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const openMenu = () => {
    setShowMenu(true);

    Animated.parallel([
      Animated.timing(translateX, {
        toValue: 0,
        duration: 220,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeMenu = () => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: 40,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 180,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setShowMenu(false);
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(254, 252, 252,1)' }}>
      <View
        style={{
          height: hp(115),
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'space-between',
          shadowColor: '#000',
          flexDirection: 'row',
          paddingHorizontal: sp(16),
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: sp(8) }}>
          <Text style={{ fontSize: 24, fontWeight: '700', color: '#121212' }}>
            {userName}
          </Text>
          {badge !== undefined && (
            <View style={{ backgroundColor: '#7F56D9', borderRadius: sp(12), paddingHorizontal: sp(8), paddingVertical: sp(2) }}>
              <Text style={{ color: 'white', fontSize: 12, fontWeight: '600' }}>{badge}</Text>
            </View>
          )}
        </View>
        <TouchableOpacity onPress={showMenu ? closeMenu : openMenu}>
          <SvgView svgFile={showMenu ? closeIcon :  menuIcon} />
        </TouchableOpacity>
      </View>
      <Separator />
      <View style={{ flex: 1, paddingHorizontal: wp(16), paddingTop: sp(16) }}>
        {!showMenu && children}

        {showMenu && (
          <Animated.View
            style={{
              flex: 1,
              opacity,
              transform: [{ translateX }],
            }}
          >
            <HomeMenu onClose={closeMenu}  onLogOut={logout}/>
          </Animated.View>
        )}
      </View>
    </View>
  );
};

export default HomeHeader;
