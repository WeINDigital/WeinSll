import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { DiscountsTemplate, ClientDiscountCard } from '@src/components';

const dashboardData = [
    {
        name: 'Client 1',
        status: 'approved',
        discountType: 'Percentage',
        discountValue: '20% off'
    },
    {
        name: 'Client 2',
        status: 'rejected',
        discountType: 'Discounted Products',
        discountValue: 'Pepsi, +2'
    },
    {
        name: 'Client 3',
        status: 'in_progress',
        discountType: 'Percentage',
        discountValue: '10% off'
    },
     {
        name: 'Client 3',
        status: 'in_progress',
        discountType: 'others',
        discountValue: ''
    }
]
const Discounts = () => {
  return (
      <DiscountsTemplate 
      dashboardData={dashboardData}
        renderCard={({ item }) => (
             <ClientDiscountCard item={item}/>
        )}
      />
  )
}

export default Discounts