import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mirror-mantle',
  type: 'armor',
  name: 'Mirror Mantle',
  text: 'At the start of each phase, deal 2 damage to the enemy hero.',
  flavor: 'What you throw comes back.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  armor: 18,
  onPhaseStart(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 2)
  },
  ai: { value: 4, tags: ['burn'] },
  art: {
    subject: 'a cloak made of tiny mirror shards reflecting spells back in beams of light'
  }
})
