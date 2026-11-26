import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'wandering-rune',
  type: 'attachment',
  subtype: 'rune',
  name: 'Wandering Rune',
  text: 'Attach to an ally of yours: it gains +1 attack and +4 health.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  keywords: ['guardian'],
  attack: 1,
  health: 4,
  targets: ['friendlyAlly'],
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Wandering Rune: an enchanted rune made of blue steel with silver runes, on a fur rug, centered and seen from slightly below, teal accents, medieval magic order style'
  }
})
