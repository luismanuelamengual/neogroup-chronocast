import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'infiltrator-of-the-ambush',
  type: 'ally',
  name: 'Infiltrator of the Ambush',
  text: 'When it enters: summon a Sabertooth Cub.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  price: 205,
  cost: 5,
  tribe: 'netrunner',
  attack: 4,
  health: 12,
  onEnter(ctx) {
    summonCard(ctx, ctx.owner, 'sabertooth-cub')
  },
  ai: { value: 5, tags: ['summon'] },
  art: {
    subject:
      'a cyberpunk hacker with holographic screens, the infiltrator of the ambush, crouching, ready to strike, hunter style'
  }
})
