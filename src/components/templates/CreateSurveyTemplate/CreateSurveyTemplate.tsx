import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Pressable,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  Platform,
  ActionSheetIOS,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { HeaderWithBack } from '@src/components/molecules/HeaderWithBack/HeaderWithBack';
import {
  BottomContainer,
  SpacerAtom,
  TextAtom,
  RadioItem,
  InputWithIcon,
  Separator,
  SvgView,
} from '@src/components';
import { Assets } from '@src/assets';
import { hp, sp, wp } from '@src/utils/dimensions';

interface TitleQuestion {
  id: string;
  title: string;
  question: string;
}

interface Props {
  onSave?: (data: {
    surveyTitle: string;
    type: string;
    location: string;
    questions: string[];
    images: string[];
    titleQuestions: TitleQuestion[];
  }) => void;
  onSaveDraft?: () => void;
}

const SURVEY_TYPES = ['Internal', 'External'];

const CreateSurveyTemplate: React.FC<Props> = ({ onSave, onSaveDraft }) => {
  const {
    images: { components: { mapcolor, remove } },
  } = Assets;

  const [surveyTitle, setSurveyTitle] = useState('');
  const [selectedType, setSelectedType] = useState('Internal');
  const [location, setLocation] = useState('');
  const [questions, setQuestions] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [titleQuestions, setTitleQuestions] = useState<TitleQuestion[]>([]);

  const addQuestion = () => setQuestions(prev => [...prev, '']);

  const updateQuestion = (index: number, value: string) =>
    setQuestions(prev => prev.map((q, i) => (i === index ? value : q)));

  const removeQuestion = (index: number) =>
    setQuestions(prev => prev.filter((_, i) => i !== index));

  const addTitleQuestion = () =>
    setTitleQuestions(prev => [
      ...prev,
      { id: Date.now().toString(), title: '', question: '' },
    ]);

  const updateTitleQuestion = (id: string, field: 'title' | 'question', value: string) =>
    setTitleQuestions(prev =>
      prev.map(tq => (tq.id === id ? { ...tq, [field]: value } : tq)),
    );

  const removeTitleQuestion = (id: string) =>
    setTitleQuestions(prev => prev.filter(tq => tq.id !== id));

  const openCamera = () => {
    launchCamera({ mediaType: 'photo', quality: 0.8 }, res => {
      if (res.assets?.[0]?.uri) setImages(prev => [...prev, res.assets![0].uri!]);
    });
  };

  const openGallery = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 0.8 }, res => {
      if (res.assets?.[0]?.uri) setImages(prev => [...prev, res.assets![0].uri!]);
    });
  };

  const handleAddImage = () => {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        { options: ['Cancel', 'Take Photo', 'Choose from Gallery'], cancelButtonIndex: 0 },
        idx => {
          if (idx === 1) openCamera();
          if (idx === 2) openGallery();
        },
      );
    } else {
      Alert.alert('Add Image', '', [
        { text: 'Take Photo', onPress: openCamera },
        { text: 'Choose from Gallery', onPress: openGallery },
        { text: 'Cancel', style: 'cancel' },
      ]);
    }
  };

  const removeImage = (index: number) =>
    setImages(prev => prev.filter((_, i) => i !== index));

  const isValid = surveyTitle.trim() !== '' && location.trim() !== '' && selectedType !== '';

  const handleSave = () => {
    onSave?.({ surveyTitle, type: selectedType, location, questions, images, titleQuestions });
  };

  return (
    <View style={styles.container}>
      <HeaderWithBack title="Create Survey" />
      <Separator />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <SpacerAtom height={hp(16)} />

        <InputWithIcon
          label="Survey Title"
          placeholder="Ex. Let's expand"
          value={surveyTitle}
          onChangeText={setSurveyTitle}
        />

        <SpacerAtom height={hp(16)} />

        <TextAtom variant="subtitle" fw="500">Type</TextAtom>
        <SpacerAtom height={hp(8)} />
        {SURVEY_TYPES.map(type => (
          <RadioItem
            key={type}
            label={type}
            selected={selectedType === type}
            onPress={() => setSelectedType(type)}
          />
        ))}

        <SpacerAtom height={hp(16)} />

        <InputWithIcon
          label="Location"
          placeholder="Enter location"
          icon={mapcolor}
          value={location}
          onChangeText={setLocation}
        />

        {/* Dynamic Questions */}
        {questions.map((q, index) => (
          <View key={index} style={styles.dynamicRow}>
            <SpacerAtom height={hp(12)} />
            <View style={styles.inputWithRemove}>
              <View style={styles.inputFlex}>
                <InputWithIcon
                  label={`Question ${index + 1}`}
                  placeholder="Enter question..."
                  value={q}
                  onChangeText={v => updateQuestion(index, v)}
                />
              </View>
              <Pressable onPress={() => removeQuestion(index)} style={styles.removeBtn}>
                <SvgView svgFile={remove} width={wp(20)} height={hp(20)} />
              </Pressable>
            </View>
          </View>
        ))}

        {/* Dynamic Images */}
        {images.map((uri, index) => (
          <View key={index} style={styles.imageWrapper}>
            <SpacerAtom height={hp(12)} />
            <Image source={{ uri }} style={styles.imagePreview} />
            <Pressable onPress={() => removeImage(index)} style={styles.imageRemoveBtn}>
              <SvgView svgFile={remove} width={wp(18)} height={hp(18)} />
            </Pressable>
          </View>
        ))}

        {/* Dynamic Title + Question pairs */}
        {titleQuestions.map(tq => (
          <View key={tq.id} style={styles.dynamicRow}>
            <SpacerAtom height={hp(12)} />
            <View style={styles.titleQuestionCard}>
              <View style={styles.cardHeader}>
                <TextAtom variant="subtitle" fw="500">Title & Question</TextAtom>
                <Pressable onPress={() => removeTitleQuestion(tq.id)}>
                  <SvgView svgFile={remove} width={wp(20)} height={hp(20)} />
                </Pressable>
              </View>
              <SpacerAtom height={hp(8)} />
              <TextAtom variant="caption" style={styles.fieldLabel}>Title</TextAtom>
              <SpacerAtom height={hp(6)} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter title..."
                placeholderTextColor="#9CA3AF"
                value={tq.title}
                onChangeText={v => updateTitleQuestion(tq.id, 'title', v)}
              />
              <SpacerAtom height={hp(10)} />
              <TextAtom variant="caption" style={styles.fieldLabel}>Question</TextAtom>
              <SpacerAtom height={hp(6)} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter question..."
                placeholderTextColor="#9CA3AF"
                value={tq.question}
                onChangeText={v => updateTitleQuestion(tq.id, 'question', v)}
              />
            </View>
          </View>
        ))}

        <SpacerAtom height={hp(24)} />
        <Separator />
        <SpacerAtom height={hp(16)} />

        {/* Action Buttons */}
        <View style={styles.actionsRow}>
          <Pressable style={styles.actionItem} onPress={addQuestion}>
            <TextAtom style={styles.actionText}>+ Add question</TextAtom>
          </Pressable>
          <Pressable style={styles.actionItem} onPress={handleAddImage}>
            <TextAtom style={styles.actionText}>+ Add Image</TextAtom>
          </Pressable>
        </View>

        <SpacerAtom height={hp(12)} />

        <Pressable style={styles.actionItem} onPress={addTitleQuestion}>
          <TextAtom style={styles.actionText}>+ Add title and question</TextAtom>
        </Pressable>

        <SpacerAtom height={hp(120)} />
      </ScrollView>

      <BottomContainer
        title="Save"
        onPress={handleSave}
        disabled={!isValid}
        bottomTwo
        titleTwo="Save as draft"
        onPressTwo={onSaveDraft}
        disabledTwo={!isValid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  scroll: { paddingHorizontal: sp(16),paddingBottom:hp(50) },
  dynamicRow: { width: '100%' },
  inputWithRemove: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: sp(8),
  },
  inputFlex: { flex: 1 },
  removeBtn: {
    paddingBottom: hp(12),
  },
  imageWrapper: { position: 'relative' },
  imagePreview: {
    width: '100%',
    height: hp(140),
    borderRadius: sp(8),
    resizeMode: 'cover',
  },
  imageRemoveBtn: {
    position: 'absolute',
    top: hp(20),
    right: wp(8),
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: sp(12),
    padding: sp(4),
  },
  titleQuestionCard: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: sp(10),
    padding: sp(14),
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fieldLabel: { color: '#374151' },
  textInput: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: sp(8),
    paddingHorizontal: sp(12),
    paddingVertical: hp(10),
    fontSize: sp(14),
    color: '#111827',
  },
  actionsRow: {
    flexDirection: 'row',
    gap: sp(20),
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    color: '#7C5CFC',
    fontSize: sp(14),
  },
});

export default CreateSurveyTemplate;
