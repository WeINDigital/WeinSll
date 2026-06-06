import React, { useState } from 'react';
import { View, ScrollView, Pressable, StyleSheet } from 'react-native';
import { HeaderWithBack } from '@src/components/molecules/HeaderWithBack/HeaderWithBack';
import ReasonInput from '@src/components/molecules/ReasonInput/ReasonInput';
import DatePickerField from '@src/components/molecules/DatePickerField/DatePickerField';
import { BottomContainer, ClientSection, SpacerAtom, SvgView, TextAtom } from '@src/components';
import { Assets } from '@src/assets';
import { hp, sp, wp } from '@src/utils/dimensions';

interface Props {
  clients?: string[];
  onSave: (data: { client: string; reasons: string; outcome: string; visitDate: Date }) => void;
}

const AddVisitTemplate: React.FC<Props> = ({ clients = [], onSave }) => {
  const { images: { components: { dropDown } } } = Assets;

  const [selectedClient, setSelectedClient] = useState('');
  const [reasons, setReasons] = useState('');
  const [outcome, setOutcome] = useState('');
  const [visitDate, setVisitDate] = useState<Date>(new Date());

  const handleSave = () => {
    onSave({ client: selectedClient, reasons, outcome, visitDate });
  };

  return (
    <View style={styles.container}>
      <HeaderWithBack title="Add Visit" />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
       <ClientSection data={[]} title="Client" />

        <ReasonInput
          title="Reasons"
          label="Enter a reasons..."
          value={reasons}
          onChangeText={setReasons}
        />

        <ReasonInput
          title="Outcome"
          label="Enter a outcome..."
          value={outcome}
          onChangeText={setOutcome}
        />

        <SpacerAtom height={hp(16)} />
        <DatePickerField
          label="Visit Date"
          value={visitDate}
          onChange={(d) => setVisitDate(d instanceof Date ? d : new Date(d))}
        />

        <SpacerAtom height={hp(120)} />
      </ScrollView>
      <BottomContainer title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  scroll: { paddingHorizontal: sp(16) },
  label: { color: '#374151', fontWeight: '500' },
  selectBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: sp(10),
    padding: sp(14),
  },
  selectPlaceholder: { color: '#9CA3AF' },
});

export default AddVisitTemplate;
