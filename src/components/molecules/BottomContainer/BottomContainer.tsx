import { View, Text } from 'react-native'
import React from 'react'
import BottomContainerAtoms from '../../atoms/BottomContainerAtoms/BottomContainerAtoms'
import { Button } from '../../atoms/Button/Button'

type Props = {
    title: string;
    loading?: boolean;
    disabled?: boolean;
    onPress?: () => void;
}
const BottomContainer: React.FC<Props> = ({ title, loading, disabled, onPress }) => {
  return (
   <BottomContainerAtoms>
     <Button
     
            title={title}
            loading={loading}
            disabled={disabled}
            onPress={onPress}
          />
   </BottomContainerAtoms>
  )
}

export default BottomContainer