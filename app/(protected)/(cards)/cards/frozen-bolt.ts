import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'frozen-bolt',
  type: 'ability',
  name: 'Frozen Bolt',
  text: 'Deal 11 ice damage to an enemy slot.',
  flavor: 'It stops the target, then the heart.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  element: 'ice',
  price: 65,
  cost: 4,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 11)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Frozen Bolt: a crackling bolt of energy streaking forward, covered in frost and ice crystals, in a misty valley, centered and seen from slightly below, rose pink accents, mage style'
  }
})
