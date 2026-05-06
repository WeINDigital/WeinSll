import { View, Text } from 'react-native'
import React from 'react'
import { AuthTemplate } from '../../components/templates/AuthTemplate/AuthTemplate'
import { useRoute } from '@react-navigation/native';
import ReviewInvoiceTemplate from '../../components/templates/ReviewInvoiceTemplate/ReviewInvoiceTemplate';
import { amountData, clientNameData, paymentTypeData } from '../../data';

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