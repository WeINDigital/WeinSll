import React, { useEffect, useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCodeScanner,
} from 'react-native-vision-camera';
import { useNavigation } from '@react-navigation/native';
import { TextAtom } from '../../components/atoms/Text/Text';
import { Routes } from '../../navigation/routes';

const CameraScreen = () => {
  const device = useCameraDevice('back');
  const navigation = useNavigation<any>();

  const [hasPermission, setHasPermission] = useState(false);
  const [scanEnabled, setScanEnabled] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    Camera.requestCameraPermission().then(status => {
      setHasPermission(status === 'granted');
    });
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13', 'ean-8', 'code-128'],
    onCodeScanned: codes => {
      if (!scanEnabled || scanned || !codes.length) return;

      setScanned(true);

      const value = codes[0].value;

      navigation.goBack();
      navigation.navigate({
        name: Routes.CREATE_INVOICE,
        params: { barcode: value },
        merge: true,
      });
    },
  });

  if (!device || !hasPermission) return null;

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        device={device}
        isActive
        codeScanner={codeScanner}
      />

      <View style={styles.scanWrap}>
        <Pressable
          style={styles.scanBtn}
          onPress={() => {
            setScanned(false);
            setScanEnabled(true);
          }}
        >
          <TextAtom style={{ color: '#fff' }}>
            Scan Barcode
          </TextAtom>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scanWrap: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  scanBtn: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: '#000',
  },
});


export default CameraScreen;
