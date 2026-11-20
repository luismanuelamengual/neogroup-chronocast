import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'staff-of-the-starweaver',
  type: 'weapon',
  name: 'Staff of the Starweaver',
  text: 'At the start of each phase, deal 2 damage to the enemy hero.',
  flavor: 'Its tip is a captured star. It is still angry.',
  faction: 'arcane',
  restriction: { kind: 'hero', heroId: 'ilyra-starweaver' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  attack: 8,
  durability: 3,
  keywords: ['ranged'],
  onPhaseStart(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 2)
  },
  ai: { value: 4, tags: ['burn'] },
  art: {
    subject: 'a slender silver staff with a tiny captured star glowing at its tip'
  }
})
