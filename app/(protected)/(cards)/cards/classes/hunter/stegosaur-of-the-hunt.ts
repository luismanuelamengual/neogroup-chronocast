import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stegosaur-of-the-hunt',
  type: 'ally',
  name: 'Stegosaur of the Hunt',
  text: 'When it enters: summon a Sabertooth Cub.',
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
    subject: 'a dinosaur, the stegosaur of the hunt, charging into battle, hunter style'
  }
})
