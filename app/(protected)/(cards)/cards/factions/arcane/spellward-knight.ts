import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'spellward-knight',
  type: 'ally',
  name: 'Spellward Knight',
  text: '',
  flavor: 'Her armor is etched with a thousand protective runes.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  price: 60,
  cost: 3,
  attack: 10,
  health: 10,
  keywords: ['shield'],
  ai: { value: 3, tags: ['defense'] },
  art: {
    subject:
      'a knight in silver armor covered with glowing blue runes, a translucent magic barrier shimmering in front of her'
  }
})
