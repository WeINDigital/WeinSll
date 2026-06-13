import React from 'react';
import { useNavigation } from '@react-navigation/native';
import SupervisorHomeTemplate from '@src/components/templates/SupervisorHomeTemplate/SupervisorHomeTemplate';
import ClientDiscountCard from '@src/components/molecules/ClientDiscountCard/ClientDiscountCard';
import { Routes } from '@src/navigation/routes';

const MOCK_DISCOUNTS = [
  {
    id: '1',
    name: 'Youssef Bsheer',
    clientType: 'Wholesale',
    status: 'in_progress',
    date: '12/12/2021',
    salesman: 'Ahmed Samir',
    discountType: 'Discount Amount',
    discountValue: '941 EGP',
  },
  {
    id: '2',
    name: 'Youssef Bsheer',
    clientType: 'Wholesale',
    status: 'in_progress',
    date: '12/12/2021',
    salesman: 'Ahmed Samir',
    discountType: 'Discount Amount',
    discountValue: '941 EGP',
  },
];

const SupervisorHome = () => {
  const navigation = useNavigation<any>();

  return (
    <SupervisorHomeTemplate
      userName="Youssef Bsheer"
      dateRange="Jan 6, 2022 – Jan 13, 2022"
      salesValue="2,000"
      salesPercent="100%"
      discounts={MOCK_DISCOUNTS}
      renderDiscountCard={({ item }) => <ClientDiscountCard item={item}  onPress={() =>
        navigation.navigate(Routes.SALES_TRANSACTION_DETAILS,{
          transaction: {
            invoiceNumber: '#121545',
            clientName: item.name,
            salesmanName: item.salesman,
            items: [
              { qty: 1, name: 'Chipsy', price: 132 },
              { qty: 1, name: 'Pepsi', price: 132 },
            ],
            paymentType: 'Cash',
            discount: 32,
            totalAmount: 941,
            received: 100,
            remaining: 841,
            collectionDate: 'Jan 6, 2022',
          },
        } as any)
        // })
      }  />}
      onViewReport={() => navigation.navigate(Routes.SALES_TRANSACTIONS)}
      onViewAllDiscounts={() => navigation.navigate(Routes.DISCOUNTS)}
    />
  );
};

export default SupervisorHome;
