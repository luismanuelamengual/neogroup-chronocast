import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hex-of-lightning',
  type: 'ability',
  name: 'Hex of Lightning',
  text: 'Stun an enemy ally. Fast.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 40,
  cost: 1,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    stunAt(ctx, ctx.targets[0])
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject: 'Hex of Lightning: glowing chains binding a struggling creature, mage style'
  }
})
