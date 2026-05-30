import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextAtom } from '../Text/Text';

type StatusType = 'approved' | 'rejected' | 'in_progress';

interface Props {
  status: StatusType;
}

const STATUS_STYLES = {
  approved: {
    bg: '#ECFDF3',
    text: '#027A48',
    label: 'Approved',
  },
  rejected: {
    bg: '#FEF3F2',
    text: '#B42318',
    label: 'Rejected',
  },
  in_progress: {
    bg: '#FFFAEB',
    text: '#F79009',
    label: 'In Progress',
  },
};

const StatusBadge: React.FC<Props> = ({ status }) => {
  const current = STATUS_STYLES[status];

  return (
    <View style={[styles.container, { backgroundColor: current.bg }]}>
      <TextAtom style={[styles.text, { color: current.text }]}>
        {current.label}
      </TextAtom>
    </View>
  );
};

export default StatusBadge;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 14,
  },
});