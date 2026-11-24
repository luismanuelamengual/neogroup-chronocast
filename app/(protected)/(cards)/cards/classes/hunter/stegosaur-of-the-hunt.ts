import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stegosaur-of-the-hunt',
  type: 'ally',
  name: 'Stegosaur of the Hunt',
  text: 'When it enters: summon a Sabertooth Cub.',
  flavor: 'Plates on its back, a club on its tail.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  weak: ['ice'],
  price: 55,
  cost: 3,
  tribe: 'saurian',
  attack: 4,
  health: 5,
  onEnter(ctx) {
    summonCard(ctx, ctx.owner, 'sabertooth-cub')
  },
  ai: { value: 3, tags: ['summon'] },
  art: {
    subject:
      'Stegosaur of the Hunt: a stegosaur with a copper hide with turquoise patina and thick plated armor, charging head-on, gold accents, hunter style'
  }
})
