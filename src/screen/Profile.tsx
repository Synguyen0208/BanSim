import {Text, View} from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import {useTranslation} from 'react-i18next';
import React, {useRef} from 'react';
import i18n from '../i18n/i18n';
import {useAppSelector} from '../hooks/hooks';

const languages = ['en', 'vi'];

const Profile = () => {
  const actionSheetLanguageRef = useRef<ActionSheet>(null);
  const language = useAppSelector(state => state.app.language);
  const {t} = useTranslation();
  const showActionSheet = () => actionSheetLanguageRef?.current?.show();
  const CANCEL_INDEX = 2;
  const onChangeLanguage = (index: number) => {
    if (index == CANCEL_INDEX) {
      return;
    }
    i18n.changeLanguage(languages[index]);
  };
  return (
    <View>
      <Text onPress={showActionSheet}>
        {t('languages')} {language}
      </Text>
      <ActionSheet
        ref={actionSheetLanguageRef}
        title={t('languages')}
        options={['English', 'Vietnamese', 'Cancel']}
        cancelButtonIndex={2}
        onPress={onChangeLanguage}
      />
    </View>
  );
};

export default Profile;
