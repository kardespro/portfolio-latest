const dictionaries = {
  en: () => import('@/app/lib/i18n/dictionaries/en.json').then((module) => module.default),
  es: () => import('@/app/lib/i18n/dictionaries/es.json').then((module) => module.default),
}

export type Lang = keyof typeof dictionaries

export async function getDictionary(lang: Lang) {
  try {
    return await dictionaries[lang]()
  } catch (error) {
    return dictionaries.en() // Fallback to English
  }
} 