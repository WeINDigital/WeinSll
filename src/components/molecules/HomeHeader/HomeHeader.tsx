import { View, Text, TouchableOpacity, Animated } from 'react-native';
import React, { useContext, useRef } from 'react';
import { hp, sp, wp } from '../../../utils/dimensions';
import SvgView from '../../atoms/SvgView/SvgView';
import { Assets } from '../../../assets';
import { SpacerAtom } from '../../atoms/Spacer/Spacer';
import Separator from '../../atoms/Separator';
import HomeMenu from '../../organisms/HomeMenu/HomeMenu';
import { AuthContext } from '../../../context/AuthContext';

type Props = {
  children: React.ReactNode;
  userName?: string;
};
const HomeHeader: React.FC<Props> = ({ children, userName }) => {
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
        <Text style={{ fontSize: 24, fontWeight: '700', color: '#121212' }}>
          {userName}
        </Text>
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
