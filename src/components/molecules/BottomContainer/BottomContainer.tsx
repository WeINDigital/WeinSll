import { View, Text } from 'react-native'
import React from 'react'
import BottomContainerAtoms from '../../atoms/BottomContainerAtoms/BottomContainerAtoms'
import { Button } from '../../atoms/Button/Button'
import { SpacerAtom } from '../../atoms/Spacer/Spacer'
import { hp } from '../../../utils/dimensions'

type Props = {
    title: string;
    loading?: boolean;
    disabled?: boolean;
    onPress?: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'icon';
    bottomTwo?: boolean;
    titleTwo?: string;
    onPressTwo?: () => void;
    loadingTwo?: boolean;
    disabledTwo?: boolean;
}
const BottomContainer: React.FC<Props> = ({ title, loading, disabled, onPress, variant, bottomTwo, titleTwo, onPressTwo, loadingTwo, disabledTwo }) => {
  return (
   <BottomContainerAtoms>
     <Button
            variant={variant}
            title={title}
            loading={loading}
            disabled={disabled}
            onPress={onPress}
          />
          <SpacerAtom height={hp(12)} />
          {bottomTwo && (
            <Button
            variant={'outline'}
            title={titleTwo}
            loading={loadingTwo}
            disabled={disabledTwo}
            onPress={onPressTwo}
          />
          )}
            <SpacerAtom height={20} />
   </BottomContainerAtoms>
  )
}

export default BottomContainer