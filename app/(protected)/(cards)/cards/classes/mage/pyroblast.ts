import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pyroblast',
  type: 'ability',
  name: 'Pyroblast',
  text: 'Deal 40 damage to an enemy slot. Slow.',
  flavor: 'It takes a long time to cast. It takes no time at all to finish.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'legendary',
  price: 5750,
  cost: 7,
  speed: 'slow',
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 40)
  },
  ai: { value: 9, tags: ['removal'] },
  art: {
    subject: 'a mage channeling a giant sphere of white-hot fire above her head, the air rippling'
  }
})
