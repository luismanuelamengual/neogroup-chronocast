import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bone-shards',
  type: 'ability',
  subtype: 'ritual',
  name: 'Bone Shards',
  text: 'Consume 3 (banish 3 cards of your discard pile). Deal 6 shadow damage to an enemy slot.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  consume: 3,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 6, 'shadow')
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Bone Shards: a burst of sharp bone splinters flying through the air trailing dark smoke, close-up, pale violet accents, dark end-of-time void style'
  }
})
