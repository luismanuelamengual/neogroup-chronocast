import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'holy-smite',
  type: 'ability',
  name: 'Holy Smite',
  text: 'Deal 8 damage to an enemy slot and your hero heals 4.',
  flavor: 'Light heals. Light also burns.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 50,
  cost: 2,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 8)
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 4)
  },
  ai: { value: 2, tags: ['removal', 'heal'] },
  art: {
    subject: 'a pillar of white holy fire striking down on a dark creature'
  }
})
