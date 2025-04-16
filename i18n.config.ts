import en from './locales/en.json'
import ar from './locales/ar.json'
export default defineI18nConfig(() => ({
  silentTranslationWarn:true,
   silentFallbackWarn:true,
  legacy: false,
  locale: 'ar',
  messages: {
    en: en,
    ar: ar,
  },

}))
