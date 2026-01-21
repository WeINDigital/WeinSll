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

interface Props {
  title?: string;
  onBack?: () => void;
  children: React.ReactNode;
  ViewStyles?:ViewStyle
}

export const AuthTemplate: React.FC<Props> = ({
  title,
  onBack,
  children,
  ViewStyles,
}) => {
  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <HeaderWithBack title={title} onBack={onBack} />
        <View style={[styles.content,ViewStyles]}>{children}</View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  content: {
    marginTop: 0,
  },
});
