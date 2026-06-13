import React from 'react';
import { FlatList } from 'react-native';
import { AuthTemplate } from '@src/components/templates/AuthTemplate/AuthTemplate';
import { InputWithIcon } from '@src/components/molecules/InputWithIcon/InputWithIcon';
import ReceiptCard, { ReceiptItem } from '@src/components/molecules/ReceiptCard/ReceiptCard';
import { SpacerAtom } from '@src/components/atoms/Spacer/Spacer';
import { Assets } from '@src/assets';
import { hp, wp } from '@src/utils/dimensions';

interface Props {
  data: ReceiptItem[];
  searchQuery: string;
  onSearchChange: (text: string) => void;
  onPress: (item: ReceiptItem) => void;
  onApprove: (id: string) => void;
  onDisapprove: (id: string) => void;
}

const SalesTransactionsTemplate: React.FC<Props> = ({
  data,
  searchQuery,
  onSearchChange,
  onPress,
  onApprove,
  onDisapprove,
}) => {
  const { images: { components: { search, filters } } } = Assets;

  return (
    <AuthTemplate top title="Sales Transactions" 
        //  firstBottomTitle="Confirm & Share"
        //  cancelBottomTitle="Cancel"
        //  onCancelPress={() => {}}
        //  onPress={()=> {}}
        ViewStyles={{ paddingHorizontal: wp(16) }}
    >
      <SpacerAtom height={hp(4)} />
      <InputWithIcon
        icon={search}
        rightIcon={filters}
        placeholder="Search by name..."
        value={searchQuery}
        onChangeText={onSearchChange}
      />
      <SpacerAtom height={hp(16)} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ReceiptCard
            item={item}
            onPress={() => onPress(item)}
            onApprove={onApprove}
            onDisapprove={onDisapprove}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp(40) }}
      />
    </AuthTemplate>
  );
};

export default SalesTransactionsTemplate;
