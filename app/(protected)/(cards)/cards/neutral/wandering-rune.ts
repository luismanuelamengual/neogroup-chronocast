import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'wandering-rune',
  type: 'attachment',
  name: 'Wandering Rune',
  text: 'Attach to an ally of yours: it gains +1 attack and +4 health.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 570,
  cost: 3,
  keywords: ['guardian'],
  attack: 1,
  health: 4,
  targets: ['friendlyAlly'],
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Wandering Rune: an enchanted rune made of blue steel with silver runes, on a fur rug, centered and seen from slightly below, teal accents, time rift wanderer style'
  }
})
