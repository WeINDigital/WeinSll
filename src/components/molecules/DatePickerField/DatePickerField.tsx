import React, { useState } from 'react';
import { View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextAtom } from '../../atoms/Text/Text';
import { SpacerAtom } from '../../atoms/Spacer/Spacer';
import DateInputAtom from '../../atoms/DateInputAtom/DateInputAtom';
import { hp } from '../../../utils/dimensions';

type Props = {
  label: string;
  value?: Date | string;
  onChange?: (date: Date | string) => void;
};

const DatePickerField: React.FC<Props> = ({
  label,
  value,
  onChange,
}) => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <TextAtom>{label}</TextAtom>
      <SpacerAtom height={hp(6)} />

      <DateInputAtom
        value={value}
        onPress={() => setShow(true)}
      />

      {show && (
        <DateTimePicker
          value={value instanceof Date ? value : new Date(value ?? Date.now())}
          mode="date"
          display="default"
          minimumDate={new Date()}
          onChange={(event, selectedDate) => {
            setShow(false);
            if (selectedDate) onChange?.(selectedDate);
          }}
        />
      )}
    </View>
  );
};

export default DatePickerField;
