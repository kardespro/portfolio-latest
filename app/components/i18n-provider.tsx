"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { getDictionary } from "@/app/lib/i18n/dictionaries"
import { useLanguage } from "./language-provider"

const I18nContext = createContext<any>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage()
  const [dictionary, setDictionary] = useState<any>(null)

  useEffect(() => {
    getDictionary(locale).then(setDictionary)
  }, [locale])

  if (!dictionary) return null

  return (
    <I18nContext.Provider value={dictionary}>
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslations() {
  const dictionary = useContext(I18nContext)
  if (!dictionary) {
    throw new Error("useTranslations must be used within an I18nProvider")
  }
  return dictionary
} 