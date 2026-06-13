import { Alert } from 'react-native'
import React from 'react'
import { CreateSurveyTemplate } from '@src/components'

const CreateSurvey = () => {
  return (
    <CreateSurveyTemplate
      onSave={() => Alert.alert('Success', 'Survey saved successfully!')}
      onSaveDraft={() => Alert.alert('Draft Saved', 'Survey saved as draft.')}
    />
  )
}

export default CreateSurvey