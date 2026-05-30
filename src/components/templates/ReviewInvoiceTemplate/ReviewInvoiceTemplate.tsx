import React from 'react';
import { ScrollView } from 'react-native';
import ItemsSection from '../../organisms/ItemsSection/ItemsSection';
import ClientName from '../../organisms/ClientName/ClientName';
import Separator from '../../atoms/Separator';

interface Props {
  clientNameData?: { id?: string; value: string; text: string }[];
  paymentTypeData?: { id?: string; value: string; text: string }[];
  amountData?: { id?: string; value: string; text: string }[];
  items?: any[];
}

const ReviewInvoiceTemplate: React.FC<Props> = ({
  clientNameData,
  paymentTypeData,
  amountData,
  items,
}) => {
  return (
    <ScrollView>
      <ClientName item={clientNameData} />
       <ItemsSection items={items} onDelete={()=>{}} notCamera/>
      <Separator mt={16} mb={16} />
      <ClientName item={paymentTypeData} />
      <Separator mt={16} mb={16} />
      <ClientName item={amountData} />
    </ScrollView>
  );
};

export default ReviewInvoiceTemplate;
