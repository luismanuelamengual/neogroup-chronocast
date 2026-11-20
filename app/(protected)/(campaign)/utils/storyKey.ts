import { MessageKey } from '@/app/i18n/messages'

/** The translation keys of a campaign's story (campaigns.<hero-id> in the dictionaries). */
export function storyKey(heroId: string, part: 'title' | 'intro' | 'ending'): MessageKey {
  return `campaigns.${heroId}.${part}` as MessageKey
}

export function stageKey(heroId: string, stage: number, part: 'name' | 'text'): MessageKey {
  return `campaigns.${heroId}.stages.s${stage}.${part}` as MessageKey
}
