import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'soul-drain',
  type: 'ability',
  name: 'Soul Drain',
  text: 'Deal 12 damage to an enemy ally and your hero heals 8.',
  flavor: 'Your strength looks better on me.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 12)
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 8)
  },
  ai: { value: 3, tags: ['removal', 'heal'] },
  art: {
    subject: "a beam of green soul energy being pulled from a creature into a dark sorcerer's hand"
  }
})
