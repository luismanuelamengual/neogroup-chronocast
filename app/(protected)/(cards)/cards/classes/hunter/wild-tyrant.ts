import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wild-tyrant',
  type: 'ally',
  name: 'Wild Tyrant',
  text: 'When it enters: summon a Sabertooth Cub.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  weak: ['ice'],
  price: 55,
  cost: 3,
  tribe: 'saurian',
  attack: 3,
  health: 7,
  onEnter(ctx) {
    summonCard(ctx, ctx.owner, 'sabertooth-cub')
  },
  ai: { value: 3, tags: ['summon'] },
  art: {
    subject: 'a dinosaur, the wild tyrant, charging into battle, hunter style'
  }
})
