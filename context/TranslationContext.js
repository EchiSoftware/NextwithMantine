//This is deprecated, use NextTranslate
import { useRouter } from 'next/router'
import { createContext, useCallback, useContext } from 'react'
import es from '@/translation/es.json'
import en from '@/translation/en.json'

const TranslationContext = createContext({})

const languages = { es, en }

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined)
    throw new Error('useTranslation must be used within a TranslationProvider')
  return context
}

export function TranslationProvider(props) {
  const { locale } = useRouter()

  const t = useCallback(
    (key) => {
      return languages[locale][key]
    },
    [locale],
  )

  return (
    <TranslationContext.Provider
      value={{
        t,
      }}
    >
      {props.children}
    </TranslationContext.Provider>
  )
}
