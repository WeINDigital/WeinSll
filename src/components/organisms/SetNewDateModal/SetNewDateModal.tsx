import React, { useState, useEffect } from 'react';
import { View, Modal, Pressable, StyleSheet } from 'react-native';
import { hp, wp, sp } from '@src/utils/dimensions';
import { Button, RadioAtom, SpacerAtom, TextAtom } from '@src/components';

interface Props {
  visible: boolean;
  dates: string[];
  description?: string;
  onConfirm: (date: string) => void;
  onCancel: () => void;
}

const SetNewDateModal: React.FC<Props> = ({
  visible,
  dates,
  description = 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  onConfirm,
  onCancel,
}) => {
  const [selected, setSelected] = useState(dates[0]);

  useEffect(() => {
    if (visible) setSelected(dates[0]);
  }, [visible, dates]);

  return (
    <Modal visible={visible} transparent animationType="fade" statusBarTranslucent>
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <TextAtom fw="700" style={styles.title}>Set new date</TextAtom>
          <SpacerAtom height={hp(8)} />
          <TextAtom variant="body" style={styles.desc}>{description}</TextAtom>
          <SpacerAtom height={hp(16)} />

          {dates.map((date, i) => (
            <Pressable
              key={i}
              style={[styles.option, selected === date && i === dates.indexOf(selected) && styles.optionSelected]}
              onPress={() => setSelected(date)}
            >
              <RadioAtom selected={selected === date} onPress={() => setSelected(date)} />
              <TextAtom variant="subtitle" style={styles.optionText}>{date}</TextAtom>
            </Pressable>
          ))}

          <SpacerAtom height={hp(16)} />
          <Button title="Confirm" onPress={() => onConfirm(selected)} />
          <SpacerAtom height={hp(10)} />
          <Button title="Cancel" variant="outline" onPress={onCancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(16, 24, 40, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(20),
  },
  card: {
    backgroundColor: 'white',
    borderRadius: sp(16),
    padding: sp(20),
    width: '100%',
  },
  title: { fontSize: 18, color: '#111827' },
  desc: { color: '#667085', lineHeight: hp(22) },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(12),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: sp(8),
    padding: sp(14),
    marginBottom: hp(10),
  },
  optionSelected: {
    borderColor: '#7F56D9',
    backgroundColor: '#F9F5FF',
  },
  optionText: { flex: 1 },
});

export default SetNewDateModal;
