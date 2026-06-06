import React, { useState } from 'react';
import { Modal, View, Pressable, FlatList, StyleSheet } from 'react-native';
import SheetContainer from '../../molecules/SheetContainer/SheetContainer';
import { TextAtom } from '../../atoms/Text/Text';
import { hp, sp, wp } from '../../../utils/dimensions';

export type SelectableItem = {
  id: string;
  name: string;
  price: number | string;
  Discount?: number;
};

interface Props {
  data: SelectableItem[];
  selectedItems: SelectableItem[];
  setSelectedItems: (items: SelectableItem[]) => void;
  title?: string;
}

const MultiSelectItemSheet: React.FC<Props> = ({
  data,
  selectedItems,
  setSelectedItems,
  title = 'Items',
}) => {
  const [visible, setVisible] = useState(false);
  const [tempSelected, setTempSelected] = useState<SelectableItem[]>([]);

  const open = () => {
    setTempSelected(selectedItems);
    setVisible(true);
  };

  const toggle = (item: SelectableItem) => {
    const exists = tempSelected.some(i => i.id === item.id);
    setTempSelected(
      exists ? tempSelected.filter(i => i.id !== item.id) : [...tempSelected, item],
    );
  };

  const onDone = () => {
    setSelectedItems(tempSelected);
    setVisible(false);
  };

  const label =
    selectedItems.length > 0
      ? `${selectedItems.length} item${selectedItems.length > 1 ? 's' : ''} selected`
      : `Select ${title}`;

  return (
    <>
      <SheetContainer Text={title} label={label} onPress={open} isOpen={visible} />

      <Modal visible={visible} transparent animationType="slide">
        <Pressable style={styles.overlay} onPress={() => setVisible(false)} />
        <View style={styles.sheet}>
          <TextAtom fw="600" style={styles.sheetTitle}>
            Select {title}
          </TextAtom>

          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              const selected = tempSelected.some(i => i.id === item.id);
              return (
                <Pressable style={styles.row} onPress={() => toggle(item)}>
                  <View style={[styles.checkbox, selected && styles.checkboxSelected]}>
                    {selected && <TextAtom style={styles.check}>✓</TextAtom>}
                  </View>
                  <TextAtom variant="subtitle" style={{ flex: 1 }}>
                    {item.name}
                  </TextAtom>
                  <TextAtom variant="caption">{item.price}</TextAtom>
                </Pressable>
              );
            }}
          />

          <Pressable style={styles.doneBtn} onPress={onDone}>
            <TextAtom style={styles.doneTxt}>Done</TextAtom>
          </Pressable>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.3)' },
  sheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: sp(16),
    borderTopRightRadius: sp(16),
    padding: wp(16),
    maxHeight: hp(450),
  },
  sheetTitle: { marginBottom: hp(12) },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(14),
    borderBottomWidth: 1,
    borderColor: '#F2F4F7',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: sp(4),
    borderWidth: 1.5,
    borderColor: '#D0D5DD',
    marginRight: wp(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxSelected: { backgroundColor: '#7F56D9', borderColor: '#7F56D9' },
  check: { color: 'white', fontSize: 12 },
  doneBtn: {
    backgroundColor: '#7F56D9',
    paddingVertical: hp(14),
    borderRadius: sp(8),
    alignItems: 'center',
    marginTop: hp(12),
  },
  doneTxt: { color: 'white', fontWeight: '600' },
});

export default MultiSelectItemSheet;
