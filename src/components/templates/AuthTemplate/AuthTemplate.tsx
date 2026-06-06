import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ViewStyle,
} from 'react-native';
import { HeaderWithBack } from '@src/components/molecules/HeaderWithBack/HeaderWithBack';
import Separator from '@src/components/atoms/Separator';
import BottomContainer from '@src/components/molecules/BottomContainer/BottomContainer';
import { hp } from '@src/utils/dimensions';

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
  status?: 'approved' | 'rejected' | 'in_progress';
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
  status
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
            <HeaderWithBack title={title} onBack={onBack} status={status} />
            <Separator mt={23} mb={16} />

        <ScrollView contentContainerStyle={[styles.container,{paddingBottom:bottomTitle ? hp(120) : 0}]}>
          <View style={{ flex: 1 }}>

            <View style={[styles.content, ViewStyles]}>{React.Children.toArray(children)}</View>
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
