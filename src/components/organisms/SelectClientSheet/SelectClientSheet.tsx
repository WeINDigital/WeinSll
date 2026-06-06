import React, { useState } from 'react';
import {
  Modal,
  View,
  Pressable,
  StyleSheet,
  FlatList,
} from 'react-native';
import SheetContainer from '@src/components/molecules/SheetContainer/SheetContainer';
import { TextAtom } from '@src/components/atoms/Text/Text';
import { hp, wp } from '@src/utils/dimensions';

const DATA = [
  { id: '1', name: 'Client One' },
  { id: '2', name: 'Client Two' },
  { id: '3', name: 'Client Three' },
];

type Props = {
  onSelect: (client: string) => void;
    value?: string;
    Text:string
    DATA?:{id:string,name:string}[]
};


const SelectClientSheet: React.FC<Props> = ({onSelect,value,Text,DATA:customData }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <SheetContainer
        Text={Text}
        label={value || `Select ${Text}`}
        onPress={() => setVisible(true)}
        isOpen={visible}
      />

      <Modal
        visible={visible}
        transparent
        animationType="slide"
      >
        <Pressable
          style={styles.overlay}
          onPress={() => setVisible(false)}
        />

        <View style={styles.sheet}>
          <TextAtom fw="600" style={styles.title}>
            Select Client
          </TextAtom>

          <FlatList
            data={customData || DATA}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Pressable
                style={styles.item}
                onPress={() => {
                 onSelect(item.name);
                  setVisible(false);
                }}
              >
                <TextAtom>{item.name}</TextAtom>
              </Pressable>
            )}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  sheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: wp(16),
    maxHeight: hp(400),
  },

  title: {
    marginBottom: hp(12),
  },

  item: {
    paddingVertical: hp(14),
    borderBottomWidth: 1,
    borderColor: '#F2F4F7',
  },
});


export default SelectClientSheet;
