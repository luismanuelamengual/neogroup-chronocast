import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'venomous-data-thief',
  type: 'ally',
  name: 'Venomous Data Thief',
  text: 'When it enters: summon a Sabertooth Cub.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  element: 'acid',
  price: 190,
  cost: 4,
  tribe: 'netrunner',
  attack: 4,
  health: 9,
  onEnter(ctx) {
    summonCard(ctx, ctx.owner, 'sabertooth-cub')
  },
  ai: { value: 4, tags: ['summon'] },
  art: {
    subject:
      'Venomous Data Thief: a hunched adult man with freckled fair skin, a shaved head, heavy stubble and a golden nose ring, dressed in a cropped jacket with holo patches, pocketing a glowing data chip, with a booming laugh, amber accents, hunter style'
  }
})
