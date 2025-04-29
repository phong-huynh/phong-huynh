import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './translates/en.json'
import vn from './translates/vn.json'

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    vn: { translation: vn },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18next
