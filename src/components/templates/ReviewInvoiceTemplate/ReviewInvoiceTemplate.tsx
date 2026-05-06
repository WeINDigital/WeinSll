import React from 'react';
import { ScrollView } from 'react-native';
import ItemsSection from '../../organisms/ItemsSection/ItemsSection';
import ClientName from '../../organisms/ClientName/ClientName';
import Separator from '../../atoms/Separator';

const ReviewInvoiceTemplate = ({
  clientNameData,
  paymentTypeData,
  amountData,
  items,
}: {
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
