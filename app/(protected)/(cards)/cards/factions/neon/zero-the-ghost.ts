import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'zero-the-ghost',
  type: 'ally',
  name: 'Zero, the Ghost',
  text: 'On enter: deal 8 damage to the enemy hero.',
  flavor: 'No name, no face, no trace.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'exotic',
  price: 13000,
  cost: 6,
  attack: 24,
  health: 30,
  keywords: ['unique', 'stealth', 'quick', 'frenzy'],
  onEnter(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 8)
  },
  ai: { value: 8, tags: ['burn'] },
  art: {
    subject:
      'a legendary cyber assassin with a featureless mirrored mask and twin plasma blades in a storm of neon rain'
  }
})
