import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import vi from './vi.json';

export const resources = {
  en,
  vi,
};

export const defaultNS = 'common';

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
});

export const translate = (text: string) => i18n.t(text);

export default i18n;
