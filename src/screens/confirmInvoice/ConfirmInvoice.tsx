import { View, Text } from 'react-native'
import React from 'react'
import { AuthTemplate, ReviewInvoiceTemplate } from '@src/components';
import { useRoute } from '@react-navigation/native';
import { amountData, clientNameData, paymentTypeData } from '@src/data';

const ConfirmInvoice = () => {
     const route = useRoute<any>();

  const {
    items,
  } = route.params;

  return (
    <AuthTemplate
         top
         title='Confirm Invoice'
         firstBottomTitle="Confirm & Share"
         cancelBottomTitle="Cancel"
         onCancelPress={() => {}}
         onPress={()=> {}}
        //  disabled={items.length === 0 || totalAmount === '' }
        //  loading={false}
       >
      <ReviewInvoiceTemplate
        items={items}
        clientNameData={clientNameData}
        paymentTypeData={paymentTypeData}
        amountData={amountData}
      />
       </AuthTemplate>
  )
}

export default ConfirmInvoice