import { View } from 'react-native'
import React from 'react'
import SelectClientSheet from '@src/components/organisms/SelectClientSheet/SelectClientSheet'
import { wp } from '@src/utils/dimensions';

interface Props {
  data?: any[];
  title?: string;
  onSelect?: (clientId: string) => void;
}

const ClientSection: React.FC<Props> = ({ data = [], title, onSelect }) => {
  const [client, setClient] = React.useState('');

  return (
    <View style={{ flex: 1, paddingHorizontal: title ? 0 : wp(16) }}>
      <SelectClientSheet
        Text={title ?? 'Client'}
        value={client}
        onSelect={(value) => {
          setClient(value);
          onSelect?.(value);
        }}
        DATA={data}
      />
    </View>
  );
};

export default ClientSection;