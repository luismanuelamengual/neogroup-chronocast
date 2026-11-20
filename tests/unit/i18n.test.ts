import { describe, expect, it } from 'vitest'
import { DEFAULT_LOCALE, isLocale, LOCALES, matchLocale } from '@/app/i18n/config'
import { getMessages } from '@/app/i18n/messages'
import { createTranslator } from '@/app/i18n/translate'

/** Dotted paths of every message of a dictionary (plural messages are leaves). */
function collectKeys(node: unknown, prefix = ''): string[] {
  if (typeof node === 'string') {
    return [prefix]
  }

  const record = node as Record<string, unknown>

  if ('other' in record && typeof record.other === 'string') {
    return [prefix]
  }

  return Object.entries(record).flatMap(([key, value]) => collectKeys(value, prefix ? `${prefix}.${key}` : key))
}

describe('dictionaries', () => {
  it('have the same keys in every language', () => {
    const reference = collectKeys(getMessages(DEFAULT_LOCALE)).sort()

    for (const locale of LOCALES) {
      expect(collectKeys(getMessages(locale)).sort(), locale).toEqual(reference)
    }
  })

  it('use the same placeholders in every language', () => {
    const placeholders = (text: string) => [...text.matchAll(/\{(\w+)\}/g)].map((match) => match[1]).sort()
    const es = createTranslator('es')
    const en = createTranslator('en')

    for (const key of collectKeys(getMessages('es'))) {
      const params = { count: 2 }
      const spanish = es(key as never, params)
      const english = en(key as never, params)

      expect(placeholders(english), key).toEqual(placeholders(spanish))
    }
  })
})

describe('translator', () => {
  it('replaces placeholders', () => {
    expect(createTranslator('en')('auth.emails.greeting', { name: 'Ana' })).toBe('Hi Ana!')
    expect(createTranslator('es')('auth.emails.greeting', { name: 'Ana' })).toBe('¡Hola Ana!')
  })

  it('chooses the plural form with count', () => {
    expect(createTranslator('en')('home.cardCount', { count: 1 })).toBe('1 card')
    expect(createTranslator('en')('home.cardCount', { count: 40 })).toBe('40 cards')
    expect(createTranslator('es')('home.cardCount', { count: 1 })).toBe('1 carta')
    expect(createTranslator('es')('home.cardCount', { count: 40 })).toBe('40 cartas')
  })

  it('returns the key of an unknown message', () => {
    expect(createTranslator('en')('nope.missing' as never)).toBe('nope.missing')
  })
})

describe('languages', () => {
  it('recognizes the supported ones', () => {
    expect(isLocale('es')).toBe(true)
    expect(isLocale('en')).toBe(true)
    expect(isLocale('fr')).toBe(false)
    expect(isLocale(null)).toBe(false)
  })

  it('matches the Accept-Language header', () => {
    expect(matchLocale('en-US,en;q=0.9,es;q=0.8')).toBe('en')
    expect(matchLocale('es-AR,es;q=0.9')).toBe('es')
    expect(matchLocale('fr-FR,fr;q=0.9,en;q=0.5')).toBe('en')
    expect(matchLocale('fr-FR')).toBeNull()
    expect(matchLocale(null)).toBeNull()
  })
})
