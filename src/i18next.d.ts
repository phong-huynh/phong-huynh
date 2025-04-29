import 'i18next'
import en from './languages/translates/en.json'
import vn from './languages/translates/vn.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en'
    resources: {
      en: typeof en
      vn: typeof vn
    }
  }
}
