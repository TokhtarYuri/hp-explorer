import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en/en.json';
import ua from './ua/ua.json';

const savedLang = localStorage.getItem('language') || 'ua';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ua: { translation: ua }
    },
    lng: savedLang,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
