import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ViewStyle,
} from 'react-native';
import { HeaderWithBack } from '../../molecules/HeaderWithBack/HeaderWithBack';
import Separator from '../../atoms/Separator';
import BottomContainer from '../../molecules/BottomContainer/BottomContainer';
import { SpacerAtom } from '../../atoms/Spacer/Spacer';
import { hp } from '../../../utils/dimensions';

interface Props{
  title?: string;
  onBack?: () => void;
  children: React.ReactNode;
  ViewStyles?: ViewStyle;
  top?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  bottomTitle?: string;
  cancelBottomTitle?: string;
  onCancelPress?: () => void;
  firstBottomTitle?: string;
  firstBottomOnPress?: () => void;
  firstBottomLoading?: boolean;
  firstBottomDisabled?: boolean;
}

export const AuthTemplate: React.FC<Props> = ({
  title,
  onBack,
  children,
  ViewStyles,
  top = false,
  bottomTitle,
  onPress,
  loading,
  disabled,
  cancelBottomTitle,
  onCancelPress,
  firstBottomTitle = '',
  firstBottomOnPress,
  firstBottomLoading,
  firstBottomDisabled,
}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: top ? 'flex-start' : 'center',
        position: 'relative',
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
            <HeaderWithBack title={title} onBack={onBack} />
            <Separator mt={23} mb={16} />

        <ScrollView contentContainerStyle={[styles.container,{paddingBottom:bottomTitle ? hp(120) : 0}]}>
          <View style={{ flex: 1 }}>

            <View style={[styles.content, ViewStyles]}>{children}</View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      {bottomTitle && <BottomContainer title={bottomTitle} onPress={onPress} loading={loading} disabled={disabled} />}
      {cancelBottomTitle && <BottomContainer title={firstBottomTitle} onPress={firstBottomOnPress} loading={firstBottomLoading} disabled={firstBottomDisabled} bottomTwo titleTwo={cancelBottomTitle} onPressTwo={onCancelPress}  />}
    
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    // paddingHorizontal: 20,
    flexGrow: 1,
    
  },
  content: {
    marginTop: 0,
  },
});
