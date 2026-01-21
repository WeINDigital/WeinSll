import { View } from 'react-native';
import React from 'react';
import styles from './styles';


const Separator = (props:any) => {
  const { width, height, color, mt, mb, me, ms } = props;

  return (
    <View
      style={[
        styles.container,
        width && { width },
        height && { height },
        color && { backgroundColor: color },
        mt && { marginTop: mt },
        mb && { marginBottom: mb },
        me && { marginStart: me },
        ms && { marginEnd: ms },
      ]}
    />
  );
};

export default Separator;
