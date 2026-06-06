import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextAtom } from '@src/components/atoms/Text/Text';

type StatusType = 'approved' | 'rejected' | 'in_progress';

interface Props {
  status?: string;
}

const STATUS_STYLES: Record<StatusType, { bg: string; text: string; label: string }> = {
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

const normalize = (s?: string) =>
  (s || '')
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '_');

const StatusBadge: React.FC<Props> = ({ status }) => {
  const key = (normalize(status) as StatusType) || 'in_progress';
  const current = STATUS_STYLES[key] || STATUS_STYLES.in_progress;

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