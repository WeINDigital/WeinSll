import { View, Text } from 'react-native'
import React, { JSX } from 'react'
import HomeHeader from '@src/components/molecules/HomeHeader/HomeHeader'
import BottomContainer from '@src/components/molecules/BottomContainer/BottomContainer'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '@src/navigation/routes'
import { SectionList } from '@src/components/molecules/SectionList/SectionList'

interface Props {
  dashboardData: any[];
  renderCard: ({ item }: any) => JSX.Element;
}

const DiscountsTemplate: React.FC<Props> = ({ dashboardData, renderCard }) => {
    const navigation = useNavigation();
  return (
    <HomeHeader userName='Discounts' >
        <SectionList
                // title="Dashboard"
                data={dashboardData}
                renderItem={renderCard}
                onViewAll={() => {}}
                
              />
            <BottomContainer title='Request Discount' onPress={()=>navigation.navigate(Routes.CREATE_DISCOUNTS as never)} />
      </HomeHeader>
  )
}

export default DiscountsTemplate