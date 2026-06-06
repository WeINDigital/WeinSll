import { View, Text } from 'react-native'
import React from 'react'
import { SalesHomeTemplate, StatCard } from '@src/components';
import { dashboardData } from '@src/data'

const SalesHome = () => {
  return (
   <SalesHomeTemplate
      dashboardData={dashboardData}
      renderCard={({ item }) => (
        <StatCard
          title={item.title}
          value={item.value}
          percent={item.percent}
        />
      )}
    />
  )
}

export default SalesHome