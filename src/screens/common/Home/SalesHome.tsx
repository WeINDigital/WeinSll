import { View, Text } from 'react-native'
import React from 'react'
import { SalesHomeTemplate } from '../../../components/templates/SalesHomeTemplate/SalesHomeTemplate'
import { dashboardData } from '../../../data'
import { StatCard } from '../../../components/molecules/StatCard/StatCard'

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