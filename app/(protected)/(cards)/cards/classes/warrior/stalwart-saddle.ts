import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'stalwart-saddle',
  type: 'attachment',
  name: 'Stalwart Saddle',
  text: 'Attach to an ally of yours: it gains +2 attack and +5 health.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  price: 190,
  cost: 4,
  keywords: ['guardian'],
  attack: 2,
  health: 5,
  targets: ['friendlyAlly'],
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Stalwart Saddle: an enchanted saddle made of blue steel with silver runes, on a fur rug, swirling around the center, gold accents, warrior style'
  }
})
