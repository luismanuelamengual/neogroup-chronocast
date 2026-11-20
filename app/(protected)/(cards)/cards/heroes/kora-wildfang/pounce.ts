import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pounce',
  type: 'ability',
  name: 'Pounce',
  text: 'Deal 10 damage to an enemy ally and your hero heals 4. Fast.',
  flavor: 'The jungle does not wait. Neither does Kora.',
  faction: 'primal',
  restriction: { kind: 'hero', heroId: 'kora-wildfang' },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 10)
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 4)
  },
  ai: { value: 2, tags: ['removal', 'heal'] },
  art: {
    subject: 'Kora Wildfang leaping from a tree branch onto a beast with a bone knife'
  }
})
