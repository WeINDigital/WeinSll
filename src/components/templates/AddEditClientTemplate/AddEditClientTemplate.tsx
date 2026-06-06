import React, { useState } from 'react';
import { View, Pressable, StyleSheet, TextInput, Image, ActionSheetIOS, Platform, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { AuthTemplate } from '@src/components/templates/AuthTemplate/AuthTemplate';
import { InputWithIcon } from '@src/components/molecules/InputWithIcon/InputWithIcon';
import RadioItem from '@src/components/atoms/RadioItem/RadioItem';
import { TextAtom } from '@src/components/atoms/Text/Text';
import SvgView from '@src/components/atoms/SvgView/SvgView';
import { SpacerAtom } from '@src/components/atoms/Spacer/Spacer';
import CameraAtom from '@src/components/atoms/CameraAtom/CameraAtom';
import { Assets } from '@src/assets';
import { hp, sp, wp } from '@src/utils/dimensions';

export type Employee = { id: string; name: string; phone: string };

const CLIENT_TYPES = ['Wholesale', 'Wholesale x2', 'Sectoral'];

interface Props {
  mode: 'add' | 'edit';
  name: string;
  onNameChange: (v: string) => void;
  phone: string;
  onPhoneChange: (v: string) => void;
  secondPhone?: string;
  onSecondPhoneChange?: (v: string) => void;
  type: string;
  onTypeChange: (v: string) => void;
  location?: string;
  onLocationChange?: (v: string) => void;
  employees: Employee[];
  onAddEmployee: () => void;
  onRemoveEmployee: (id: string) => void;
  onEmployeeChange: (id: string, field: 'name' | 'phone', value: string) => void;
  onSave: () => void;
  loading?: boolean;
}

const AddEditClientTemplate: React.FC<Props> = ({
  mode,
  name, onNameChange,
  phone, onPhoneChange,
  secondPhone, onSecondPhoneChange,
  type, onTypeChange,
  location, onLocationChange,
  employees,
  onAddEmployee, onRemoveEmployee, onEmployeeChange,
  onSave,
  loading,
}) => {
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  const {
    images: { components: { user, phone: phoneIcon, map, featuredIcon, remove } },
  } = Assets;

  const isAdd = mode === 'add';
  const title = isAdd ? 'Add Client' : 'Edit Client';

  const openCamera = () => {
    launchCamera({ mediaType: 'photo', quality: 0.8 }, res => {
      if (res.assets?.[0]?.uri) setPhotoUri(res.assets[0].uri);
    });
  };

  const openGallery = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 0.8 }, res => {
      if (res.assets?.[0]?.uri) setPhotoUri(res.assets[0].uri);
    });
  };

  const handlePickImage = () => {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        { options: ['Cancel', 'Take Photo', 'Choose from Gallery'], cancelButtonIndex: 0 },
        idx => {
          if (idx === 1) openCamera();
          if (idx === 2) openGallery();
        },
      );
    } else {
      Alert.alert('Add Photo', '', [
        { text: 'Take Photo', onPress: openCamera },
        { text: 'Choose from Gallery', onPress: openGallery },
        { text: 'Cancel', style: 'cancel' },
      ]);
    }
  };

  return (
    <AuthTemplate top title={title} bottomTitle="Save" onPress={onSave} loading={loading}>
      <View style={styles.form}>
        <InputWithIcon
          label="Full Name"
          placeholder="Ex. Youssef Bsheer"
          value={name}
          onChangeText={onNameChange}
          icon={user}
        />

        <SpacerAtom height={hp(16)} />

        <InputWithIcon
          label="Phone Number"
          placeholder="Ex. 01094828532"
          value={phone}
          onChangeText={onPhoneChange}
          icon={phoneIcon}
          keyboardType="phone-pad"
        />

        {isAdd && (
          <>
            <SpacerAtom height={hp(16)} />
            <View>
              <View style={styles.optionalRow}>
                <TextAtom variant="subtitle" fw="500">Second Phone Number</TextAtom>
                <TextAtom variant="caption" style={styles.optional}>(Optional)</TextAtom>
              </View>
              <SpacerAtom height={hp(6)} />
              <InputWithIcon
                placeholder="Ex. 01094828532"
                value={secondPhone}
                onChangeText={onSecondPhoneChange}
                icon={phoneIcon}
                keyboardType="phone-pad"
              />
            </View>
          </>
        )}

        <SpacerAtom height={hp(16)} />

        <TextAtom variant="subtitle" fw="500">Type</TextAtom>
        <SpacerAtom height={hp(8)} />
        {CLIENT_TYPES.map(t => (
          <RadioItem key={t} label={t} selected={type === t} onPress={() => onTypeChange(t)} />
        ))}

        {isAdd && (
          <>
            <SpacerAtom height={hp(8)} />
            <InputWithIcon
              label="Location"
              placeholder="Maadi, Cairo"
              value={location}
              onChangeText={onLocationChange}
              icon={map}
            />

            <SpacerAtom height={hp(16)} />
            <TextAtom variant="subtitle" fw="500">Items</TextAtom>
            <SpacerAtom height={hp(8)} />

            {photoUri ? (
              <Pressable onPress={handlePickImage}>
                <Image source={{ uri: photoUri }} style={styles.preview} />
              </Pressable>
            ) : (
              <CameraAtom onPress={handlePickImage}>
                <SvgView svgFile={featuredIcon} width={wp(40)} height={hp(40)} />
                <View style={styles.cameraText}>
                  <TextAtom variant="subtitle" fw="500" style={styles.tapToAdd}>Tap to add</TextAtom>
                  <TextAtom variant="subtitle"> or choose photo</TextAtom>
                </View>
              </CameraAtom>
            )}
          </>
        )}

        <SpacerAtom height={hp(20)} />

        <View style={styles.employeesHeader}>
          <TextAtom variant="subtitle" fw="500">Employees</TextAtom>
          {isAdd && (
            <Pressable onPress={onAddEmployee}>
              <TextAtom style={styles.addLink}>+ Add new employee</TextAtom>
            </Pressable>
          )}
        </View>

        {employees.length > 0 && (
          <>
            <SpacerAtom height={hp(8)} />
            <View style={styles.tableHeader}>
              <TextAtom variant="caption" style={styles.colName}>Name</TextAtom>
              <TextAtom variant="caption" style={styles.colPhone}>Phone Number</TextAtom>
              <View style={styles.colDelete} />
            </View>
            {employees.map(emp => (
              <View key={emp.id} style={styles.tableRow}>
                <TextInput
                  style={[styles.colName, styles.empInput]}
                  value={emp.name}
                  onChangeText={v => onEmployeeChange(emp.id, 'name', v)}
                  placeholder="Name"
                  placeholderTextColor="#9CA3AF"
                />
                <TextInput
                  style={[styles.colPhone, styles.empInput]}
                  value={emp.phone}
                  onChangeText={v => onEmployeeChange(emp.id, 'phone', v)}
                  placeholder="Phone"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="phone-pad"
                />
                <Pressable style={styles.colDelete} onPress={() => onRemoveEmployee(emp.id)}>
                  <SvgView svgFile={remove} width={wp(20)} height={hp(20)} />
                </Pressable>
              </View>
            ))}
          </>
        )}

        {!isAdd && (
          <Pressable onPress={onAddEmployee} style={{ marginTop: hp(8) }}>
            <TextAtom style={styles.addLink}>+ Add new employee</TextAtom>
          </Pressable>
        )}

        <SpacerAtom height={hp(160)} />
      </View>
    </AuthTemplate>
  );
};

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: wp(16),
    paddingTop: hp(8),
  },
  optionalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(6),
  },
  optional: { color: '#9CA3AF' },
  cameraText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tapToAdd: { color: '#7F56D9' },
  preview: {
    width: '100%',
    height: hp(140),
    borderRadius: sp(8),
    resizeMode: 'cover',
  },
  employeesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addLink: { color: '#7F56D9', fontSize: 14 },
  tableHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    paddingHorizontal: wp(8),
    paddingVertical: hp(8),
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(8),
    paddingVertical: hp(4),
    borderBottomWidth: 1,
    borderColor: '#F2F4F7',
  },
  colName: { flex: 1.2 },
  colPhone: { flex: 1.4 },
  colDelete: { width: wp(28), alignItems: 'center' },
  empInput: {
    height: hp(40),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: sp(6),
    paddingHorizontal: wp(8),
    color: '#111827',
    fontSize: 14,
    marginHorizontal: wp(3),
  },
});

export default AddEditClientTemplate;
