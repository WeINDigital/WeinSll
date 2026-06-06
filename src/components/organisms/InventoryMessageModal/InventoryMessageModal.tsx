import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { Button, SpacerAtom, SvgView, TextAtom } from '@src/components';
import { Assets } from '@src/assets';
import { hp, sp, wp } from '@src/utils/dimensions';

interface Props {
  visible: boolean;
  title?: string;
  description?: string;
  onConfirm: () => void;
}

const InventoryMessageModal: React.FC<Props> = ({
  visible,
  title = 'Lorem ipsum dolor',
  description = 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  onConfirm,
}) => {
  const { images: { components: { featuredIcon } } } = Assets;

  return (
    <Modal visible={visible} transparent animationType="slide" statusBarTranslucent>
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <View style={styles.iconWrapper}>
            <SvgView svgFile={featuredIcon} width={wp(56)} height={wp(56)} />
          </View>
          <SpacerAtom height={hp(16)} />
          <TextAtom fw="700" style={styles.title}>{title}</TextAtom>
          <SpacerAtom height={hp(8)} />
          <TextAtom variant="body" style={styles.desc}>{description}</TextAtom>
          <SpacerAtom height={hp(24)} />
          <Button title="Confirm" onPress={onConfirm} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(16, 24, 40, 0.5)',
    justifyContent: 'flex-end',
  },
  card: {
    backgroundColor: 'white',
    borderTopLeftRadius: sp(24),
    borderTopRightRadius: sp(24),
    padding: sp(24),
    alignItems: 'center',
  },
  iconWrapper: { marginTop: hp(8) },
  title: { fontSize: 20, color: '#111827', textAlign: 'center' },
  desc: { color: '#667085', textAlign: 'center', lineHeight: hp(22) },
});

export default InventoryMessageModal;
