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

interface Props {
  title?: string;
  onBack?: () => void;
  children: React.ReactNode;
  ViewStyles?: ViewStyle;
  top?: boolean;
  onPress?: () => void;
  bottomTitle?: string;
}

export const AuthTemplate: React.FC<Props> = ({
  title,
  onBack,
  children,
  ViewStyles,
  top = false,
  bottomTitle,
  onPress,
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
        <ScrollView contentContainerStyle={styles.container}>
          <View style={{ flex: 1 }}>
            <HeaderWithBack title={title} onBack={onBack} />
            <Separator mt={23} mb={16} />

            <View style={[styles.content, ViewStyles]}>{children}</View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      {bottomTitle && <BottomContainer title={bottomTitle} onPress={onPress} />}
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
